'use strict';
const Base = require('../base');
const Packet = require('../packets');
const Layouts = require('../layouts');

class Reader extends Base.Reader {
    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SendUserStatus(raw) {
        return {
            id: Packet.Client_SendUserStatus, data: this.UnmarshalPacket(raw, Layouts.userStatus)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SendIrcMessage(raw) {
        return {
            id: Packet.Client_SendIrcMessage, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    Exit(raw) {
        return {
            id: Packet.Client_Exit, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    RequestStatusUpdate() {
        return {
            id: Packet.Client_RequestStatusUpdate, data: null
        }
    }

    /**
     *
     * @return {Packet}
     */
    Pong() {
        return {
            id: Packet.Client_Pong, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    StartSpectating(raw) {
        return {
            id: Packet.Client_StartSpectating, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    StopSpectating() {
        return {
            id: Packet.Client_StopSpectating, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SpectateFrames(raw) {
        return {
            id: Packet.Client_SpectateFrames, data: this.UnmarshalPacket(raw, Layouts.spectateFrames)
        }
    }

    /**
     *
     * @return {Packet}
     */
    ErrorReport() {
        return {
            id: Packet.Client_ErrorReport, data: null
        }
    }

    /**
     *
     * @return {Packet}
     */
    CantSpectate() {
        return {
            id: Packet.Client_CantSpectate, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SendIrcMessagePrivate(raw) {
        return {
            id: Packet.Client_SendIrcMessagePrivate, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     *
     * @return {Packet}
     */
    LobbyPart() {
        return {
            id: Packet.Client_LobbyPart, data: null
        }
    }

    /**
     *
     * @return {Packet}
     */
    LobbyJoin() {
        return {
            id: Packet.Client_LobbyJoin, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchCreate(raw) {
        return {
            id: Packet.Client_MatchCreate, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchJoin(raw) {
        return {
            id: Packet.Client_MatchJoin, data: this.UnmarshalPacket(raw, Layouts.multiplayerJoin)
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchPart() {
        return {
            id: Packet.Client_MatchPart, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchChangeSlot(raw) {
        return {
            id: Packet.Client_MatchChangeSlot, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchReady() {
        return {
            id: Packet.Client_MatchReady, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchLock(raw) {
        return {
            id: Packet.Client_MatchLock, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchChangeSettings(raw) {
        return {
            id: Packet.Client_MatchChangeSettings, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchStart() {
        return {
            id: Packet.Client_MatchStart, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchScoreUpdate(raw) {
        return {
            id: Packet.Client_MatchScoreUpdate, data: this.UnmarshalPacket(raw, {type: 'scoreframe'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchComplete() {
        return {
            id: Packet.Client_MatchComplete, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchChangeMods(raw) {
        return {
            id: Packet.Client_MatchChangeMods, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchLoadComplete() {
        return {
            id: Packet.Client_MatchLoadComplete, data: null
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchNoBeatmap() {
        return {
            id: Packet.Client_MatchNoBeatmap, data: null
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchNotReady() {
        return {
            id: Packet.Client_MatchNotReady, data: null
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchFailed() {
        return {
            id: Packet.Client_MatchFailed, data: null
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchHasBeatmap() {
        return {
            id: Packet.Client_MatchHasBeatmap, data: null
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchSkipRequest() {
        return {
            id: Packet.Client_MatchSkipRequest, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ChannelJoin(raw) {
        return {
            id: Packet.Client_ChannelJoin, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    BeatmapInfoRequest() {
        return {
            id: Packet.Client_BeatmapInfoRequest, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchTransferHost(raw) {
        return {
            id: Packet.Client_MatchTransferHost, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    FriendAdd(raw) {
        return {
            id: Packet.Client_FriendAdd, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    FriendRemove(raw) {
        return {
            id: Packet.Client_FriendRemove, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchChangeTeam() {
        return {
            id: Packet.Client_MatchChangeTeam, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ChannelLeave(raw) {
        return {
            id: Packet.Client_ChannelLeave, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReceiveUpdates(raw) {
        return {
            id: Packet.Client_ReceiveUpdates, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SetIrcAwayMessage(raw) {
        return {
            id: Packet.Client_SetIrcAwayMessage, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    UserStatsRequest(raw) {
        return {
            id: Packet.Client_UserStatsRequest, data: this.UnmarshalPacket(raw, {type: 'int32array'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    Invite(raw) {
        return {
            id: Packet.Client_Invite, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchChangePassword(raw) {
        return {
            id: Packet.Client_MatchChangePassword, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SpecialMatchInfoRequest(raw) {
        return {
            id: Packet.Client_SpecialMatchInfoRequest, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    UserPresenceRequest(raw) {
        return {
            id: Packet.Client_UserPresenceRequest, data: this.UnmarshalPacket(raw, {type: 'int32array'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    UserPresenceRequestAll() {
        return {
            id: Packet.Client_UserPresenceRequestAll, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    UserToggleBlockNonFriendPM(raw) {
        return {
            id: Packet.Client_UserToggleBlockNonFriendPM, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchAbort() {
        return {
            id: Packet.Client_MatchAbort, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SpecialJoinMatchChannel(raw) {
        return {
            id: Packet.Client_SpecialJoinMatchChannel, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SpecialLeaveMatchChannel(raw) {
        return {
            id: Packet.Client_SpecialLeaveMatchChannel, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }
}

module.exports = Reader;

/**
 * @typedef {Object} Packet
 * @prop {Number} id
 * @prop {UserStatus|Message|ReplayFrame|Match|MatchJoin|ScoreFrame|String|Number|Array|null} data
 */