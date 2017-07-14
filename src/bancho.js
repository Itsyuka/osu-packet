'use strict';
const Base = require('./base');
const Packet = require('./packets');
const Layouts = require('./layouts');

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
            id: Packet.Bancho_LoginReply, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteLoginReply(data) {
        return this.WritePacket({
            id: Packet.Bancho_LoginReply, data: this.MarshalPacket(data, {type: 'int32'})
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
            id: Packet.Bancho_SendMessage, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     * @param {Message} data
     * @return {Bancho}
     */
    WriteSendMessage(data) {
        return this.WritePacket({
            id: Packet.Bancho_SendMessage, data: this.MarshalPacket(data, Layouts.message)
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
            id: Packet.Bancho_HandleIrcChangeUsername, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {String} data
     * @return {Bancho}
     */
    WriteHandleIrcChangeUsername(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleIrcChangeUsername, data: this.MarshalPacket(data, {type: 'string'})
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
            id: Packet.Bancho_HandleOsuUpdate, data: this.UnmarshalPacket(raw, Layouts.userStats)
        }
    }

    /**
     *
     * @param {OsuUpdate} data
     * @return {Bancho}
     */
    WriteHandleOsuUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleOsuUpdate, data: this.MarshalPacket(data, Layouts.userStats)
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadHandleUserQuit(raw) {
        return {
            id: Packet.Bancho_HandleUserQuit, data: this.UnmarshalPacket(raw, Layouts.userQuit)
        }
    }

    /**
     *
     * @param {UserQuit} data
     * @return {Bancho}
     */
    WriteHandleUserQuit(data) {
        return this.WritePacket({
            id: Packet.Bancho_HandleUserQuit, data: this.MarshalPacket(data, Layouts.userQuit)
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSpectatorJoined(raw) {
        return {
            id: Packet.Bancho_SpectatorJoined, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteSpectatorJoined(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorJoined, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSpectatorLeft(raw) {
        return {
            id: Packet.Bancho_SpectatorLeft, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteSpectatorLeft(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorLeft, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSpectateFrames(raw) {
        return {
            id: Packet.Bancho_SpectateFrames, data: this.UnmarshalPacket(raw, Layouts.spectateFrames)
        }
    }

    /**
     *
     * @param {ReplayFrame} data
     * @return {Bancho}
     */
    WriteSpectateFrames(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectateFrames, data: this.MarshalPacket(data, Layouts.spectateFrames)
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
            id: Packet.Bancho_SpectatorCantSpectate, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteSpectatorCantSpectate(data) {
        return this.WritePacket({
            id: Packet.Bancho_SpectatorCantSpectate, data: this.MarshalPacket(data, {type: 'int32'})
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
            id: Packet.Bancho_Announce, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {String} data
     * @return {Bancho}
     */
    WriteAnnounce(data) {
        return this.WritePacket({
            id: Packet.Bancho_Announce, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchUpdate(raw) {
        return {
            id: Packet.Bancho_MatchUpdate, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     *
     * @param {Match} data
     * @return {Bancho}
     */
    WriteMatchUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchUpdate, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchNew(raw) {
        return {
            id: Packet.Bancho_MatchNew, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     *
     * @param {Match} data
     * @return {Bancho}
     */
    WriteMatchNew(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchNew, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchDisband(raw) {
        return {
            id: Packet.Bancho_MatchDisband, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteMatchDisband(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchDisband, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchJoinSuccess(raw) {
        return {
            id: Packet.Bancho_MatchJoinSuccess, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     *
     * @param {Match} data
     * @return {Bancho}
     */
    WriteMatchJoinSuccess(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchJoinSuccess, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
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
            id: Packet.Bancho_FellowSpectatorJoined, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteFellowSpectatorJoined(data) {
        return this.WritePacket({
            id: Packet.Bancho_FellowSpectatorJoined, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadFellowSpectatorLeft(raw) {
        return {
            id: Packet.Bancho_FellowSpectatorLeft, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteFellowSpectatorLeft(data) {
        return this.WritePacket({
            id: Packet.Bancho_FellowSpectatorLeft, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchStart(raw) {
        return {
            id: Packet.Bancho_MatchStart, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     *
     * @param {Match} data
     * @return {Bancho}
     */
    WriteMatchStart(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchStart, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchScoreUpdate(raw) {
        return {
            id: Packet.Bancho_MatchScoreUpdate, data: this.UnmarshalPacket(raw, {type: 'scoreframe'})
        }
    }

    /**
     *
     * @param {ScoreFrame} data
     * @return {Bancho}
     */
    WriteMatchScoreUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchScoreUpdate, data: this.MarshalPacket(data, {type: 'scoreframe'})
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
            id: Packet.Bancho_MatchPlayerFailed, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteMatchPlayerFailed(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchPlayerFailed, data: this.MarshalPacket(data, {type: 'int32'})
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
            id: Packet.Bancho_ChannelJoinSuccess, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {String} data
     * @return {Bancho}
     */
    WriteChannelJoinSuccess(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelJoinSuccess, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadChannelAvailable(raw) {
        return {
            id: Packet.Bancho_ChannelAvailable, data: this.UnmarshalPacket(raw, Layouts.channel)
        }
    }

    /**
     *
     * @param {Channel} data
     * @return {Bancho}
     */
    WriteChannelAvailable(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelAvailable, data: this.MarshalPacket(data, Layouts.channel)
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadChannelRevoked(raw) {
        return {
            id: Packet.Bancho_ChannelRevoked, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {String} data
     * @return {Bancho}
     */
    WriteChannelRevoked(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelRevoked, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadChannelAvailableAutojoin(raw) {
        return {
            id: Packet.Bancho_ChannelAvailableAutojoin, data: this.UnmarshalPacket(raw, Layouts.channel)
        }
    }

    /**
     *
     * @param {Channel} data
     * @return {Bancho}
     */
    WriteChannelAvailableAutojoin(data) {
        return this.WritePacket({
            id: Packet.Bancho_ChannelAvailableAutojoin, data: this.MarshalPacket(data, Layouts.channel)
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
            id: Packet.Bancho_LoginPermissions, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteLoginPermissions(data) {
        return this.WritePacket({
            id: Packet.Bancho_LoginPermissions, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadFriendsList(raw) {
        return {
            id: Packet.Bancho_FriendsList, data: this.UnmarshalPacket(raw, {type: 'int32array'})
        }
    }

    /**
     *
     * @param {Array} data
     * @return {Bancho}
     */
    WriteFriendsList(data) {
        return this.WritePacket({
            id: Packet.Bancho_FriendsList, data: this.MarshalPacket(data, {type: 'int32array'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadProtocolNegotiation(raw) {
        return {
            id: Packet.Bancho_ProtocolNegotiation, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteProtocolNegotiation(data) {
        return this.WritePacket({
            id: Packet.Bancho_ProtocolNegotiation, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadTitleUpdate(raw) {
        return {
            id: Packet.Bancho_TitleUpdate, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {String} data
     * @return {Bancho}
     */
    WriteTitleUpdate(data) {
        return this.WritePacket({
            id: Packet.Bancho_TitleUpdate, data: this.MarshalPacket(data, {type: 'string'})
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
            id: Packet.Bancho_MatchPlayerSkipped, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteMatchPlayerSkipped(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchPlayerSkipped, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserPresence(raw) {
        return {
            id: Packet.Bancho_UserPresence, data: this.UnmarshalPacket(raw, Layouts.userPresence)
        }
    }

    /**
     *
     * @param {UserPresence} data
     * @return {Bancho}
     */
    WriteUserPresence(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPresence, data: this.MarshalPacket(data, Layouts.userPresence)
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadRestart(raw) {
        return {
            id: Packet.Bancho_Restart, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteRestart(data) {
        return this.WritePacket({
            id: Packet.Bancho_Restart, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadInvite(raw) {
        return {
            id: Packet.Bancho_Invite, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     *
     * @param {Message} data
     * @return {Bancho}
     */
    WriteInvite(data) {
        return this.WritePacket({
            id: Packet.Bancho_Invite, data: this.MarshalPacket(data, Layouts.message)
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
            id: Packet.Bancho_MatchChangePassword, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {String} data
     * @return {Bancho}
     */
    WriteMatchChangePassword(data) {
        return this.WritePacket({
            id: Packet.Bancho_MatchChangePassword, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadBanInfo(raw) {
        return {
            id: Packet.Bancho_BanInfo, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteBanInfo(data) {
        return this.WritePacket({
            id: Packet.Bancho_BanInfo, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserSilenced(raw) {
        return {
            id: Packet.Bancho_UserSilenced, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteUserSilenced(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserSilenced, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserPresenceSingle(raw) {
        return {
            id: Packet.Bancho_UserPresenceSingle, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteUserPresenceSingle(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPresenceSingle, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserPresenceBundle(raw) {
        return {
            id: Packet.Bancho_UserPresenceBundle, data: this.UnmarshalPacket(raw, {type: 'int32array'})
        }
    }

    /**
     *
     * @param {Array} data
     * @return {Bancho}
     */
    WriteUserPresenceBundle(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPresenceBundle, data: this.MarshalPacket(data, {type: 'int32array'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserPMBlocked(raw) {
        return {
            id: Packet.Bancho_UserPMBlocked, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     *
     * @param {Message} data
     * @return {Bancho}
     */
    WriteUserPMBlocked(data) {
        return this.WritePacket({
            id: Packet.Bancho_UserPMBlocked, data: this.MarshalPacket(data, Layouts.message)
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadTargetIsSilenced(raw) {
        return {
            id: Packet.Bancho_TargetIsSilenced, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     *
     * @param {Message} data
     * @return {Bancho}
     */
    WriteTargetIsSilenced(data) {
        return this.WritePacket({
            id: Packet.Bancho_TargetIsSilenced, data: this.MarshalPacket(data, Layouts.message)
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
            id: Packet.Bancho_SwitchServer, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {Number} data
     * @return {Bancho}
     */
    WriteSwitchServer(data) {
        return this.WritePacket({
            id: Packet.Bancho_SwitchServer, data: this.MarshalPacket(data, {type: 'int32'})
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
            id: Packet.Bancho_RTX, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {String} data
     * @return {Bancho}
     */
    WriteRTX(data) {
        return this.WritePacket({
            id: Packet.Bancho_RTX, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSwitchTourneyServer(raw) {
        return {
            id: Packet.Bancho_SwitchTourneyServer, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {String} data
     * @return {Bancho}
     */
    WriteSwitchTourneyServer(data) {
        return this.WritePacket({
            id: Packet.Bancho_SwitchTourneyServer, data: this.MarshalPacket(data, {type: 'string'})
        })
    }
}

module.exports = Bancho;

/**
 * @typedef {Object} Packet
 * @prop {Number} id
 * @prop {Message|ReplayFrame|ScoreFrame|UserQuit|Match|Channel|String|Array|Number
 *         |UserPresence|OsuUpdate|ServerHost|null} data
 */