'use strict';
const Base = require('../base');
const Packet = require('../packets');
const Layouts = require('../layouts');

class Writer extends Base.Writer {
    /**
     *
     * @param {UserStatus} data
     * @return {Writer}
     */
    SendUserStatus(data) {
        return this.WritePacket({
            id: Packet.Client_SendUserStatus, data: this.MarshalPacket(data, Layouts.userStatus)
        })
    }

    /**
     *
     * @param {Message} data
     * @return {Writer}
     */
    SendIrcMessage(data) {
        return this.WritePacket({
            id: Packet.Client_SendIrcMessage, data: this.MarshalPacket(data, Layouts.message)
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    Exit(data) {
        return this.WritePacket({
            id: Packet.Client_Exit, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    RequestStatusUpdate() {
        return this.WritePacket({
            id: Packet.Client_RequestStatusUpdate, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Writer}
     */
    Pong() {
        return this.WritePacket({
            id: Packet.Client_Pong, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    StartSpectating(data) {
        return this.WritePacket({
            id: Packet.Client_StartSpectating, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    StopSpectating() {
        return this.WritePacket({
            id: Packet.Client_StopSpectating, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {ReplayFrame} data
     * @return {Writer}
     */
    SpectateFrames(data) {
        return this.WritePacket({
            id: Packet.Client_SpectateFrames, data: this.MarshalPacket(data, Layouts.spectateFrames)
        })
    }

    /**
     *
     * @return {Writer}
     */
    ErrorReport() {
        return this.WritePacket({
            id: Packet.Client_ErrorReport, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Writer}
     */
    CantSpectate() {
        return this.WritePacket({
            id: Packet.Client_CantSpectate, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Message} data
     * @return {Writer}
     */
    SendIrcMessagePrivate(data) {
        return this.WritePacket({
            id: Packet.Client_SendIrcMessagePrivate, data: this.MarshalPacket(data, Layouts.message)
        })
    }

    /**
     *
     * @return {Writer}
     */
    LobbyPart() {
        return this.WritePacket({
            id: Packet.Client_LobbyPart, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Writer}
     */
    LobbyJoin() {
        return this.WritePacket({
            id: Packet.Client_LobbyJoin, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Match} data
     * @return {Writer}
     */
    MatchCreate(data) {
        return this.WritePacket({
            id: Packet.Client_MatchCreate, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     *
     * @param {MatchJoin} data
     * @return {Writer}
     */
    MatchJoin(data) {
        return this.WritePacket({
            id: Packet.Client_MatchJoin, data: this.MarshalPacket(data, Layouts.multiplayerJoin)
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchPart() {
        return this.WritePacket({
            id: Packet.Client_MatchPart, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    MatchChangeSlot(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeSlot, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchReady() {
        return this.WritePacket({
            id: Packet.Client_MatchReady, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    MatchLock(data) {
        return this.WritePacket({
            id: Packet.Client_MatchLock, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Match} data
     * @return {Writer}
     */
    MatchChangeSettings(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeSettings, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchStart() {
        return this.WritePacket({
            id: Packet.Client_MatchStart, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {ScoreFrame} data
     * @return {Writer}
     */
    MatchScoreUpdate(data) {
        return this.WritePacket({
            id: Packet.Client_MatchScoreUpdate, data: this.MarshalPacket(data, {type: 'scoreframe'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchComplete() {
        return this.WritePacket({
            id: Packet.Client_MatchComplete, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    MatchChangeMods(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeMods, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchLoadComplete() {
        return this.WritePacket({
            id: Packet.Client_MatchLoadComplete, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchNoBeatmap() {
        return this.WritePacket({
            id: Packet.Client_MatchNoBeatmap, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchNotReady() {
        return this.WritePacket({
            id: Packet.Client_MatchNotReady, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchFailed() {
        return this.WritePacket({
            id: Packet.Client_MatchFailed, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchHasBeatmap() {
        return this.WritePacket({
            id: Packet.Client_MatchHasBeatmap, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchSkipRequest() {
        return this.WritePacket({
            id: Packet.Client_MatchSkipRequest, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {String} data
     * @return {Writer}
     */
    ChannelJoin(data) {
        return this.WritePacket({
            id: Packet.Client_ChannelJoin, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    BeatmapInfoRequest() {
        return this.WritePacket({
            id: Packet.Client_BeatmapInfoRequest, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    MatchTransferHost(data) {
        return this.WritePacket({
            id: Packet.Client_MatchTransferHost, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    FriendAdd(data) {
        return this.WritePacket({
            id: Packet.Client_FriendAdd, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    FriendRemove(data) {
        return this.WritePacket({
            id: Packet.Client_FriendRemove, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchChangeTeam() {
        return this.WritePacket({
            id: Packet.Client_MatchChangeTeam, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {String} data
     * @return {Writer}
     */
    ChannelLeave(data) {
        return this.WritePacket({
            id: Packet.Client_ChannelLeave, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    ReceiveUpdates(data) {
        return this.WritePacket({
            id: Packet.Client_ReceiveUpdates, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Message} data
     * @return {Writer}
     */
    SetIrcAwayMessage(data) {
        return this.WritePacket({
            id: Packet.Client_SetIrcAwayMessage, data: this.MarshalPacket(data, Layouts.message)
        })
    }

    /**
     *
     * @param {Array} data
     * @return {Writer}
     */
    UserStatsRequest(data) {
        return this.WritePacket({
            id: Packet.Client_UserStatsRequest, data: this.MarshalPacket(data, {type: 'int32array'})
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    Invite(data) {
        return this.WritePacket({
            id: Packet.Client_Invite, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Match} data
     * @return {Writer}
     */
    MatchChangePassword(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangePassword, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    SpecialMatchInfoRequest(data) {
        return this.WritePacket({
            id: Packet.Client_SpecialMatchInfoRequest, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Array} data
     * @return {Writer}
     */
    UserPresenceRequest(data) {
        return this.WritePacket({
            id: Packet.Client_UserPresenceRequest, data: this.MarshalPacket(data, {type: 'int32array'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    UserPresenceRequestAll() {
        return this.WritePacket({
            id: Packet.Client_UserPresenceRequestAll, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    UserToggleBlockNonFriendPM(data) {
        return this.WritePacket({
            id: Packet.Client_UserToggleBlockNonFriendPM, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchAbort() {
        return this.WritePacket({
            id: Packet.Client_MatchAbort, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    SpecialJoinMatchChannel(data) {
        return this.WritePacket({
            id: Packet.Client_SpecialJoinMatchChannel, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    SpecialLeaveMatchChannel(data) {
        return this.WritePacket({
            id: Packet.Client_SpecialLeaveMatchChannel, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }
}

module.exports = Writer;