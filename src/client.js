'use strict';
const Base = require('./base');
const Packet = require('./packets');

/**
 * @extends {Base}
 */
class Client extends Base {
    constructor(input) {
        super(input);
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
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

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
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

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadExit(raw) {
        return {
            id: Packet.Client_Exit, data: this.UnmarshalPacket(raw, [
                {name: 'reason', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteExit(data) {
        return this.WritePacket({
            id: Packet.Client_Exit, data: this.MarshalPacket(data, [
                {name: 'reason', type: 'int32', data: data.reason}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadRequestStatusUpdate(raw) {
        return {
            id: Packet.Client_RequestStatusUpdate, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteRequestStatusUpdate(data) {
        return this.WritePacket({
            id: Packet.Client_RequestStatusUpdate, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadPong(raw) {
        return {
            id: Packet.Client_Pong, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WritePong(data) {
        return this.WritePacket({
            id: Packet.Client_Pong, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadStartSpectating(raw) {
        return {
            id: Packet.Client_StartSpectating, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteStartSpectating(data) {
        return this.WritePacket({
            id: Packet.Client_StartSpectating, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadStopSpectating(raw) {
        return {
            id: Packet.Client_StopSpectating, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteStopSpectating(data) {
        return this.WritePacket({
            id: Packet.Client_StopSpectating, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
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

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadErrorReport(raw) {
        return {
            id: Packet.Client_ErrorReport, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteErrorReport(data) {
        return this.WritePacket({
            id: Packet.Client_ErrorReport, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadCantSpectate(raw) {
        return {
            id: Packet.Client_CantSpectate, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteCantSpectate(data) {
        return this.WritePacket({
            id: Packet.Client_CantSpectate, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
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

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadLobbyPart(raw) {
        return {
            id: Packet.Client_LobbyPart, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteLobbyPart(data) {
        return this.WritePacket({
            id: Packet.Client_LobbyPart, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadLobbyJoin(raw) {
        return {
            id: Packet.Client_LobbyJoin, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteLobbyJoin(data) {
        return this.WritePacket({
            id: Packet.Client_LobbyJoin, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
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

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchJoin(raw) {
        return {
            id: Packet.Client_MatchJoin, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int32'},
                {name: 'gamePassword', type: 'string'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchJoin(data) {
        return this.WritePacket({
            id: Packet.Client_MatchJoin, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int32'},
                {name: 'gamePassword', type: 'string'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchPart(raw) {
        return {
            id: Packet.Client_MatchPart, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchPart(data) {
        return this.WritePacket({
            id: Packet.Client_MatchPart, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchChangeSlot(raw) {
        return {
            id: Packet.Client_MatchChangeSlot, data: this.UnmarshalPacket(raw, [
                {name: 'slotId', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchChangeSlot(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeSlot, data: this.MarshalPacket(data, [
                {name: 'slotId', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchReady(raw) {
        return {
            id: Packet.Client_MatchReady, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchReady(data) {
        return this.WritePacket({
            id: Packet.Client_MatchReady, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchLock(raw) {
        return {
            id: Packet.Client_MatchLock, data: this.UnmarshalPacket(raw, [
                {name: 'slotId', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchLock(data) {
        return this.WritePacket({
            id: Packet.Client_MatchLock, data: this.MarshalPacket(data, [
                {name: 'slotId', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
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

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchStart(raw) {
        return {
            id: Packet.Client_MatchStart, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchStart(data) {
        return this.WritePacket({
            id: Packet.Client_MatchStart, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchScoreUpdate(raw) {
        return {
            id: Packet.Client_MatchScoreUpdate, data: this.UnmarshalPacket(raw, [
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchScoreUpdate(data) {
        return this.WritePacket({
            id: Packet.Client_MatchScoreUpdate, data: this.MarshalPacket(data, [
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchComplete(raw) {
        return {
            id: Packet.Client_MatchComplete, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchComplete(data) {
        return this.WritePacket({
            id: Packet.Client_MatchComplete, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchChangeMods(raw) {
        return {
            id: Packet.Client_MatchChangeMods, data: this.UnmarshalPacket(raw, [
                {name: 'mods', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchChangeMods(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeMods, data: this.MarshalPacket(data, [
                {name: 'mods', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchLoadComplete(raw) {
        return {
            id: Packet.Client_MatchLoadComplete, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchLoadComplete(data) {
        return this.WritePacket({
            id: Packet.Client_MatchLoadComplete, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchNoBeatmap(raw) {
        return {
            id: Packet.Client_MatchNoBeatmap, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchNoBeatmap(data) {
        return this.WritePacket({
            id: Packet.Client_MatchNoBeatmap, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchNotReady(raw) {
        return {
            id: Packet.Client_MatchNotReady, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchNotReady(data) {
        return this.WritePacket({
            id: Packet.Client_MatchNotReady, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchFailed(raw) {
        return {
            id: Packet.Client_MatchFailed, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchFailed(data) {
        return this.WritePacket({
            id: Packet.Client_MatchFailed, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchHasBeatmap(raw) {
        return {
            id: Packet.Client_MatchHasBeatmap, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchHasBeatmap(data) {
        return this.WritePacket({
            id: Packet.Client_MatchHasBeatmap, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchSkipRequest(raw) {
        return {
            id: Packet.Client_MatchSkipRequest, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchSkipRequest(data) {
        return this.WritePacket({
            id: Packet.Client_MatchSkipRequest, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadChannelJoin(raw) {
        return {
            id: Packet.Client_ChannelJoin, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteChannelJoin(data) {
        return this.WritePacket({
            id: Packet.Client_ChannelJoin, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadBeatmapInfoRequest(raw) {
        return {
            id: Packet.Client_BeatmapInfoRequest, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteBeatmapInfoRequest(data) {
        return this.WritePacket({
            id: Packet.Client_BeatmapInfoRequest, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchTransferHost(raw) {
        return {
            id: Packet.Client_MatchTransferHost, data: this.UnmarshalPacket(raw, [
                {name: 'slotId', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchTransferHost(data) {
        return this.WritePacket({
            id: Packet.Client_MatchTransferHost, data: this.MarshalPacket(data, [
                {name: 'slotId', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadFriendAdd(raw) {
        return {
            id: Packet.Client_FriendAdd, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteFriendAdd(data) {
        return this.WritePacket({
            id: Packet.Client_FriendAdd, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadFriendRemove(raw) {
        return {
            id: Packet.Client_FriendRemove, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteFriendRemove(data) {
        return this.WritePacket({
            id: Packet.Client_FriendRemove, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchChangeTeam(raw) {
        return {
            id: Packet.Client_MatchChangeTeam, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchChangeTeam(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeTeam, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadChannelLeave(raw) {
        return {
            id: Packet.Client_ChannelLeave, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteChannelLeave(data) {
        return this.WritePacket({
            id: Packet.Client_ChannelLeave, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadReceiveUpdates(raw) {
        return {
            id: Packet.Client_ReceiveUpdates, data: this.UnmarshalPacket(raw, [
                {name: 'randomInt', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteReceiveUpdates(data) {
        return this.WritePacket({
            id: Packet.Client_ReceiveUpdates, data: this.MarshalPacket(data, [
                {name: 'randomInt', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
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

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserStatsRequest(raw) {
        return {
            id: Packet.Client_UserStatsRequest, data: this.UnmarshalPacket(raw, [
                {name: 'userIds', type: 'int32array'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteUserStatsRequest(data) {
        return this.WritePacket({
            id: Packet.Client_UserStatsRequest, data: this.MarshalPacket(data, [
                {name: 'userIds', type: 'int32array'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadInvite(raw) {
        return {
            id: Packet.Client_Invite, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteInvite(data) {
        return this.WritePacket({
            id: Packet.Client_Invite, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
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

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSpecialMatchInfoRequest(raw) {
        return {
            id: Packet.Client_SpecialMatchInfoRequest, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteSpecialMatchInfoRequest(data) {
        return this.WritePacket({
            id: Packet.Client_SpecialMatchInfoRequest, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserPresenceRequest(raw) {
        return {
            id: Packet.Client_UserPresenceRequest, data: this.UnmarshalPacket(raw, [
                {name: 'userIds', type: 'int32array'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteUserPresenceRequest(data) {
        return this.WritePacket({
            id: Packet.Client_UserPresenceRequest, data: this.MarshalPacket(data, [
                {name: 'userIds', type: 'int32array'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserPresenceRequestAll(raw) {
        return {
            id: Packet.Client_UserPresenceRequestAll, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteUserPresenceRequestAll(data) {
        return this.WritePacket({
            id: Packet.Client_UserPresenceRequestAll, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserToggleBlockNonFriendPM(raw) {
        return {
            id: Packet.Client_UserToggleBlockNonFriendPM, data: this.UnmarshalPacket(raw, [
                {name: 'blockPM', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteUserToggleBlockNonFriendPM(data) {
        return this.WritePacket({
            id: Packet.Client_UserToggleBlockNonFriendPM, data: this.MarshalPacket(data, [
                {name: 'blockPM', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchAbort(raw) {
        return {
            id: Packet.Client_MatchAbort, data: this.UnmarshalPacket(raw, [])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteMatchAbort(data) {
        return this.WritePacket({
            id: Packet.Client_MatchAbort, data: this.MarshalPacket(null, [])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSpecialJoinMatchChannel(raw) {
        return {
            id: Packet.Client_SpecialJoinMatchChannel, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteSpecialJoinMatchChannel(data) {
        return this.WritePacket({
            id: Packet.Client_SpecialJoinMatchChannel, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int32'}
            ])
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSpecialLeaveMatchChannel(raw) {
        return {
            id: Packet.Client_SpecialLeaveMatchChannel, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int32'}
            ])
        }
    }

    /**
     * 
     * @param {object} data
     * @return {Client}
     */
    WriteSpecialLeaveMatchChannel(data) {
        return this.WritePacket({
            id: Packet.Client_SpecialLeaveMatchChannel, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int32'}
            ])
        })
    }
}

module.exports = Client;

/**
 * @typedef {Object} Packet
 * @prop {Number} id
 * @prop {Object|null} data
 */