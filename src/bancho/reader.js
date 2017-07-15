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
    LoginReply(raw) {
        return {
            id: Packet.Bancho_LoginReply, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    CommandError() {
        return {
            id: Packet.Bancho_CommandError, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SendMessage(raw) {
        return {
            id: Packet.Bancho_SendMessage, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     *
     * @return {Packet}
     */
    Ping() {
        return {
            id: Packet.Bancho_Ping, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    HandleIrcChangeUsername(raw) {
        return {
            id: Packet.Bancho_HandleIrcChangeUsername, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    HandleIrcQuit() {
        return {
            id: Packet.Bancho_HandleIrcQuit, data: null
        }
    }

    /**
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    HandleOsuUpdate(raw) {
        return {
            id: Packet.Bancho_HandleOsuUpdate, data: this.UnmarshalPacket(raw, Layouts.userStats)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    HandleUserQuit(raw) {
        return {
            id: Packet.Bancho_HandleUserQuit, data: this.UnmarshalPacket(raw, Layouts.userQuit)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SpectatorJoined(raw) {
        return {
            id: Packet.Bancho_SpectatorJoined, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SpectatorLeft(raw) {
        return {
            id: Packet.Bancho_SpectatorLeft, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SpectateFrames(raw) {
        return {
            id: Packet.Bancho_SpectateFrames, data: this.UnmarshalPacket(raw, Layouts.spectateFrames)
        }
    }

    /**
     *
     * @return {Packet}
     */
    VersionUpdate() {
        return {
            id: Packet.Bancho_VersionUpdate, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SpectatorCantSpectate(raw) {
        return {
            id: Packet.Bancho_SpectatorCantSpectate, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    GetAttention() {
        return {
            id: Packet.Bancho_GetAttention, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    Announce(raw) {
        return {
            id: Packet.Bancho_Announce, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchUpdate(raw) {
        return {
            id: Packet.Bancho_MatchUpdate, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchNew(raw) {
        return {
            id: Packet.Bancho_MatchNew, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchDisband(raw) {
        return {
            id: Packet.Bancho_MatchDisband, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchJoinSuccess(raw) {
        return {
            id: Packet.Bancho_MatchJoinSuccess, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchJoinFail() {
        return {
            id: Packet.Bancho_MatchJoinFail, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    FellowSpectatorJoined(raw) {
        return {
            id: Packet.Bancho_FellowSpectatorJoined, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    FellowSpectatorLeft(raw) {
        return {
            id: Packet.Bancho_FellowSpectatorLeft, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchStart(raw) {
        return {
            id: Packet.Bancho_MatchStart, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchScoreUpdate(raw) {
        return {
            id: Packet.Bancho_MatchScoreUpdate, data: this.UnmarshalPacket(raw, {type: 'scoreframe'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchTransferHost() {
        return {
            id: Packet.Bancho_MatchTransferHost, data: null
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchAllPlayersLoaded() {
        return {
            id: Packet.Bancho_MatchAllPlayersLoaded, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchPlayerFailed(raw) {
        return {
            id: Packet.Bancho_MatchPlayerFailed, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchComplete() {
        return {
            id: Packet.Bancho_MatchComplete, data: null
        }
    }

    /**
     *
     * @return {Packet}
     */
    MatchSkip() {
        return {
            id: Packet.Bancho_MatchSkip, data: null
        }
    }

    /**
     *
     * @return {Packet}
     */
    Unauthorised() {
        return {
            id: Packet.Bancho_Unauthorised, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ChannelJoinSuccess(raw) {
        return {
            id: Packet.Bancho_ChannelJoinSuccess, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ChannelAvailable(raw) {
        return {
            id: Packet.Bancho_ChannelAvailable, data: this.UnmarshalPacket(raw, Layouts.channel)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ChannelRevoked(raw) {
        return {
            id: Packet.Bancho_ChannelRevoked, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ChannelAvailableAutojoin(raw) {
        return {
            id: Packet.Bancho_ChannelAvailableAutojoin, data: this.UnmarshalPacket(raw, Layouts.channel)
        }
    }

    /**
     *
     * @return {Packet}
     */
    BeatmapInfoReply() {
        return {
            id: Packet.Bancho_BeatmapInfoReply, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    LoginPermissions(raw) {
        return {
            id: Packet.Bancho_LoginPermissions, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    FriendsList(raw) {
        return {
            id: Packet.Bancho_FriendsList, data: this.UnmarshalPacket(raw, {type: 'int32array'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ProtocolNegotiation(raw) {
        return {
            id: Packet.Bancho_ProtocolNegotiation, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    TitleUpdate(raw) {
        return {
            id: Packet.Bancho_TitleUpdate, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    Monitor() {
        return {
            id: Packet.Bancho_Monitor, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchPlayerSkipped(raw) {
        return {
            id: Packet.Bancho_MatchPlayerSkipped, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    UserPresence(raw) {
        return {
            id: Packet.Bancho_UserPresence, data: this.UnmarshalPacket(raw, Layouts.userPresence)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    Restart(raw) {
        return {
            id: Packet.Bancho_Restart, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    Invite(raw) {
        return {
            id: Packet.Bancho_Invite, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     *
     * @return {Packet}
     */
    ChannelListingComplete() {
        return {
            id: Packet.Bancho_ChannelListingComplete, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    MatchChangePassword(raw) {
        return {
            id: Packet.Bancho_MatchChangePassword, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    BanInfo(raw) {
        return {
            id: Packet.Bancho_BanInfo, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    UserSilenced(raw) {
        return {
            id: Packet.Bancho_UserSilenced, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    UserPresenceSingle(raw) {
        return {
            id: Packet.Bancho_UserPresenceSingle, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    UserPresenceBundle(raw) {
        return {
            id: Packet.Bancho_UserPresenceBundle, data: this.UnmarshalPacket(raw, {type: 'int32array'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    UserPMBlocked(raw) {
        return {
            id: Packet.Bancho_UserPMBlocked, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    TargetIsSilenced(raw) {
        return {
            id: Packet.Bancho_TargetIsSilenced, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     *
     * @return {Packet}
     */
    VersionUpdateForced() {
        return {
            id: Packet.Bancho_VersionUpdateForced, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SwitchServer(raw) {
        return {
            id: Packet.Bancho_SwitchServer, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     *
     * @return {Packet}
     */
    AccountRestricted() {
        return {
            id: Packet.Bancho_AccountRestricted, data: null
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    RTX(raw) {
        return {
            id: Packet.Bancho_RTX, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     *
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    SwitchTourneyServer(raw) {
        return {
            id: Packet.Bancho_SwitchTourneyServer, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }
}

module.exports = Reader;

/**
 * @typedef {Object} Packet
 * @prop {Number} id
 * @prop {Message|ReplayFrame|ScoreFrame|UserQuit|Match|Channel|String|Array|Number
 *         |UserPresence|OsuUpdate|ServerHost|null} data
 */