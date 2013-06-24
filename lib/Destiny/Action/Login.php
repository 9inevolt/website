<?php

namespace Destiny\Action;

use Destiny\Utils\Http;
use Destiny\Service\UserService;
use Destiny\Service\AuthenticationService;
use Destiny\AppException;
use Destiny\Config;
use Destiny\Session;
use Destiny\ViewModel;
use Destiny\OAuthClient;

class Login {

	public function executeGet(array $params, ViewModel $model) {
		if (Session::hasRole ( \Destiny\UserRole::USER )) {
			throw new AppException ( 'You are already registered' );
		}
		$model->title = 'Login';
		return 'login';
	}

	public function executePost(array $params, ViewModel $model) {
		$userService = UserService::instance ();
		$authProvider = (isset ( $params ['authProvider'] ) && ! empty ( $params ['authProvider'] )) ? $params ['authProvider'] : '';
		$rememberme = (isset ( $params ['rememberme'] ) && ! empty ( $params ['rememberme'] )) ? true : false;
		if (empty ( $authProvider )) {
			$model->title = 'Login error';
			$model->rememberme = $rememberme;
			$model->error = new AppException ( 'Please select a authentication provider' );
			return 'login';
		}
		if ($rememberme) {
			Session::set ( 'rememberme', 1 );
		}
		
		// If this user is already logged in
		if (Session::hasRole ( 'user' )) {
			// check if the auth provider you are trying to login with is not the same as the current
			$currentAuthProvider = Session::getAuthCreds ()->getAuthProvider ();
			if (strcasecmp ( $currentAuthProvider, $authProvider ) === 0) {
				throw new AppException ( 'You are already logged in and authenticated using this provider.' );
			}
			// We do this because some oauth providers don't support multiple callbacks
			// Do an extra check for a variable that is only sent from the form within the profile
			if (! isset ( $params ['accountMerge'] ) || $params ['accountMerge'] != '1') {
				throw new AppException ( 'Account merge failed' );
			}
			// Set a session var that is picked up in the AuthenticationService
			Session::set ( 'accountMerge', 1 );
		}
		
		$callback = sprintf ( Config::$a ['oauth'] ['callback'], strtolower ( $authProvider ) );
		switch (strtoupper ( $authProvider )) {
			case 'TWITCH' :
				$authClient = new oAuthClient ( Config::$a ['oauth'] ['providers'] ['twitch'] );
				$authClient->sendAuthorisation ( 'https://api.twitch.tv/kraken/oauth2/authorize', $callback, 'user_read' );
				exit ();
			
			case 'GOOGLE' :
				$authClient = new OAuthClient ( Config::$a ['oauth'] ['providers'] ['google'] );
				$authClient->sendAuthorisation ( 'https://accounts.google.com/o/oauth2/auth', $callback, 'openid', array (
						'state' => 'security_token=' . Session::getSessionId () 
				) );
				exit ();
			
			case 'TWITTER' :
				$tmhOAuth = new \tmhOAuth ( Config::$a ['oauth'] ['providers'] ['twitter'] );
				$tmhOAuth->reconfigure ( array_merge ( $tmhOAuth->config, array (
						'curl_connecttimeout' => Config::$a ['curl'] ['connecttimeout'],
						'curl_timeout' => Config::$a ['curl'] ['timeout'],
						'curl_ssl_verifypeer' => Config::$a ['curl'] ['verifypeer'] 
				) ) );
				$code = $tmhOAuth->apponly_request ( array (
						'without_bearer' => true,
						'method' => 'POST',
						'url' => $tmhOAuth->url ( 'oauth/request_token', '' ),
						'params' => array (
								'oauth_callback' => $callback 
						) 
				) );
				if ($code != 200) {
					throw new AppException ( 'There was an error communicating with Twitter.' );
				}
				$response = $tmhOAuth->extract_params ( $tmhOAuth->response ['response'] );
				if ($response ['oauth_callback_confirmed'] !== 'true') {
					throw new AppException ( 'The callback was not confirmed by Twitter so we cannot continue.' );
				}
				Session::set ( 'oauth', $response );
				$url = $tmhOAuth->url ( 'oauth/authorize', '' ) . "?oauth_token={$response['oauth_token']}";
				Http::header ( Http::HEADER_LOCATION, $url );
				exit ();
			
			default :
				$model->title = 'Login error';
				$model->rememberme = $rememberme;
				$model->error = new AppException ( 'Auth type not supported' );
				return 'login';
		}
	}

}