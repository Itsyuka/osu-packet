'use strict';
const Base = require('./base');
const Packet = require('./packets');

/**
 * @extends {Base}
 * @prop {OsuBuffer} buffer
 */
class Bancho extends Base {
    /**
     * @param {Buffer?} input
     */
    constructor(input) {
        super(input);
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadLoginReply(raw) {
        return {
            id: Packet.Bancho_LoginReply, data: this.UnmarshalPacket(raw, [
                {name: 'reply', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {Reply} data
     * @return {Bancho}
     */
    WriteLoginReply(data) {
        return this.WritePacket({
            id: Packet.Bancho_LoginReply, data: this.MarshalPacket(data, [
                {name: 'reply', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadCommandError() {
        return {
            id: Packet.Bancho_CommandError, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteCommandError() {
        return this.WritePacket({
            id: Packet.Bancho_CommandError, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     * @param {Message} data
     * @return {Bancho}
     */
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

    /**
     *
     * @return {Packet}
     */
    ReadPing() {
        return {
            id: Packet.Bancho_Ping, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WritePing() {
        return this.WritePacket({
            id: Packet.Bancho_Ping, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadHandleIrcChangeUsername(raw) {
        return {
            id: Packet.Bancho_HandleIrcChangeUsername, data: this.UnmarshalPacket(raw, [
                {name: 'message', type: 'string'}
            ])
        }
    }

    /**
     *
     * @param {MessageString} data
     * @return {Bancho}
     */
    WriteHandleIrcChangeUsername(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleIrcChangeUsername, data: this.MarshalPacket(data, [
                {name: 'message', type: 'string'}
            ])
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadHandleIrcQuit() {
        return {
            id: Packet.Bancho_HandleIrcQuit, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteHandleIrcQuit() {
        return this.WritePacket({
            id: Packet.Bancho_HandleIrcQuit, data: this.MarshalPacket()
        })
    }

    /**
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadHandleOsuUpdate(raw) {
        return {
            id: Packet.Bancho_HandleOsuUpdate, data: this.UnmarshalPacket(raw, [
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
            ])
        }
    }

    /**
     *
     * @param {OsuUpdate} data
     * @return {Bancho}
     */
    WriteHandleOsuUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleOsuUpdate, data: this.MarshalPacket(data, [
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
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadHandleUserQuit(raw) {
        return {
            id: Packet.Bancho_HandleUserQuit, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'},
                {name: 'state', type: 'byte'}
            ])
        }
    }

    /**
     *
     * @param {UserQuit} data
     * @return {Bancho}
     */
    WriteHandleUserQuit(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleUserQuit, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'},
                {name: 'state', type: 'byte'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSpectatorJoined(raw) {
        return {
            id: Packet.Bancho_SpectatorJoined, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {UserId} data
     * @return {Bancho}
     */
    WriteSpectatorJoined(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorJoined, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSpectatorLeft(raw) {
        return {
            id: Packet.Bancho_SpectatorLeft, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {UserId} data
     * @return {Bancho}
     */
    WriteSpectatorLeft(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorLeft, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     *
     * @param {ReplayFrame} data
     * @return {Bancho}
     */
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

    /**
     *
     * @return {Packet}
     */
    ReadVersionUpdate() {
        return {
            id: Packet.Bancho_VersionUpdate, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteVersionUpdate() {
        return this.WritePacket({
            id: Packet.Bancho_VersionUpdate, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSpectatorCantSpectate(raw) {
        return {
            id: Packet.Bancho_SpectatorCantSpectate, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {UserId} data
     * @return {Bancho}
     */
    WriteSpectatorCantSpectate(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorCantSpectate, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadGetAttention() {
        return {
            id: Packet.Bancho_GetAttention, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteGetAttention() {
        return this.WritePacket({
            id: Packet.Bancho_GetAttention, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadAnnounce(raw) {
        return {
            id: Packet.Bancho_Announce, data: this.UnmarshalPacket(raw, [
                {name: 'message', type: 'string'}
            ])
        }
    }

    /**
     *
     * @param {MessageString} data
     * @return {Bancho}
     */
    WriteAnnounce(data) {
        return this.WritePacket({
            id: Packet.Bancho_Announce, data: this.MarshalPacket(data, [
                {name: 'message', type: 'string'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     *
     * @param {Match} data
     * @return {Bancho}
     */
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

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     *
     * @param {Match} data
     * @return {Bancho}
     */
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

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchDisband(raw) {
        return {
            id: Packet.Bancho_MatchDisband, data: this.UnmarshalPacket(raw, [
                {name: 'matchId', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {MatchId} data
     * @return {Bancho}
     */
    WriteMatchDisband(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchDisband, data: this.MarshalPacket(data, [
                {name: 'matchId', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     *
     * @param {Match} data
     * @return {Bancho}
     */
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

    /**
     *
     * @return {Packet}
     */
    ReadMatchJoinFail() {
        return {
            id: Packet.Bancho_MatchJoinFail, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteMatchJoinFail() {
        return this.WritePacket({
            id: Packet.Bancho_MatchJoinFail, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadFellowSpectatorJoined(raw) {
        return {
            id: Packet.Bancho_FellowSpectatorJoined, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {UserId} data
     * @return {Bancho}
     */
    WriteFellowSpectatorJoined(data) {
        return this.WritePacket({
            id: Packet.Bancho_FellowSpectatorJoined, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadFellowSpectatorLeft(raw) {
        return {
            id: Packet.Bancho_FellowSpectatorLeft, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {UserId} data
     * @return {Bancho}
     */
    WriteFellowSpectatorLeft(data) {
        return this.WritePacket({
            id: Packet.Bancho_FellowSpectatorLeft, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
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

    /**
     *
     * @param {Match} data
     * @return {Bancho}
     */
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

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchScoreUpdate(raw) {
        return {
            id: Packet.Bancho_MatchScoreUpdate, data: this.UnmarshalPacket(raw, [
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        }
    }

    /**
     *
     * @param {ScoreFrame} data
     * @return {Bancho}
     */
    WriteMatchScoreUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchScoreUpdate, data: this.MarshalPacket(data, [
                {name: 'scoreFrame', type: 'scoreframe'}
            ])
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchTransferHost() {
        return {
            id: Packet.Bancho_MatchTransferHost, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteMatchTransferHost() {
        return this.WritePacket({
            id: Packet.Bancho_MatchTransferHost, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchAllPlayersLoaded() {
        return {
            id: Packet.Bancho_MatchAllPlayersLoaded, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteMatchAllPlayersLoaded() {
        return this.WritePacket({
            id: Packet.Bancho_MatchAllPlayersLoaded, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchPlayerFailed(raw) {
        return {
            id: Packet.Bancho_MatchPlayerFailed, data: this.UnmarshalPacket(raw, [
                {name: 'slotId', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {SlotId} data
     * @return {Bancho}
     */
    WriteMatchPlayerFailed(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchPlayerFailed, data: this.MarshalPacket(data, [
                {name: 'slotId', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchComplete() {
        return {
            id: Packet.Bancho_MatchComplete, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteMatchComplete() {
        return this.WritePacket({
            id: Packet.Bancho_MatchComplete, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchSkip() {
        return {
            id: Packet.Bancho_MatchSkip, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteMatchSkip() {
        return this.WritePacket({
            id: Packet.Bancho_MatchSkip, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadUnauthorised() {
        return {
            id: Packet.Bancho_Unauthorised, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteUnauthorised() {
        return this.WritePacket({
            id: Packet.Bancho_Unauthorised, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadChannelJoinSuccess(raw) {
        return {
            id: Packet.Bancho_ChannelJoinSuccess, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'}
            ])
        }
    }

    /**
     *
     * @param {ChannelName} data
     * @return {Bancho}
     */
    WriteChannelJoinSuccess(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelJoinSuccess, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadChannelAvailable(raw) {
        return {
            id: Packet.Bancho_ChannelAvailable, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'},
                {name: 'channelTopic', type: 'string'},
                {name: 'channelUserCount', type: 'int16'}
            ])
        }
    }

    /**
     *
     * @param {Channel} data
     * @return {Bancho}
     */
    WriteChannelAvailable(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelAvailable, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'},
                {name: 'channelTopic', type: 'string'},
                {name: 'channelUserCount', type: 'int16'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadChannelRevoked(raw) {
        return {
            id: Packet.Bancho_ChannelRevoked, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'}
            ])
        }
    }

    /**
     *
     * @param {ChannelName} data
     * @return {Bancho}
     */
    WriteChannelRevoked(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelRevoked, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadChannelAvailableAutojoin(raw) {
        return {
            id: Packet.Bancho_ChannelAvailableAutojoin, data: this.UnmarshalPacket(raw, [
                {name: 'channelName', type: 'string'},
                {name: 'channelTopic', type: 'string'},
                {name: 'channelUserCount', type: 'int16'}
            ])
        }
    }

    /**
     *
     * @param {Channel} data
     * @return {Bancho}
     */
    WriteChannelAvailableAutojoin(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelAvailableAutojoin, data: this.MarshalPacket(data, [
                {name: 'channelName', type: 'string'},
                {name: 'channelTopic', type: 'string'},
                {name: 'channelUserCount', type: 'int16'}
            ])
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadBeatmapInfoReply() {
        return {
            id: Packet.Bancho_BeatmapInfoReply, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteBeatmapInfoReply() {
        return this.WritePacket({
            id: Packet.Bancho_BeatmapInfoReply, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadLoginPermissions(raw) {
        return {
            id: Packet.Bancho_LoginPermissions, data: this.UnmarshalPacket(raw, [
                {name: 'permissions', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {Permissions} data
     * @return {Bancho}
     */
    WriteLoginPermissions(data) {
        return this.WritePacket({
            id: Packet.Bancho_LoginPermissions, data: this.MarshalPacket(data, [
                {name: 'permissions', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadFriendsList(raw) {
        return {
            id: Packet.Bancho_FriendsList, data: this.UnmarshalPacket(raw, [
                {name: 'friends', type: 'int32array'}
            ])
        }
    }

    /**
     *
     * @param {Friends} data
     * @return {Bancho}
     */
    WriteFriendsList(data) {
        return this.WritePacket({
            id: Packet.Bancho_FriendsList, data: this.MarshalPacket(data, [
                {name: 'friends', type: 'int32array'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadProtocolNegotiation(raw) {
        return {
            id: Packet.Bancho_ProtocolNegotiation, data: this.UnmarshalPacket(raw, [
                {name: 'protocol', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {Protocol} data
     * @return {Bancho}
     */
    WriteProtocolNegotiation(data) {
        return this.WritePacket({
            id: Packet.Bancho_ProtocolNegotiation, data: this.MarshalPacket(data, [
                {name: 'protocol', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadTitleUpdate(raw) {
        return {
            id: Packet.Bancho_TitleUpdate, data: this.UnmarshalPacket(raw, [
                {name: 'titleImage', type: 'string'}
            ])
        }
    }

    /**
     *
     * @param {TitleImage} data
     * @return {Bancho}
     */
    WriteTitleUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_TitleUpdate, data: this.MarshalPacket(data, [
                {name: 'titleImage', type: 'string'}
            ])
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMonitor() {
        return {
            id: Packet.Bancho_Monitor, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteMonitor() {
        return this.WritePacket({
            id: Packet.Bancho_Monitor, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchPlayerSkipped(raw) {
        return {
            id: Packet.Bancho_MatchPlayerSkipped, data: this.UnmarshalPacket(raw, [
                {name: 'slotId', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {SlotId} data
     * @return {Bancho}
     */
    WriteMatchPlayerSkipped(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchPlayerSkipped, data: this.MarshalPacket(data, [
                {name: 'slotId', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     *
     * @param {UserPresence} data
     * @return {Bancho}
     */
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

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadRestart(raw) {
        return {
            id: Packet.Bancho_Restart, data: this.UnmarshalPacket(raw, [
                {name: 'length', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {Length} data
     * @return {Bancho}
     */
    WriteRestart(data) {
        return this.WritePacket({
            id: Packet.Bancho_Restart, data: this.MarshalPacket(data, [
                {name: 'length', type: 'int32'}
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
            id: Packet.Bancho_Invite, data: this.UnmarshalPacket(raw, [
                {name: 'sendingClient', type: 'string'},
                {name: 'message', type: 'string'},
                {name: 'target', type: 'string'},
                {name: 'senderId', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {Message} data
     * @return {Bancho}
     */
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

    /**
     *
     * @return {Packet}
     */
    ReadChannelListingComplete() {
        return {
            id: Packet.Bancho_ChannelListingComplete, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteChannelListingComplete() {
        return this.WritePacket({
            id: Packet.Bancho_ChannelListingComplete, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchChangePassword(raw) {
        return {
            id: Packet.Bancho_MatchChangePassword, data: this.UnmarshalPacket(raw, [
                {name: 'gamePassword', type: 'string'}
            ])
        }
    }

    /**
     *
     * @param {GamePassword} data
     * @return {Bancho}
     */
    WriteMatchChangePassword(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchChangePassword, data: this.MarshalPacket(data, [
                {name: 'gamePassword', type: 'string'}
            ])
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadBanInfo() {
        return {
            id: Packet.Bancho_BanInfo, data: null
        }
    }

    /**
     *
     * @param {Length} data
     * @return {Bancho}
     */
    WriteBanInfo(data) {
        return this.WritePacket({
            id: Packet.Bancho_BanInfo, data: this.MarshalPacket(data, [
                {name: 'length', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserSilenced(raw) {
        return {
            id: Packet.Bancho_UserSilenced, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {UserId} data
     * @return {Bancho}
     */
    WriteUserSilenced(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserSilenced, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserPresenceSingle(raw) {
        return {
            id: Packet.Bancho_UserPresenceSingle, data: this.UnmarshalPacket(raw, [
                {name: 'userId', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {UserId} data
     * @return {Bancho}
     */
    WriteUserPresenceSingle(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPresenceSingle, data: this.MarshalPacket(data, [
                {name: 'userId', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserPresenceBundle(raw) {
        return {
            id: Packet.Bancho_UserPresenceBundle, data: this.UnmarshalPacket(raw, [
                {name: 'userIds', type: 'int32array'}
            ])
        }
    }

    /**
     *
     * @param {UserIds} data
     * @return {Bancho}
     */
    WriteUserPresenceBundle(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPresenceBundle, data: this.MarshalPacket(data, [
                {name: 'userIds', type: 'int32array'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     *
     * @param {Message} data
     * @return {Bancho}
     */
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

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
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

    /**
     *
     * @param {Message} data
     * @return {Bancho}
     */
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

    /**
     *
     * @return {Packet}
     */
    ReadVersionUpdateForced() {
        return {
            id: Packet.Bancho_VersionUpdateForced, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteVersionUpdateForced() {
        return this.WritePacket({
            id: Packet.Bancho_VersionUpdateForced, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSwitchServer(raw) {
        return {
            id: Packet.Bancho_SwitchServer, data: this.UnmarshalPacket(raw, [
                {name: 'length', type: 'int32'}
            ])
        }
    }

    /**
     *
     * @param {Length} data
     * @return {Bancho}
     */
    WriteSwitchServer(data) {
        return this.WritePacket({
            id: Packet.Bancho_SwitchServer, data: this.MarshalPacket(data, [
                {name: 'length', type: 'int32'}
            ])
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadAccountRestricted() {
        return {
            id: Packet.Bancho_AccountRestricted, data: null
        }
    }

    /**
     *
     * @return {Bancho}
     */
    WriteAccountRestricted() {
        return this.WritePacket({
            id: Packet.Bancho_AccountRestricted, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadRTX(raw) {
        return {
            id: Packet.Bancho_RTX, data: this.UnmarshalPacket(raw, [
                {name: 'message', type: 'string'}
            ])
        }
    }

    /**
     *
     * @param {MessageString} data
     * @return {Bancho}
     */
    WriteRTX(data) {
        return this.WritePacket({
            id: Packet.Bancho_RTX, data: this.MarshalPacket(data, [
                {name: 'message', type: 'string'}
            ])
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSwitchTourneyServer(raw) {
        return {
            id: Packet.Bancho_SwitchTourneyServer, data: this.UnmarshalPacket(raw, [
                {name: 'serverHost', type: 'string'}
            ])
        }
    }

    /**
     *
     * @param {ServerHost} data
     * @return {Bancho}
     */
    WriteSwitchTourneyServer(data) {
        return this.WritePacket({
            id: Packet.Bancho_SwitchTourneyServer, data: this.MarshalPacket(data, [
                {name: 'serverHost', type: 'string'}
            ])
        })
    }
}

module.exports = Bancho;

/**
 * @typedef {Object} Packet
 * @prop {Number} id
 * @prop {Reply|UserId|Message|ReplayFrame|ScoreFrame|UserQuit|Match|MatchId|ChannelName|Channel|MessageString|
 *          Friends|TitleImage|UserPresence|Length|GamePassword|UserIds|Protocol|Permissions|OsuUpdate|ServerHost|null} data
 */