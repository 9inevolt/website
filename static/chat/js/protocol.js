var destinygg_chatprotocol = {
    "package": "destinygg.chatprotocol",
    "messages": [
        {
            "name": "Event",
            "fields": [
                {
                    "rule": "required",
                    "type": "Event",
                    "name": "event",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Error",
                    "name": "error",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Names",
                    "name": "names",
                    "id": 3,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Join",
                    "name": "join",
                    "id": 4,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Quit",
                    "name": "quit",
                    "id": 5,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Message",
                    "name": "message",
                    "id": 6,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Mute",
                    "name": "mute",
                    "id": 7,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Unmute",
                    "name": "unmute",
                    "id": 8,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Ban",
                    "name": "ban",
                    "id": 9,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Unban",
                    "name": "unban",
                    "id": 10,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Mode",
                    "name": "mode",
                    "id": 11,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Ping",
                    "name": "ping",
                    "id": 12,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "Pong",
                    "name": "pong",
                    "id": 13,
                    "options": {}
                }
            ],
            "enums": [
                {
                    "name": "Event",
                    "values": [
                        {
                            "name": "PING",
                            "id": 0
                        },
                        {
                            "name": "PONG",
                            "id": 1
                        },
                        {
                            "name": "MESSAGE",
                            "id": 2
                        },
                        {
                            "name": "PRIVMESSAGE",
                            "id": 3
                        },
                        {
                            "name": "MUTE",
                            "id": 4
                        },
                        {
                            "name": "UNMUTE",
                            "id": 5
                        },
                        {
                            "name": "BAN",
                            "id": 6
                        },
                        {
                            "name": "UNBAN",
                            "id": 7
                        },
                        {
                            "name": "MODE",
                            "id": 8
                        },
                        {
                            "name": "NAMES",
                            "id": 9
                        },
                        {
                            "name": "JOIN",
                            "id": 10
                        },
                        {
                            "name": "QUIT",
                            "id": 11
                        },
                        {
                            "name": "ERROR",
                            "id": 12
                        },
                        {
                            "name": "REFRESH",
                            "id": 13
                        },
                        {
                            "name": "OPEN",
                            "id": 14
                        },
                        {
                            "name": "CLOSE",
                            "id": 15
                        }
                    ],
                    "options": {}
                }
            ],
            "messages": [],
            "options": {}
        },
        {
            "name": "Error",
            "fields": [
                {
                    "rule": "required",
                    "type": "Error",
                    "name": "error",
                    "id": 1,
                    "options": {}
                }
            ],
            "enums": [
                {
                    "name": "Error",
                    "values": [
                        {
                            "name": "PROTOCOLERROR",
                            "id": 0
                        },
                        {
                            "name": "INVALIDMESSAGE",
                            "id": 1
                        },
                        {
                            "name": "NEEDLOGIN",
                            "id": 2
                        },
                        {
                            "name": "DUPLICATE",
                            "id": 3
                        },
                        {
                            "name": "THROTTLED",
                            "id": 4
                        },
                        {
                            "name": "NOPERMISSION",
                            "id": 5
                        },
                        {
                            "name": "NOTFOUND",
                            "id": 6
                        },
                        {
                            "name": "NEEDBANREASON",
                            "id": 7
                        },
                        {
                            "name": "SUBONLY",
                            "id": 8
                        },
                        {
                            "name": "BANNED",
                            "id": 9
                        },
                        {
                            "name": "MUTED",
                            "id": 10
                        },
                        {
                            "name": "SOCKETERROR",
                            "id": 11
                        }
                    ],
                    "options": {}
                }
            ],
            "messages": [],
            "options": {}
        },
        {
            "name": "User",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "nick",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "repeated",
                    "type": "Feature",
                    "name": "features",
                    "id": 2,
                    "options": {}
                }
            ],
            "enums": [
                {
                    "name": "Feature",
                    "values": [
                        {
                            "name": "ADMINISTRATOR",
                            "id": 1
                        },
                        {
                            "name": "MODERATOR",
                            "id": 2
                        },
                        {
                            "name": "VIP",
                            "id": 3
                        },
                        {
                            "name": "PROTECTED",
                            "id": 4
                        },
                        {
                            "name": "SUBSCRIBER",
                            "id": 5
                        },
                        {
                            "name": "BOT",
                            "id": 6
                        },
                        {
                            "name": "FLAIR1",
                            "id": 7
                        },
                        {
                            "name": "FLAIR2",
                            "id": 8
                        },
                        {
                            "name": "FLAIR3",
                            "id": 9
                        },
                        {
                            "name": "FLAIR4",
                            "id": 10
                        },
                        {
                            "name": "FLAIR5",
                            "id": 11
                        },
                        {
                            "name": "FLAIR6",
                            "id": 12
                        },
                        {
                            "name": "FLAIR7",
                            "id": 13
                        },
                        {
                            "name": "FLAIR8",
                            "id": 14
                        },
                        {
                            "name": "FLAIR9",
                            "id": 15
                        },
                        {
                            "name": "FLAIR10",
                            "id": 16
                        },
                        {
                            "name": "FLAIR11",
                            "id": 17
                        },
                        {
                            "name": "FLAIR12",
                            "id": 18
                        },
                        {
                            "name": "FLAIR13",
                            "id": 19
                        },
                        {
                            "name": "FLAIR14",
                            "id": 20
                        },
                        {
                            "name": "FLAIR15",
                            "id": 22
                        },
                        {
                            "name": "FLAIR16",
                            "id": 23
                        },
                        {
                            "name": "FLAIR17",
                            "id": 24
                        },
                        {
                            "name": "FLAIR18",
                            "id": 25
                        },
                        {
                            "name": "FLAIR19",
                            "id": 26
                        },
                        {
                            "name": "FLAIR20",
                            "id": 27
                        },
                        {
                            "name": "FLAIR21",
                            "id": 28
                        },
                        {
                            "name": "FLAIR22",
                            "id": 29
                        },
                        {
                            "name": "FLAIR23",
                            "id": 30
                        },
                        {
                            "name": "FLAIR24",
                            "id": 31
                        },
                        {
                            "name": "FLAIR25",
                            "id": 32
                        }
                    ],
                    "options": {}
                }
            ],
            "messages": [],
            "options": {}
        },
        {
            "name": "Names",
            "fields": [
                {
                    "rule": "optional",
                    "type": "uint32",
                    "name": "connectioncount",
                    "id": 1,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "repeated",
                    "type": "User",
                    "name": "users",
                    "id": 2,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Join",
            "fields": [
                {
                    "rule": "required",
                    "type": "User",
                    "name": "user",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "timestamp",
                    "id": 2,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Quit",
            "fields": [
                {
                    "rule": "required",
                    "type": "User",
                    "name": "user",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "timestamp",
                    "id": 2,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Message",
            "fields": [
                {
                    "rule": "optional",
                    "type": "User",
                    "name": "user",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "message",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "timestamp",
                    "id": 3,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Mute",
            "fields": [
                {
                    "rule": "optional",
                    "type": "User",
                    "name": "user",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "targetnick",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "duration",
                    "id": 3,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "timestamp",
                    "id": 4,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Unmute",
            "fields": [
                {
                    "rule": "optional",
                    "type": "User",
                    "name": "user",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "targetnick",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "timestamp",
                    "id": 3,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Ban",
            "fields": [
                {
                    "rule": "optional",
                    "type": "User",
                    "name": "user",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "targetnick",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "reason",
                    "id": 3,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "duration",
                    "id": 4,
                    "options": {
                        "default": 0
                    }
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "banip",
                    "id": 5,
                    "options": {
                        "default": "false"
                    }
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "ispermanent",
                    "id": 6,
                    "options": {
                        "default": "false"
                    }
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "timestamp",
                    "id": 7,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Unban",
            "fields": [
                {
                    "rule": "optional",
                    "type": "User",
                    "name": "user",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "targetnick",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "timestamp",
                    "id": 3,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Mode",
            "fields": [
                {
                    "rule": "optional",
                    "type": "User",
                    "name": "user",
                    "id": 1,
                    "options": {}
                },
                {
                    "rule": "required",
                    "type": "Mode",
                    "name": "mode",
                    "id": 2,
                    "options": {}
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "timestamp",
                    "id": 3,
                    "options": {}
                }
            ],
            "enums": [
                {
                    "name": "Mode",
                    "values": [
                        {
                            "name": "SUBONLY",
                            "id": 0
                        },
                        {
                            "name": "UNSUBONLY",
                            "id": 1
                        }
                    ],
                    "options": {}
                }
            ],
            "messages": [],
            "options": {}
        },
        {
            "name": "Ping",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "timestamp",
                    "id": 1,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Pong",
            "fields": [
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "timestamp",
                    "id": 1,
                    "options": {}
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        }
    ],
    "enums": [],
    "imports": [],
    "options": {}
};
