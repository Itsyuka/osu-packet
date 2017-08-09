'use strict';

module.exports = {
    Client_SendUserStatus: 0,
    Client_SendIrcMessage: 1,
    Client_Exit: 2,
    Client_RequestStatusUpdate: 3,
    Client_Pong: 4,
    Bancho_LoginReply: 5,
    Bancho_CommandError: 6,
    Bancho_SendMessage: 7,
    Bancho_Ping: 8,
    Bancho_HandleIrcChangeUsername: 9,
    Bancho_HandleIrcQuit: 10,
    Bancho_HandleOsuUpdate: 11,
    Bancho_HandleUserQuit: 12,
    Bancho_SpectatorJoined: 13,
    Bancho_SpectatorLeft: 14,
    Bancho_SpectateFrames: 15,
    Client_StartSpectating: 16,
    Client_StopSpectating: 17,
    Client_SpectateFrames: 18,
    Bancho_VersionUpdate: 19,
    Client_ErrorReport: 20,
    Client_CantSpectate: 21,
    Bancho_SpectatorCantSpectate: 22,
    Bancho_GetAttention: 23,
    Bancho_Announce: 24,
    Client_SendIrcMessagePrivate: 25,
    Bancho_MatchUpdate: 26,
    Bancho_MatchNew: 27,
    Bancho_MatchDisband: 28,
    Client_LobbyPart: 29,
    Client_LobbyJoin: 30,
    Client_MatchCreate: 31,
    Client_MatchJoin: 32,
    Client_MatchPart: 33,
    Bancho_MatchJoinSuccess: 36,
    Bancho_MatchJoinFail: 37,
    Client_MatchChangeSlot: 38,
    Client_MatchReady: 39,
    Client_MatchLock: 40,
    Client_MatchChangeSettings: 41,
    Bancho_FellowSpectatorJoined: 42,
    Bancho_FellowSpectatorLeft: 43,
    Client_MatchStart: 44,
    Bancho_MatchStart: 46,
    Client_MatchScoreUpdate: 47,
    Bancho_MatchScoreUpdate: 48,
    Client_MatchComplete: 49,
    Bancho_MatchTransferHost: 50,
    Client_MatchChangeMods: 51,
    Client_MatchLoadComplete: 52,
    Bancho_MatchAllPlayersLoaded: 53,
    Client_MatchNoBeatmap: 54,
    Client_MatchNotReady: 55,
    Client_MatchFailed: 56,
    Bancho_MatchPlayerFailed: 57,
    Bancho_MatchComplete: 58,
    Client_MatchHasBeatmap: 59,
    Client_MatchSkipRequest: 60,
    Bancho_MatchSkip: 61,
    Bancho_Unauthorised: 62,
    Client_ChannelJoin: 63,
    Bancho_ChannelJoinSuccess: 64,
    Bancho_ChannelAvailable: 65,
    Bancho_ChannelRevoked: 66,
    Bancho_ChannelAvailableAutojoin: 67,
    Client_BeatmapInfoRequest: 68,
    Bancho_BeatmapInfoReply: 69,
    Client_MatchTransferHost: 70,
    Bancho_LoginPermissions: 71,
    Bancho_FriendsList: 72,
    Client_FriendAdd: 73,
    Client_FriendRemove: 74,
    Bancho_ProtocolNegotiation: 75,
    Bancho_TitleUpdate: 76,
    Client_MatchChangeTeam: 77,
    Client_ChannelLeave: 78,
    Client_ReceiveUpdates: 79,
    Bancho_Monitor: 80,
    Bancho_MatchPlayerSkipped: 81,
    Client_SetIrcAwayMessage: 82,
    Bancho_UserPresence: 83,
    Client_UserStatsRequest: 85,
    Bancho_Restart: 86,
    Client_Invite: 87,
    Bancho_Invite: 88,
    Bancho_ChannelListingComplete: 89,
    Client_MatchChangePassword: 90,
    Bancho_MatchChangePassword: 91,
    Bancho_BanInfo: 92,
    Client_SpecialMatchInfoRequest: 93,
    Bancho_UserSilenced: 94,
    Bancho_UserPresenceSingle: 95,
    Bancho_UserPresenceBundle: 96,
    Client_UserPresenceRequest: 97,
    Client_UserPresenceRequestAll: 98,
    Client_UserToggleBlockNonFriendPM: 99,
    Bancho_UserPMBlocked: 100,
    Bancho_TargetIsSilenced: 101,
    Bancho_VersionUpdateForced: 102,
    Bancho_SwitchServer: 103,
    Bancho_AccountRestricted: 104,
    Bancho_RTX: 105,
    Client_MatchAbort: 106,
    Bancho_SwitchTourneyServer: 107,
    Client_SpecialJoinMatchChannel: 108,
    Client_SpecialLeaveMatchChannel: 109,

    idToString: [
        'SendUserStatus',
        'SendIrcMessage',
        'Exit',
        'RequestStatusUpdate',
        'Pong',
        'LoginReply',
        'CommandError',
        'SendMessage',
        'Ping',
        'HandleIrcChangeUsername',
        'HandleIrcQuit',
        'HandleOsuUpdate',
        'HandleUserQuit',
        'SpectatorJoined',
        'SpectatorLeft',
        'SpectateFrames',
        'StartSpectating',
        'StopSpectating',
        'SpectateFrames',
        'VersionUpdate',
        'ErrorReport',
        'CantSpectate',
        'SpectatorCantSpectate',
        'GetAttention',
        'Announce',
        'SendIrcMessagePrivate',
        'MatchUpdate',
        'MatchNew',
        'MatchDisband',
        'LobbyPart',
        'LobbyJoin',
        'MatchCreate',
        'MatchJoin',
        'MatchPart',
        'LobbyJoin',
        'LobbyPart',
        'MatchJoinSuccess',
        'MatchJoinFail',
        'MatchChangeSlot',
        'MatchReady',
        'MatchLock',
        'MatchChangeSettings',
        'FellowSpectatorJoined',
        'FellowSpectatorLeft',
        'MatchStart',
        'AllPlayersLoaded',
        'MatchStart',
        'MatchScoreUpdate',
        'MatchScoreUpdate',
        'MatchComplete',
        'MatchTransferHost',
        'MatchChangeMods',
        'MatchLoadComplete',
        'MatchAllPlayersLoaded',
        'MatchNoBeatmap',
        'MatchNotReady',
        'MatchFailed',
        'MatchPlayerFailed',
        'MatchComplete',
        'MatchHasBeatmap',
        'MatchSkipRequest',
        'MatchSkip',
        'Unauthorised',
        'ChannelJoin',
        'ChannelJoinSuccess',
        'ChannelAvailable',
        'ChannelRevoked',
        'ChannelAvailableAutojoin',
        'BeatmapInfoRequest',
        'BeatmapInfoReply',
        'MatchTransferHost',
        'LoginPermissions',
        'FriendsList',
        'FriendAdd',
        'FriendRemove',
        'ProtocolNegotiation',
        'TitleUpdate',
        'MatchChangeTeam',
        'ChannelLeave',
        'ReceiveUpdates',
        'Monitor',
        'MatchPlayerSkipped',
        'SetIrcAwayMessage',
        'UserPresence',
        'Irc_Only',
        'UserStatsRequest',
        'Restart',
        'Invite',
        'Invite',
        'ChannelListingComplete',
        'MatchChangePassword',
        'MatchChangePassword',
        'BanInfo',
        'SpecialMatchInfoRequest',
        'UserSilenced',
        'UserPresenceSingle',
        'UserPresenceBundle',
        'UserPresenceRequest',
        'UserPresenceRequestAll',
        'UserToggleBlockNonFriendPM',
        'UserPMBlocked',
        'TargetIsSilenced',
        'VersionUpdateForced',
        'SwitchServer',
        'AccountRestricted',
        'RTX',
        'MatchAbort',
        'SwitchTourneyServer',
        'SpecialJoinMatchChannel',
        'SpecialLeaveMatchChannel',
    ]
};

/**
 * @typedef {Object} UserId
 * @prop {Number} userId
 */

/**
 * @typedef {Object} UserStatus
 * @prop {Number} status
 * @prop {String} statusText
 * @prop {String} beatmapChecksum
 * @prop {Number} currentMods
 * @prop {Number} playMode
 * @prop {Number} beatmapId
 */

/**
 * @typedef {Object} Match
 * @prop {Number} matchId
 * @prop {Boolean} inProgress
 * @prop {Number} matchType
 * @prop {Number} activeMods
 * @prop {String} gameName
 * @prop {String} gamePassword
 * @prop {String} beatmapName
 * @prop {Number} beatmapId
 * @prop {String} beatmapChecksum
 * @prop {Array} slots
 * @prop {Number} playMode
 * @prop {Number} matchScoringType
 * @prop {Number} matchTeamType
 * @prop {Number} specialModes
 * @prop {Array} slotMods
 * @prop {Number} seed
 */

/**
 * @typedef {Object} SlotId
 * @prop {Number} slotId
 */

/**
 * @typedef {Object} MatchJoin
 * @prop {Number} matchId
 * @prop {String} gamePassword
 */

/**
 * @typedef {Object} Message
 * @prop {String} sendingClient
 * @prop {String} message
 * @prop {String} target
 * @prop {Number} senderId
 */

/**
 * @typedef {Object} ScoreFrame
 * @prop {Number} time
 * @prop {Number} id
 * @prop {Number} count300
 * @prop {Number} count100
 * @prop {Number} count50
 * @prop {Number} countGeki
 * @prop {Number} countKatu
 * @prop {Number} countMiss
 * @prop {Number} totalScore
 * @prop {Number} maxCombo
 * @prop {Number} currentCombo
 * @prop {Boolean} perfect
 * @prop {Number} currentHp
 * @prop {Number} tagByte
 * @prop {Boolean} usingScoreV2
 * @prop {Number} comboPortion
 * @prop {Number} bonusPortion
 */

/**
 * @typedef {Object} ReplayFrame
 * @prop {Number} extra
 * @prop {Array} replayFrames
 * @prop {Number} action
 * @prop {Object} scoreFrame
 */

/**
 * @typedef {Object} ChannelName
 * @prop {String} channelName
 */

/**
 * @typedef {Object} UserIds
 * @prop {Array.<Number>} userIds
 */

/**
 * @typedef {Object} CurrentMods
 * @prop {Number} currentMods
 */

/**
 * @typedef {Object} Reason
 * @prop {Number} reason
 */

/**
 * @typedef {Object} RandomInt
 * @prop {Number} randomInt
 */

/**
 * @typedef {Object} MatchId
 * @prop {Number} matchId
 */

/**
 * @typedef {Object} BlockPM
 * @prop {Number} blockPM
 */


/**
 * @typedef {Object} Reply
 * @prop {Number} reply
 */

/**
 * @typedef {Object} MessageString
 * @prop {String} message
 */

/**
 * @typedef {Object} UserQuit
 * @prop {Number} userId
 * @prop {Number} state
 */

/**
 * @typedef {Object} Channel
 * @prop {String} channelName
 * @prop {String} channelTopic
 * @prop {Number} channelUserCount
 */

/**
 * @typedef {Object} Friends
 * @prop {Array} friends
 */

/**
 * @typedef {Object} TitleImage
 * @prop {String} titleImage
 */

/**
 * @typedef {Object} Length
 * @prop {Number} length
 */

/**
 * @typedef {Object} UserPresence
 * @prop {Number} userId
 * @prop {String} username
 * @prop {Number} timezone
 * @prop {Number} countryId
 * @prop {Number} permissions
 * @prop {Number} longitude
 * @prop {Number} latitude
 * @prop {Number} rank
 */

/**
 * @typedef {Object} OsuUpdate
 * @prop {Number} userId
 * @prop {Number} status
 * @prop {String} statusText
 * @prop {String} beatmapChecksum
 * @prop {Number} currentMods
 * @prop {Number} playMode
 * @prop {Number} beatmapId
 * @prop {Number} rankedScore
 * @prop {Number} accuracy
 * @prop {Number} playCount
 * @prop {Number} totalScore
 * @prop {Number} rank
 * @prop {Number} performance
 */

/**
 * @typedef {Object} GamePassword
 * @prop {String} gamePassword
 */

/**
 * @typedef {Object} ServerHost
 * @prop {String} serverHost
 */

/**
 * @typedef {Object} Permissions
 * @prop {Number} permissions
 */

/**
 * @typedef {Object} Protocol
 * @prop {Number} protocol
 */