'use strict';
const Base = require('../base');
const Packet = require('../packets');
const Layouts = require('../layouts');

class Writer extends Base.Writer {
    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    LoginReply(data) {
        return this.WritePacket({
            id: Packet.Bancho_LoginReply, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    CommandError() {
        return this.WritePacket({
            id: Packet.Bancho_CommandError, data: this.MarshalPacket()
        })
    }

    /**
     * @param {Message} data
     * @return {Writer}
     */
    SendMessage(data) {
        return this.WritePacket({
            id: Packet.Bancho_SendMessage, data: this.MarshalPacket(data, Layouts.message)
        })
    }

    /**
     *
     * @return {Writer}
     */
    Ping() {
        return this.WritePacket({
            id: Packet.Bancho_Ping, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {String} data
     * @return {Writer}
     */
    HandleIrcChangeUsername(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleIrcChangeUsername, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    HandleIrcQuit() {
        return this.WritePacket({
            id: Packet.Bancho_HandleIrcQuit, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {OsuUpdate} data
     * @return {Writer}
     */
    HandleOsuUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleOsuUpdate, data: this.MarshalPacket(data, Layouts.userStats)
        })
    }

    /**
     *
     * @param {UserQuit} data
     * @return {Writer}
     */
    HandleUserQuit(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleUserQuit, data: this.MarshalPacket(data, Layouts.userQuit)
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    SpectatorJoined(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorJoined, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    SpectatorLeft(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorLeft, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {ReplayFrame} data
     * @return {Writer}
     */
    SpectateFrames(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectateFrames, data: this.MarshalPacket(data, Layouts.spectateFrames)
        })
    }

    /**
     *
     * @return {Writer}
     */
    VersionUpdate() {
        return this.WritePacket({
            id: Packet.Bancho_VersionUpdate, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    SpectatorCantSpectate(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorCantSpectate, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    GetAttention() {
        return this.WritePacket({
            id: Packet.Bancho_GetAttention, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {String} data
     * @return {Writer}
     */
    Announce(data) {
        return this.WritePacket({
            id: Packet.Bancho_Announce, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @param {Match} data
     * @return {Writer}
     */
    MatchUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchUpdate, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     *
     * @param {Match} data
     * @return {Writer}
     */
    MatchNew(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchNew, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    MatchDisband(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchDisband, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Match} data
     * @return {Writer}
     */
    MatchJoinSuccess(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchJoinSuccess, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchJoinFail() {
        return this.WritePacket({
            id: Packet.Bancho_MatchJoinFail, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    FellowSpectatorJoined(data) {
        return this.WritePacket({
            id: Packet.Bancho_FellowSpectatorJoined, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    FellowSpectatorLeft(data) {
        return this.WritePacket({
            id: Packet.Bancho_FellowSpectatorLeft, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Match} data
     * @return {Writer}
     */
    MatchStart(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchStart, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     *
     * @param {ScoreFrame} data
     * @return {Writer}
     */
    MatchScoreUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchScoreUpdate, data: this.MarshalPacket(data, {type: 'scoreframe'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchTransferHost() {
        return this.WritePacket({
            id: Packet.Bancho_MatchTransferHost, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchAllPlayersLoaded() {
        return this.WritePacket({
            id: Packet.Bancho_MatchAllPlayersLoaded, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    MatchPlayerFailed(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchPlayerFailed, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchComplete() {
        return this.WritePacket({
            id: Packet.Bancho_MatchComplete, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Writer}
     */
    MatchSkip() {
        return this.WritePacket({
            id: Packet.Bancho_MatchSkip, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Writer}
     */
    Unauthorised() {
        return this.WritePacket({
            id: Packet.Bancho_Unauthorised, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {String} data
     * @return {Writer}
     */
    ChannelJoinSuccess(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelJoinSuccess, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @param {Channel} data
     * @return {Writer}
     */
    ChannelAvailable(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelAvailable, data: this.MarshalPacket(data, Layouts.channel)
        })
    }

    /**
     *
     * @param {String} data
     * @return {Writer}
     */
    ChannelRevoked(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelRevoked, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @param {Channel} data
     * @return {Writer}
     */
    ChannelAvailableAutojoin(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelAvailableAutojoin, data: this.MarshalPacket(data, Layouts.channel)
        })
    }

    /**
     *
     * @return {Writer}
     */
    BeatmapInfoReply() {
        return this.WritePacket({
            id: Packet.Bancho_BeatmapInfoReply, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    LoginPermissions(data) {
        return this.WritePacket({
            id: Packet.Bancho_LoginPermissions, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Array} data
     * @return {Writer}
     */
    FriendsList(data) {
        return this.WritePacket({
            id: Packet.Bancho_FriendsList, data: this.MarshalPacket(data, {type: 'int32array'})
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    ProtocolNegotiation(data) {
        return this.WritePacket({
            id: Packet.Bancho_ProtocolNegotiation, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {String} data
     * @return {Writer}
     */
    TitleUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_TitleUpdate, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    Monitor() {
        return this.WritePacket({
            id: Packet.Bancho_Monitor, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    MatchPlayerSkipped(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchPlayerSkipped, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {UserPresence} data
     * @return {Writer}
     */
    UserPresence(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPresence, data: this.MarshalPacket(data, Layouts.userPresence)
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    Restart(data) {
        return this.WritePacket({
            id: Packet.Bancho_Restart, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Message} data
     * @return {Writer}
     */
    Invite(data) {
        return this.WritePacket({
            id: Packet.Bancho_Invite, data: this.MarshalPacket(data, Layouts.message)
        })
    }

    /**
     *
     * @return {Writer}
     */
    ChannelListingComplete() {
        return this.WritePacket({
            id: Packet.Bancho_ChannelListingComplete, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {String} data
     * @return {Writer}
     */
    MatchChangePassword(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchChangePassword, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    BanInfo(data) {
        return this.WritePacket({
            id: Packet.Bancho_BanInfo, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    UserSilenced(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserSilenced, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    UserPresenceSingle(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPresenceSingle, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {Array} data
     * @return {Writer}
     */
    UserPresenceBundle(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPresenceBundle, data: this.MarshalPacket(data, {type: 'int32array'})
        })
    }

    /**
     *
     * @param {Message} data
     * @return {Writer}
     */
    UserPMBlocked(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPMBlocked, data: this.MarshalPacket(data, Layouts.message)
        })
    }

    /**
     *
     * @param {Message} data
     * @return {Writer}
     */
    TargetIsSilenced(data) {
        return this.WritePacket({
            id: Packet.Bancho_TargetIsSilenced, data: this.MarshalPacket(data, Layouts.message)
        })
    }

    /**
     *
     * @return {Writer}
     */
    VersionUpdateForced() {
        return this.WritePacket({
            id: Packet.Bancho_VersionUpdateForced, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {Number} data
     * @return {Writer}
     */
    SwitchServer(data) {
        return this.WritePacket({
            id: Packet.Bancho_SwitchServer, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Writer}
     */
    AccountRestricted() {
        return this.WritePacket({
            id: Packet.Bancho_AccountRestricted, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @param {String} data
     * @return {Writer}
     */
    RTX(data) {
        return this.WritePacket({
            id: Packet.Bancho_RTX, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @param {String} data
     * @return {Writer}
     */
    SwitchTourneyServer(data) {
        return this.WritePacket({
            id: Packet.Bancho_SwitchTourneyServer, data: this.MarshalPacket(data, {type: 'string'})
        })
    }
}

module.exports = Writer;