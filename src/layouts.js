'use strict';

module.exports = {
    multiplayerLobby: [
        {name: 'matchId', type: 'int16'},
        {name: 'inProgress', type: 'boolean'},
        {name: 'matchType', type: 'byte'},
        {name: 'activeMods', type: 'uint32'},
        {name: 'gameName', type: 'string'},
        {name: 'gamePassword', type: 'string', nullable: true},
        {name: 'beatmapName', type: 'string'},
        {name: 'beatmapId', type: 'int32'},
        {name: 'beatmapChecksum', type: 'string'},
        {name: 'slots', type: 'multislots'},
        {name: 'host', type: 'int32'},
        {name: 'playMode', type: 'byte'},
        {name: 'matchScoringType', type: 'byte'},
        {name: 'matchTeamType', type: 'byte'},
        {name: 'specialModes', type: 'byte'},
        {name: 'slotMods', type: 'multislotmods', requires: 'specialModes', uses: 'slots'},
        {name: 'seed', type: 'int32'}
    ],
    multiplayerJoin: [
        {name: 'matchId', type: 'int32'},
        {name: 'gamePassword', type: 'string'}
    ],
    message: [
        {name: 'sendingClient', type: 'string'},
        {name: 'message', type: 'string'},
        {name: 'target', type: 'string'},
        {name: 'senderId', type: 'int32'}
    ],
    userStatus: [
        {name: 'status', type: 'byte'},
        {name: 'statusText', type: 'string'},
        {name: 'beatmapChecksum', type: 'string'},
        {name: 'currentMods', type: 'uint32'},
        {name: 'playMode', type: 'byte'},
        {name: 'beatmapId', type: 'int32'}
    ],
    userStats: [
        {name: 'userId', type: 'int32'},
        {name: 'status', type: 'byte'},
        {name: 'statusText', type: 'string'},
        {name: 'beatmapChecksum', type: 'string'},
        {name: 'currentMods', type: 'uint32'},
        {name: 'playMode', type: 'byte'},
        {name: 'beatmapId', type: 'int32'},
        {name: 'rankedScore', type: 'uint64'},
        {name: 'accuracy', type: 'float'},
        {name: 'playCount', type: 'int32'},
        {name: 'totalScore', type: 'uint64'},
        {name: 'rank', type: 'int32'},
        {name: 'performance', type: 'int16'}
    ],
    userPresence: [
        {name: 'userId', type: 'int32'},
        {name: 'username', type: 'string'},
        {name: 'timezone', type: 'byte'},
        {name: 'countryId', type: 'byte'},
        {name: 'permissions', type: 'byte'},
        {name: 'longitude', type: 'float'},
        {name: 'latitude', type: 'float'},
        {name: 'rank', type: 'int32'}
    ],
    userQuit: [
        {name: 'userId', type: 'int32'},
        {name: 'state', type: 'byte'}
    ],
    spectateFrames: [
        {name: 'extra', type: 'int32'},
        {name: 'replayFrames', type: 'replayframes'},
        {name: 'action', type: 'byte'},
        {name: 'scoreFrame', type: 'scoreframe'}
    ],
    channel: [
        {name: 'channelName', type: 'string'},
        {name: 'channelTopic', type: 'string'},
        {name: 'channelUserCount', type: 'int16'}
    ]
};