'use strict';
const Base = require('./base');
const Packet = require('./packets');

class Client extends Base {
    constructor(input) {
        super(input);
    }

    ReadSendUserStatus(raw) {
        return {
            id: Packet.Client_SendUserStatus, data: this.UnmarshalPacket(raw, [
                {name: 'status', type: 'byte'},
                {name: 'statusText', type: 'string'},
                {name: 'beatmapChecksum', type: 'string'},
                {name: 'currentMods', type: 'uint32'},
                {name: 'playMode', type: 'byte'},
                {name: 'beatmapId', type: 'int32'}
            ])
        }
    }

    WriteSendUserStatus(data) {
        return this.WritePacket({
            id: Packet.Client_SendUserStatus, data: this.MarshalPacket(data, [
                {name: 'status', type: 'byte'},
                {name: 'statusText', type: 'string'},
                {name: 'beatmapChecksum', type: 'string'},
                {name: 'currentMods', type: 'uint32'},
                {name: 'playMode', type: 'byte'},
                {name: 'beatmapId', type: 'int32'},
            ])
        })
    }

    ReadSendIrcMessage(raw) {
        return {
            id: Packet.Client_SendIrcMessage, data: this.UnmarshalPacket(raw, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        }
    }

    WriteSendIrcMessage(data) {
        return this.WritePacket({
            id: Packet.Client_SendIrcMessage, data: this.MarshalPacket(data, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        })
    }

    ReadExit(raw) {
        return {
            id: Packet.Client_Exit, data: this.UnmarshalPacket(raw, [
                {name: 'reason', type: 'int32'}
            ])
        }
    }

    WriteExit(data) {
        return this.WritePacket({
            id: Packet.Client_Exit, data: this.MarshalPacket(data, [
                {name: 'reason', type: 'int32', data: data.reason}
            ])
        })
    }

    ReadRequestStatusUpdate(raw) {
        return {
            id: Packet.Client_RequestStatusUpdate, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteRequestStatusUpdate(data) {
        return this.WritePacket({
            id: Packet.Client_RequestStatusUpdate, data: this.MarshalPacket(data, [])
        })
    }

    ReadPong(raw) {
        return {
            id: Packet.Client_Pong, data: this.UnmarshalPacket(raw, [])
        }
    }

    WritePong(data) {
        return this.WritePacket({
            id: Packet.Client_Pong, data: this.MarshalPacket(data, [])
        })
    }

    ReadStartSpectating(raw) {
        return {
            id: Packet.Client_StartSpectating, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    WriteStartSpectating(data) {
        return this.WritePacket({
            id: Packet.Client_StartSpectating, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    ReadStopSpectating(raw) {
        return {
            id: Packet.Client_StopSpectating, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteStopSpectating(data) {
        return this.WritePacket({
            id: Packet.Client_StopSpectating, data: this.MarshalPacket(data, [])
        })
    }

    ReadSpectateFrames(raw) {
        return {
            id: Packet.Client_SpectateFrames, data: this.UnmarshalPacket(raw, [
                {name: 'extra', type: 'int32'},
                {name: 'replayFrames', type: 'replayframes'},
                {name: 'action', type: 'byte'},
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        }
    }

    WriteSpectateFrames(data) {
        return this.WritePacket({
            id: Packet.Client_SpectateFrames, data: this.MarshalPacket(data, [
                {name: 'extra', type: 'int32'},
                {name: 'replayFrames', type: 'replayframes'},
                {name: 'action', type: 'byte'},
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        })
    }

    ReadErrorReport(raw) {
        return {
            id: Packet.Client_ErrorReport, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteErrorReport(data) {
        return this.WritePacket({
            id: Packet.Client_ErrorReport, data: this.MarshalPacket(data, [])
        })
    }

    ReadCantSpectate(raw) {
        return {
            id: Packet.Client_CantSpectate, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteCantSpectate(data) {
        return this.WritePacket({
            id: Packet.Client_CantSpectate, data: this.MarshalPacket(data, [])
        })
    }

    ReadSendIrcMessagePrivate(raw) {
        return {
            id: Packet.Client_SendIrcMessagePrivate, data: this.UnmarshalPacket(raw, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        }
    }

    WriteSendIrcMessagePrivate(data) {
        return this.WritePacket({
            id: Packet.Client_SendIrcMessagePrivate, data: this.MarshalPacket(data, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        })
    }

    ReadLobbyPart(raw) {
        return {
            id: Packet.Client_LobbyPart, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteLobbyPart(data) {
        return this.WritePacket({
            id: Packet.Client_LobbyPart, data: this.MarshalPacket(data, [])
        })
    }

    ReadLobbyJoin(raw) {
        return {
            id: Packet.Client_LobbyJoin, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteLobbyJoin(data) {
        return this.WritePacket({
            id: Packet.Client_LobbyJoin, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchCreate(raw) {
        return {
            id: Packet.Client_MatchCreate, data: this.UnmarshalPacket(raw, [
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

    WriteMatchCreate(data) {
        return this.WritePacket({
            id: Packet.Client_MatchCreate, data: this.MarshalPacket(data, [
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

    ReadMatchJoin(raw) {
        return {
            id: Packet.Client_MatchJoin, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int32'},
                {name: 'gamePassword', type: 'string'}
            ])
        }
    }

    WriteMatchJoin(data) {
        return this.WritePacket({
            id: Packet.Client_MatchJoin, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int32'},
                {name: 'gamePassword', type: 'string'}
            ])
        })
    }

    ReadMatchPart(raw) {
        return {
            id: Packet.Client_MatchPart, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchPart(data) {
        return this.WritePacket({
            id: Packet.Client_MatchPart, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchChangeSlot(raw) {
        return {
            id: Packet.Client_MatchChangeSlot, data: this.UnmarshalPacket(raw, [
                {name: 'slotId', type: 'int32'}
            ])
        }
    }

    WriteMatchChangeSlot(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeSlot, data: this.MarshalPacket(data, [
                {name: 'slotId', type: 'int32'}
            ])
        })
    }

    ReadMatchReady(raw) {
        return {
            id: Packet.Client_MatchReady, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchReady(data) {
        return this.WritePacket({
            id: Packet.Client_MatchReady, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchLock(raw) {
        return {
            id: Packet.Client_MatchLock, data: this.UnmarshalPacket(raw, [
                {name: 'slotId', type: 'int32'}
            ])
        }
    }

    WriteMatchLock(data) {
        return this.WritePacket({
            id: Packet.Client_MatchLock, data: this.MarshalPacket(data, [
                {name: 'slotId', type: 'int32'}
            ])
        })
    }

    ReadMatchChangeSettings(raw) {
        return {
            id: Packet.Client_MatchChangeSettings, data: this.UnmarshalPacket(raw, [
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

    WriteMatchChangeSettings(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeSettings, data: this.MarshalPacket(data, [
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

    ReadMatchStart(raw) {
        return {
            id: Packet.Client_MatchStart, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchStart(data) {
        return this.WritePacket({
            id: Packet.Client_MatchStart, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchScoreUpdate(raw) {
        return {
            id: Packet.Client_MatchScoreUpdate, data: this.UnmarshalPacket(raw, [
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        }
    }

    WriteMatchScoreUpdate(data) {
        return this.WritePacket({
            id: Packet.Client_MatchScoreUpdate, data: this.MarshalPacket(data, [
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        })
    }

    ReadMatchComplete(raw) {
        return {
            id: Packet.Client_MatchComplete, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchComplete(data) {
        return this.WritePacket({
            id: Packet.Client_MatchComplete, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchChangeMods(raw) {
        return {
            id: Packet.Client_MatchChangeMods, data: this.UnmarshalPacket(raw, [
                {name: 'mods', type: 'int32'}
            ])
        }
    }

    WriteMatchChangeMods(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeMods, data: this.MarshalPacket(data, [
                {name: 'mods', type: 'int32'}
            ])
        })
    }

    ReadMatchLoadComplete(raw) {
        return {
            id: Packet.Client_MatchLoadComplete, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchLoadComplete(data) {
        return this.WritePacket({
            id: Packet.Client_MatchLoadComplete, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchNoBeatmap(raw) {
        return {
            id: Packet.Client_MatchNoBeatmap, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchNoBeatmap(data) {
        return this.WritePacket({
            id: Packet.Client_MatchNoBeatmap, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchNotReady(raw) {
        return {
            id: Packet.Client_MatchNotReady, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchNotReady(data) {
        return this.WritePacket({
            id: Packet.Client_MatchNotReady, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchFailed(raw) {
        return {
            id: Packet.Client_MatchFailed, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchFailed(data) {
        return this.WritePacket({
            id: Packet.Client_MatchFailed, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchHasBeatmap(raw) {
        return {
            id: Packet.Client_MatchHasBeatmap, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchHasBeatmap(data) {
        return this.WritePacket({
            id: Packet.Client_MatchHasBeatmap, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchSkipRequest(raw) {
        return {
            id: Packet.Client_MatchSkipRequest, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchSkipRequest(data) {
        return this.WritePacket({
            id: Packet.Client_MatchSkipRequest, data: this.MarshalPacket(data, [])
        })
    }

    ReadChannelJoin(raw) {
        return {
            id: Packet.Client_ChannelJoin, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'}
            ])
        }
    }

    WriteChannelJoin(data) {
        return this.WritePacket({
            id: Packet.Client_ChannelJoin, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'}
            ])
        })
    }

    ReadBeatmapInfoRequest(raw) {
        return {
            id: Packet.Client_BeatmapInfoRequest, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteBeatmapInfoRequest(data) {
        return this.WritePacket({
            id: Packet.Client_BeatmapInfoRequest, data: this.MarshalPacket(data, [])
        })
    }

    ReadMatchTransferHost(raw) {
        return {
            id: Packet.Client_MatchTransferHost, data: this.UnmarshalPacket(raw, [
                {name: 'slotId', type: 'int32'}
            ])
        }
    }

    WriteMatchTransferHost(data) {
        return this.WritePacket({
            id: Packet.Client_MatchTransferHost, data: this.MarshalPacket(data, [
                {name: 'slotId', type: 'int32'}
            ])
        })
    }

    ReadFriendAdd(raw) {
        return {
            id: Packet.Client_FriendAdd, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    WriteFriendAdd(data) {
        return this.WritePacket({
            id: Packet.Client_FriendAdd, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    ReadFriendRemove(raw) {
        return {
            id: Packet.Client_FriendRemove, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    WriteFriendRemove(data) {
        return this.WritePacket({
            id: Packet.Client_FriendRemove, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    ReadMatchChangeTeam(raw) {
        return {
            id: Packet.Client_MatchChangeTeam, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchChangeTeam(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeTeam, data: this.MarshalPacket(data, [])
        })
    }

    ReadChannelLeave(raw) {
        return {
            id: Packet.Client_ChannelLeave, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'}
            ])
        }
    }

    WriteChannelLeave(data) {
        return this.WritePacket({
            id: Packet.Client_ChannelLeave, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'}
            ])
        })
    }

    ReadReceiveUpdates(raw) {
        return {
            id: Packet.Client_ReceiveUpdates, data: this.UnmarshalPacket(raw, [
                {name: 'randomInt', type: 'int32'}
            ])
        }
    }

    WriteReceiveUpdates(data) {
        return this.WritePacket({
            id: Packet.Client_ReceiveUpdates, data: this.MarshalPacket(data, [
                {name: 'randomInt', type: 'int32'}
            ])
        })
    }

    ReadSetIrcAwayMessage(raw) {
        return {
            id: Packet.Client_SetIrcAwayMessage, data: this.UnmarshalPacket(raw, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        }
    }

    WriteSetIrcAwayMessage(data) {
        return this.WritePacket({
            id: Packet.Client_SetIrcAwayMessage, data: this.MarshalPacket(data, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        })
    }

    ReadUserStatsRequest(raw) {
        return {
            id: Packet.Client_UserStatsRequest, data: this.UnmarshalPacket(raw, [
                {name: 'userIds', type: 'int32array'}
            ])
        }
    }

    WriteUserStatsRequest(data) {
        return this.WritePacket({
            id: Packet.Client_UserStatsRequest, data: this.MarshalPacket(data, [
                {name: 'userIds', type: 'int32array'}
            ])
        })
    }

    ReadInvite(raw) {
        return {
            id: Packet.Client_Invite, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    WriteInvite(data) {
        return this.WritePacket({
            id: Packet.Client_Invite, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    ReadMatchChangePassword(raw) {
        return {
            id: Packet.Client_MatchChangePassword, data: this.UnmarshalPacket(raw, [
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

    WriteMatchChangePassword(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangePassword, data: this.MarshalPacket(data, [
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

    ReadSpecialMatchInfoRequest(raw) {
        return {
            id: Packet.Client_SpecialMatchInfoRequest, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int32'}
            ])
        }
    }

    WriteSpecialMatchInfoRequest(data) {
        return this.WritePacket({
            id: Packet.Client_SpecialMatchInfoRequest, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int32'}
            ])
        })
    }

    ReadUserPresenceRequest(raw) {
        return {
            id: Packet.Client_UserPresenceRequest, data: this.UnmarshalPacket(raw, [
                {name: 'userIds', type: 'int32array'}
            ])
        }
    }

    WriteUserPresenceRequest(data) {
        return this.WritePacket({
            id: Packet.Client_UserPresenceRequest, data: this.MarshalPacket(data, [
                {name: 'userIds', type: 'int32array'}
            ])
        })
    }

    ReadUserPresenceRequestAll(raw) {
        return {
            id: Packet.Client_UserPresenceRequestAll, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteUserPresenceRequestAll(data) {
        return this.WritePacket({
            id: Packet.Client_UserPresenceRequestAll, data: this.MarshalPacket(data, [])
        })
    }

    ReadUserToggleBlockNonFriendPM(raw) {
        return {
            id: Packet.Client_UserToggleBlockNonFriendPM, data: this.UnmarshalPacket(raw, [
                {name: 'blockPM', type: 'int32'}
            ])
        }
    }

    WriteUserToggleBlockNonFriendPM(data) {
        return this.WritePacket({
            id: Packet.Client_UserToggleBlockNonFriendPM, data: this.MarshalPacket(data, [
                {name: 'blockPM', type: 'int32'}
            ])
        })
    }

    ReadMatchAbort(raw) {
        return {
            id: Packet.Client_MatchAbort, data: this.UnmarshalPacket(raw, [])
        }
    }

    WriteMatchAbort(data) {
        return this.WritePacket({
            id: Packet.Client_MatchAbort, data: this.MarshalPacket(data, [])
        })
    }

    ReadSpecialJoinMatchChannel(raw) {
        return {
            id: Packet.Client_SpecialJoinMatchChannel, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int32'}
            ])
        }
    }

    WriteSpecialJoinMatchChannel(data) {
        return this.WritePacket({
            id: Packet.Client_SpecialJoinMatchChannel, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int32'}
            ])
        })
    }

    ReadSpecialLeaveMatchChannel(raw) {
        return {
            id: Packet.Client_SpecialLeaveMatchChannel, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int32'}
            ])
        }
    }

    WriteSpecialLeaveMatchChannel(data) {
        return this.WritePacket({
            id: Packet.Client_SpecialLeaveMatchChannel, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int32'}
            ])
        })
    }
}

module.exports = Client;