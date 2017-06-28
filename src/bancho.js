'use strict';
const Base = require('./base');
const Packet = require('./packets');

class Bancho extends Base {
    constructor(input) {
        super(input);
    }

    ReadLoginReply(raw) {
        return {
            id: Packet.Bancho_LoginReply, data: this.UnmarshalPacket(raw, [
                {name: 'reply', type: 'int32'}
            ])
        }
    }

    WriteLoginReply(data) {
        return this.WritePacket({
            id: Packet.Bancho_LoginReply, data: this.MarshalPacket(data, [
                {name: 'reply', type: 'int32'}
            ])
        })
    }

    ReadCommandError(raw) {
        return {
            id: Packet.Bancho_CommandError, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteCommandError(data) {
        return this.WritePacket({
            id: Packet.Bancho_CommandError, data: this.MarshalPacket(data, [])
        })
    }

    ReadSendMessage(raw) {
        return {
            id: Packet.Bancho_SendMessage, data: this.UnmarshalPacket(raw, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        }
    }

    WriteSendMessage(data) {
        return this.WritePacket({
            id: Packet.Bancho_SendMessage, data: this.MarshalPacket(data, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        })
    }

    ReadPing(raw) {
        return {
            id: Packet.Bancho_Ping, data: this.UnmarshalPacket(raw, [])
        }
    }

    WritePing(data) {
        return this.WritePacket({
            id: Packet.Bancho_Ping, data: this.MarshalPacket(data, [])
        })
    }

    ReadHandleIrcChangeUsername(raw) {
        return {
            id: Packet.Bancho_HandleIrcChangeUsername, data: this.UnmarshalPacket(raw, [
                {name: 'message', type: 'string'}
            ])
        }
    }

    WriteHandleIrcChangeUsername(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleIrcChangeUsername, data: this.MarshalPacket(data, [
                {name: 'message', type: 'string'}
            ])
        })
    }

    ReadHandleIrcQuit(raw) {
        return {
            id: Packet.Bancho_HandleIrcQuit, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteHandleIrcQuit(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleIrcQuit, data: this.MarshalPacket(data, [])
        })
    }

    ReadHandleClientUpdate(raw) {
        return {
            id: Packet.Bancho_HandleClientUpdate, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteHandleClientUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleClientUpdate, data: this.MarshalPacket(data, [])
        })
    }

    ReadHandleUserQuit(raw) {
        return {
            id: Packet.Bancho_HandleUserQuit, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'},
                {name: 'state', type: 'byte'}
            ])
        }
    }

    WriteHandleUserQuit(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleUserQuit, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'},
                {name: 'state', type: 'byte'}
            ])
        })
    }

    ReadSpectatorJoined(raw) {
        return {
            id: Packet.Bancho_SpectatorJoined, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    WriteSpectatorJoined(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorJoined, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    ReadSpectatorLeft(raw) {
        return {
            id: Packet.Bancho_SpectatorLeft, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    WriteSpectatorLeft(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorLeft, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    ReadSpectateFrames(raw) {
        return {
            id: Packet.Bancho_SpectateFrames, data: this.UnmarshalPacket(raw, [
                {name: 'extra', type: 'int32'},
                {name: 'replayFrames', type: 'replayframes'},
                {name: 'action', type: 'byte'},
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        }
    }

    WriteSpectateFrames(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectateFrames, data: this.MarshalPacket(data, [
                {name: 'extra', type: 'int32'},
                {name: 'replayFrames', type: 'replayframes'},
                {name: 'action', type: 'byte'},
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        })
    }

    ReadVersionUpdate(raw) {
        return {
            id: Packet.Bancho_VersionUpdate, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteVersionUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_VersionUpdate, data: this.MarshalPacket(data, [])
        })
    }

    ReadSpectatorCantSpectate(raw) {
        return {
            id: Packet.Bancho_SpectatorCantSpectate, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    WriteSpectatorCantSpectate(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorCantSpectate, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    ReadGetAttention(raw) {
        return {
            id: Packet.Bancho_GetAttention, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteGetAttention(data) {
        return this.WritePacket({
            id: Packet.Bancho_GetAttention, data: this.MarshalPacket(data, [])
        })
    }

    ReadAnnounce(raw) {
        return {
            id: Packet.Bancho_Announce, data: this.UnmarshalPacket(raw, [
                {name: 'message', type: 'string'}
            ])
        }
    }

    WriteAnnounce(data) {
        return this.WritePacket({
            id: Packet.Bancho_Announce, data: this.MarshalPacket(data, [
                {name: 'message', type: 'string'}
            ])
        })
    }

    ReadMatchUpdate(raw) {
        return {
            id: Packet.Bancho_MatchUpdate, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int16'},
                {name: 'inProgress', type: 'boolean'},
                {name: 'matchType', type: 'byte'},
                {name: 'activeMods', type: 'uint32'},
                {name: 'gameName', type: 'string'},
                {name: 'gamePassword', type: 'string'},
                {name: 'beatmapName', type: 'string'},
                {name: 'beatmapId', type: 'int32'},
                {name: 'beatmapChecksum', type: 'string'},
                {name: 'slots', type: 'multislots'},
                {name: 'host', type: 'int32'},
                {name: 'playMode', type: 'byte'},
                {name: 'matchScoringType', type: 'byte'},
                {name: 'matchTeamType', type: 'byte'},
                {name: 'specialModes', type: 'byte'},
                {name: 'slotMods', type: 'multislotmods'}
            ])
        }
    }

    WriteMatchUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchUpdate, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int16'},
                {name: 'inProgress', type: 'boolean'},
                {name: 'matchType', type: 'byte'},
                {name: 'activeMods', type: 'uint32'},
                {name: 'gameName', type: 'string'},
                {name: 'gamePassword', type: 'string'},
                {name: 'beatmapName', type: 'string'},
                {name: 'beatmapId', type: 'int32'},
                {name: 'beatmapChecksum', type: 'string'},
                {name: 'slots', type: 'multislots'},
                {name: 'host', type: 'int32'},
                {name: 'playMode', type: 'byte'},
                {name: 'matchScoringType', type: 'byte'},
                {name: 'matchTeamType', type: 'byte'},
                {name: 'specialModes', type: 'byte'},
                {name: 'slotMods', type: 'multislotmods'}
            ])
        })
    }

    ReadMatchNew(raw) {
        return {
            id: Packet.Bancho_MatchNew, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int16'},
                {name: 'inProgress', type: 'boolean'},
                {name: 'matchType', type: 'byte'},
                {name: 'activeMods', type: 'uint32'},
                {name: 'gameName', type: 'string'},
                {name: 'gamePassword', type: 'string'},
                {name: 'beatmapName', type: 'string'},
                {name: 'beatmapId', type: 'int32'},
                {name: 'beatmapChecksum', type: 'string'},
                {name: 'slots', type: 'multislots'},
                {name: 'host', type: 'int32'},
                {name: 'playMode', type: 'byte'},
                {name: 'matchScoringType', type: 'byte'},
                {name: 'matchTeamType', type: 'byte'},
                {name: 'specialModes', type: 'byte'},
                {name: 'slotMods', type: 'multislotmods'}
            ])
        }
    }

    WriteMatchNew(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchNew, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int16'},
                {name: 'inProgress', type: 'boolean'},
                {name: 'matchType', type: 'byte'},
                {name: 'activeMods', type: 'uint32'},
                {name: 'gameName', type: 'string'},
                {name: 'gamePassword', type: 'string'},
                {name: 'beatmapName', type: 'string'},
                {name: 'beatmapId', type: 'int32'},
                {name: 'beatmapChecksum', type: 'string'},
                {name: 'slots', type: 'multislots'},
                {name: 'host', type: 'int32'},
                {name: 'playMode', type: 'byte'},
                {name: 'matchScoringType', type: 'byte'},
                {name: 'matchTeamType', type: 'byte'},
                {name: 'specialModes', type: 'byte'},
                {name: 'slotMods', type: 'multislotmods'}
            ])
        })
    }

    ReadMatchDisband(raw) {
        return {
            id: Packet.Bancho_MatchDisband, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int32'}
            ])
        }
    }

    WriteMatchDisband(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchDisband, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int32'}
            ])
        })
    }

    ReadMatchJoinSuccess(raw) {
        return {
            id: Packet.Bancho_MatchJoinSuccess, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int16'},
                {name: 'inProgress', type: 'boolean'},
                {name: 'matchType', type: 'byte'},
                {name: 'activeMods', type: 'uint32'},
                {name: 'gameName', type: 'string'},
                {name: 'gamePassword', type: 'string'},
                {name: 'beatmapName', type: 'string'},
                {name: 'beatmapId', type: 'int32'},
                {name: 'beatmapChecksum', type: 'string'},
                {name: 'slots', type: 'multislots'},
                {name: 'host', type: 'int32'},
                {name: 'playMode', type: 'byte'},
                {name: 'matchScoringType', type: 'byte'},
                {name: 'matchTeamType', type: 'byte'},
                {name: 'specialModes', type: 'byte'},
                {name: 'slotMods', type: 'multislotmods'}
            ])
        }
    }

    WriteMatchJoinSuccess(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchJoinSuccess, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int16'},
                {name: 'inProgress', type: 'boolean'},
                {name: 'matchType', type: 'byte'},
                {name: 'activeMods', type: 'uint32'},
                {name: 'gameName', type: 'string'},
                {name: 'gamePassword', type: 'string'},
                {name: 'beatmapName', type: 'string'},
                {name: 'beatmapId', type: 'int32'},
                {name: 'beatmapChecksum', type: 'string'},
                {name: 'slots', type: 'multislots'},
                {name: 'host', type: 'int32'},
                {name: 'playMode', type: 'byte'},
                {name: 'matchScoringType', type: 'byte'},
                {name: 'matchTeamType', type: 'byte'},
                {name: 'specialModes', type: 'byte'},
                {name: 'slotMods', type: 'multislotmods'}
            ])
        })
    }

    ReadMatchJoinFail(raw) {
        return {
            id: Packet.Bancho_MatchJoinFail, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchJoinFail(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchJoinFail, data: this.MarshalPacket(data, [])
        })
    }

    ReadFellowSpectatorJoined(raw) {
        return {
            id: Packet.Bancho_FellowSpectatorJoined, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    WriteFellowSpectatorJoined(data) {
        return this.WritePacket({
            id: Packet.Bancho_FellowSpectatorJoined, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    ReadFellowSpectatorLeft(raw) {
        return {
            id: Packet.Bancho_FellowSpectatorLeft, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    WriteFellowSpectatorLeft(data) {
        return this.WritePacket({
            id: Packet.Bancho_FellowSpectatorLeft, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    ReadMatchStart(raw) {
        return {
            id: Packet.Bancho_MatchStart, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int16'},
                {name: 'inProgress', type: 'boolean'},
                {name: 'matchType', type: 'byte'},
                {name: 'activeMods', type: 'uint32'},
                {name: 'gameName', type: 'string'},
                {name: 'gamePassword', type: 'string'},
                {name: 'beatmapName', type: 'string'},
                {name: 'beatmapId', type: 'int32'},
                {name: 'beatmapChecksum', type: 'string'},
                {name: 'slots', type: 'multislots'},
                {name: 'host', type: 'int32'},
                {name: 'playMode', type: 'byte'},
                {name: 'matchScoringType', type: 'byte'},
                {name: 'matchTeamType', type: 'byte'},
                {name: 'specialModes', type: 'byte'},
                {name: 'slotMods', type: 'multislotmods'}
            ])
        }
    }

    WriteMatchStart(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchStart, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int16'},
                {name: 'inProgress', type: 'boolean'},
                {name: 'matchType', type: 'byte'},
                {name: 'activeMods', type: 'uint32'},
                {name: 'gameName', type: 'string'},
                {name: 'gamePassword', type: 'string'},
                {name: 'beatmapName', type: 'string'},
                {name: 'beatmapId', type: 'int32'},
                {name: 'beatmapChecksum', type: 'string'},
                {name: 'slots', type: 'multislots'},
                {name: 'host', type: 'int32'},
                {name: 'playMode', type: 'byte'},
                {name: 'matchScoringType', type: 'byte'},
                {name: 'matchTeamType', type: 'byte'},
                {name: 'specialModes', type: 'byte'},
                {name: 'slotMods', type: 'multislotmods'},
                {name: 'seed', type: 'int32'}
            ])
        })
    }

    ReadMatchScoreUpdate(raw) {
        return {
            id: Packet.Bancho_MatchScoreUpdate, data: this.UnmarshalPacket(raw, [
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        }
    }

    WriteMatchScoreUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchScoreUpdate, data: this.MarshalPacket(data, [
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        })
    }

    ReadMatchTransferHost(raw) {
        return {
            id: Packet.Bancho_MatchTransferHost, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchTransferHost(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchTransferHost, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchAllPlayersLoaded(raw) {
        return {
            id: Packet.Bancho_MatchAllPlayersLoaded, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchAllPlayersLoaded(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchAllPlayersLoaded, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchPlayerFailed(raw) {
        return {
            id: Packet.Bancho_MatchPlayerFailed, data: this.UnmarshalPacket(raw, [
                {name: 'slotId', type: 'int32'}
            ])
        }
    }

    WriteMatchPlayerFailed(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchPlayerFailed, data: this.MarshalPacket(data, [
                {name: 'slotId', type: 'int32'}
            ])
        })
    }

    ReadMatchComplete(raw) {
        return {
            id: Packet.Bancho_MatchComplete, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchComplete(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchComplete, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchSkip(raw) {
        return {
            id: Packet.Bancho_MatchSkip, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchSkip(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchSkip, data: this.MarshalPacket(data, [])
        })
    }

    ReadUnauthorised(raw) {
        return {
            id: Packet.Bancho_Unauthorised, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteUnauthorised(data) {
        return this.WritePacket({
            id: Packet.Bancho_Unauthorised, data: this.MarshalPacket(data, [])
        })
    }

    ReadChannelJoinSuccess(raw) {
        return {
            id: Packet.Bancho_ChannelJoinSuccess, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'}
            ])
        }
    }

    WriteChannelJoinSuccess(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelJoinSuccess, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'}
            ])
        })
    }

    ReadChannelAvailable(raw) {
        return {
            id: Packet.Bancho_ChannelAvailable, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'},
                {name: 'channelTopic', type: 'string'},
                {name: 'channelUserCount', type: 'int16'}
            ])
        }
    }

    WriteChannelAvailable(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelAvailable, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'},
                {name: 'channelTopic', type: 'string'},
                {name: 'channelUserCount', type: 'int16'}
            ])
        })
    }

    ReadChannelRevoked(raw) {
        return {
            id: Packet.Bancho_ChannelRevoked, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'}
            ])
        }
    }

    WriteChannelRevoked(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelRevoked, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'}
            ])
        })
    }

    ReadChannelAvailableAutojoin(raw) {
        return {
            id: Packet.Bancho_ChannelAvailableAutojoin, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'},
                {name: 'channelTopic', type: 'string'},
                {name: 'channelUserCount', type: 'int16'}
            ])
        }
    }

    WriteChannelAvailableAutojoin(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelAvailableAutojoin, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'},
                {name: 'channelTopic', type: 'string'},
                {name: 'channelUserCount', type: 'int16'}
            ])
        })
    }

    ReadBeatmapInfoReply(raw) {
        return {
            id: Packet.Bancho_BeatmapInfoReply, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteBeatmapInfoReply(data) {
        return this.WritePacket({
            id: Packet.Bancho_BeatmapInfoReply, data: this.MarshalPacket(data, [])
        })
    }

    ReadLoginPermissions(raw) {
        return {
            id: Packet.Bancho_LoginPermissions, data: this.UnmarshalPacket(raw, [
                {name: 'permissions', type: 'int32'}
            ])
        }
    }

    WriteLoginPermissions(data) {
        return this.WritePacket({
            id: Packet.Bancho_LoginPermissions, data: this.MarshalPacket(data, [
                {name: 'permissions', type: 'int32'}
            ])
        })
    }

    ReadFriendsList(raw) {
        return {
            id: Packet.Bancho_FriendsList, data: this.UnmarshalPacket(raw, [
                {name: 'friends', type: 'int32array'}
            ])
        }
    }

    WriteFriendsList(data) {
        return this.WritePacket({
            id: Packet.Bancho_FriendsList, data: this.MarshalPacket(data, [
                {name: 'friends', type: 'int32array'}
            ])
        })
    }

    ReadProtocolNegotiation(raw) {
        return {
            id: Packet.Bancho_ProtocolNegotiation, data: this.UnmarshalPacket(raw, [
                {name: 'protocol', type: 'int32'}
            ])
        }
    }

    WriteProtocolNegotiation(data) {
        return this.WritePacket({
            id: Packet.Bancho_ProtocolNegotiation, data: this.MarshalPacket(data, [
                {name: 'protocol', type: 'int32'}
            ])
        })
    }

    ReadTitleUpdate(raw) {
        return {
            id: Packet.Bancho_TitleUpdate, data: this.UnmarshalPacket(raw, [
                {name: 'titleImage', type: 'string'}
            ])
        }
    }

    WriteTitleUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_TitleUpdate, data: this.MarshalPacket(data, [
                {name: 'titleImage', type: 'string'}
            ])
        })
    }

    ReadMonitor(raw) {
        return {
            id: Packet.Bancho_Monitor, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMonitor(data) {
        return this.WritePacket({
            id: Packet.Bancho_Monitor, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchPlayerSkipped(raw) {
        return {
            id: Packet.Bancho_MatchPlayerSkipped, data: this.UnmarshalPacket(raw, [
                {name: 'slotId', type: 'int32'}
            ])
        }
    }

    WriteMatchPlayerSkipped(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchPlayerSkipped, data: this.MarshalPacket(data, [
                {name: 'slotId', type: 'int32'}
            ])
        })
    }

    ReadUserPresence(raw) {
        return {
            id: Packet.Bancho_UserPresence, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'},
                {name: 'username', type: 'string'},
                {name: 'timezone', type: 'byte'},
                {name: 'countryId', type: 'byte'},
                {name: 'permissions', type: 'byte'},
                {name: 'longitude', type: 'float'},
                {name: 'latitude', type: 'float'},
                {name: 'rank', type: 'int32'}
            ])
        }
    }

    WriteUserPresence(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPresence, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'},
                {name: 'username', type: 'string'},
                {name: 'timezone', type: 'byte'},
                {name: 'countryId', type: 'byte'},
                {name: 'permissions', type: 'byte'},
                {name: 'longitude', type: 'float'},
                {name: 'latitude', type: 'float'},
                {name: 'rank', type: 'int32'}
            ])
        })
    }

    ReadRestart(raw) {
        return {
            id: Packet.Bancho_Restart, data: this.UnmarshalPacket(raw, [
                {name: 'restartTime', type: 'int32'}
            ])
        }
    }

    WriteRestart(data) {
        return this.WritePacket({
            id: Packet.Bancho_Restart, data: this.MarshalPacket(data, [
                {name: 'restartTime', type: 'int32'}
            ])
        })
    }

    ReadInvite(raw) {
        return {
            id: Packet.Bancho_Invite, data: this.UnmarshalPacket(raw, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        }
    }

    WriteInvite(data) {
        return this.WritePacket({
            id: Packet.Bancho_Invite, data: this.MarshalPacket(data, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        })
    }

    ReadChannelListingComplete(raw) {
        return {
            id: Packet.Bancho_ChannelListingComplete, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteChannelListingComplete(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelListingComplete, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchChangePassword(raw) {
        return {
            id: Packet.Bancho_MatchChangePassword, data: this.UnmarshalPacket(raw, [
                {name: 'gamePassword', type: 'string'}
            ])
        }
    }

    WriteMatchChangePassword(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchChangePassword, data: this.MarshalPacket(data, [
                {name: 'gamePassword', type: 'string'}
            ])
        })
    }

    ReadBanInfo(raw) {
        return {
            id: Packet.Bancho_BanInfo, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteBanInfo(data) {
        return this.WritePacket({
            id: Packet.Bancho_BanInfo, data: this.MarshalPacket(data, [
                {name: 'length', type: 'int32'}
            ])
        })
    }

    ReadUserSilenced(raw) {
        return {
            id: Packet.Bancho_UserSilenced, data: this.UnmarshalPacket(raw, [
                {name: 'length', type: 'int32'}
            ])
        }
    }

    WriteUserSilenced(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserSilenced, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    ReadUserPresenceSingle(raw) {
        return {
            id: Packet.Bancho_UserPresenceSingle, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    WriteUserPresenceSingle(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPresenceSingle, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    ReadUserPresenceBundle(raw) {
        return {
            id: Packet.Bancho_UserPresenceBundle, data: this.UnmarshalPacket(raw, [
                {name: 'userIds', type: 'int32array'}
            ])
        }
    }

    WriteUserPresenceBundle(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPresenceBundle, data: this.MarshalPacket(data, [
                {name: 'userIds', type: 'int32array'}
            ])
        })
    }

    ReadUserPMBlocked(raw) {
        return {
            id: Packet.Bancho_UserPMBlocked, data: this.UnmarshalPacket(raw, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        }
    }

    WriteUserPMBlocked(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPMBlocked, data: this.MarshalPacket(data, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        })
    }

    ReadTargetIsSilenced(raw) {
        return {
            id: Packet.Bancho_TargetIsSilenced, data: this.UnmarshalPacket(raw, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        }
    }

    WriteTargetIsSilenced(data) {
        return this.WritePacket({
            id: Packet.Bancho_TargetIsSilenced, data: this.MarshalPacket(data, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        })
    }

    ReadVersionUpdateForced(raw) {
        return {
            id: Packet.Bancho_VersionUpdateForced, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteVersionUpdateForced(data) {
        return this.WritePacket({
            id: Packet.Bancho_VersionUpdateForced, data: this.MarshalPacket(data, [])
        })
    }

    ReadSwitchServer(raw) {
        return {
            id: Packet.Bancho_SwitchServer, data: this.UnmarshalPacket(raw, [
                {name: 'time', type: 'int32'}
            ])
        }
    }

    WriteSwitchServer(data) {
        return this.WritePacket({
            id: Packet.Bancho_SwitchServer, data: this.MarshalPacket(data, [
                {name: 'time', type: 'int32'}
            ])
        })
    }

    ReadAccountRestricted(raw) {
        return {
            id: Packet.Bancho_AccountRestricted, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteAccountRestricted(data) {
        return this.WritePacket({
            id: Packet.Bancho_AccountRestricted, data: this.MarshalPacket(data, [])
        })
    }

    ReadRTX(raw) {
        return {
            id: Packet.Bancho_RTX, data: this.UnmarshalPacket(raw, [
                {name: 'message', type: 'string'}
            ])
        }
    }

    WriteRTX(data) {
        return this.WritePacket({
            id: Packet.Bancho_RTX, data: this.MarshalPacket(data, [
                {name: 'message', type: 'string'}
            ])
        })
    }

    ReadSwitchTourneyServer(raw) {
        return {
            id: Packet.Bancho_SwitchTourneyServer, data: this.UnmarshalPacket(raw, [
                {name: 'serverHost', type: 'string'}
            ])
        }
    }

    WriteSwitchTourneyServer(data) {
        return this.WritePacket({
            id: Packet.Bancho_SwitchTourneyServer, data: this.MarshalPacket(data, [
                {name: 'serverHost', type: 'string'}
            ])
        })
    }
}

module.exports = Bancho;