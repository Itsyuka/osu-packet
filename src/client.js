'use strict';
const Base = require('./base');
const Packet = require('./packets');
const Layouts = require('./layouts');

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
            id: Packet.Client_SendUserStatus, data: this.UnmarshalPacket(raw, Layouts.userStatus)
        }
    }

    /**
     * 
     * @param {UserStatus} data
     * @return {Client}
     */
    WriteSendUserStatus(data) {
        return this.WritePacket({
            id: Packet.Client_SendUserStatus, data: this.MarshalPacket(data, Layouts.userStatus)
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSendIrcMessage(raw) {
        return {
            id: Packet.Client_SendIrcMessage, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     * 
     * @param {Message} data
     * @return {Client}
     */
    WriteSendIrcMessage(data) {
        return this.WritePacket({
            id: Packet.Client_SendIrcMessage, data: this.MarshalPacket(data, Layouts.message)
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadExit(raw) {
        return {
            id: Packet.Client_Exit, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {Reason} data
     * @return {Client}
     */
    WriteExit(data) {
        return this.WritePacket({
            id: Packet.Client_Exit, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadRequestStatusUpdate() {
        return {
            id: Packet.Client_RequestStatusUpdate, data: null
        }
    }

    /**
     * 
     * @return {Client}
     */
    WriteRequestStatusUpdate() {
        return this.WritePacket({
            id: Packet.Client_RequestStatusUpdate, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadPong() {
        return {
            id: Packet.Client_Pong, data: null
        }
    }

    /**
     * 
     * @return {Client}
     */
    WritePong() {
        return this.WritePacket({
            id: Packet.Client_Pong, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadStartSpectating(raw) {
        return {
            id: Packet.Client_StartSpectating, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {UserId} data
     * @return {Client}
     */
    WriteStartSpectating(data) {
        return this.WritePacket({
            id: Packet.Client_StartSpectating, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadStopSpectating() {
        return {
            id: Packet.Client_StopSpectating, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteStopSpectating() {
        return this.WritePacket({
            id: Packet.Client_StopSpectating, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSpectateFrames(raw) {
        return {
            id: Packet.Client_SpectateFrames, data: this.UnmarshalPacket(raw, Layouts.spectateFrames)
        }
    }

    /**
     * 
     * @param {ReplayFrame} data
     * @return {Client}
     */
    WriteSpectateFrames(data) {
        return this.WritePacket({
            id: Packet.Client_SpectateFrames, data: this.MarshalPacket(data, Layouts.spectateFrames)
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadErrorReport() {
        return {
            id: Packet.Client_ErrorReport, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteErrorReport() {
        return this.WritePacket({
            id: Packet.Client_ErrorReport, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadCantSpectate() {
        return {
            id: Packet.Client_CantSpectate, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteCantSpectate() {
        return this.WritePacket({
            id: Packet.Client_CantSpectate, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSendIrcMessagePrivate(raw) {
        return {
            id: Packet.Client_SendIrcMessagePrivate, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     * 
     * @param {Message} data
     * @return {Client}
     */
    WriteSendIrcMessagePrivate(data) {
        return this.WritePacket({
            id: Packet.Client_SendIrcMessagePrivate, data: this.MarshalPacket(data, Layouts.message)
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadLobbyPart() {
        return {
            id: Packet.Client_LobbyPart, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteLobbyPart() {
        return this.WritePacket({
            id: Packet.Client_LobbyPart, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadLobbyJoin() {
        return {
            id: Packet.Client_LobbyJoin, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteLobbyJoin() {
        return this.WritePacket({
            id: Packet.Client_LobbyJoin, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchCreate(raw) {
        return {
            id: Packet.Client_MatchCreate, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     * 
     * @param {Match} data
     * @return {Client}
     */
    WriteMatchCreate(data) {
        return this.WritePacket({
            id: Packet.Client_MatchCreate, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchJoin(raw) {
        return {
            id: Packet.Client_MatchJoin, data: this.UnmarshalPacket(raw, Layouts.multiplayerJoin)
        }
    }

    /**
     * 
     * @param {MatchJoin} data
     * @return {Client}
     */
    WriteMatchJoin(data) {
        return this.WritePacket({
            id: Packet.Client_MatchJoin, data: this.MarshalPacket(data, Layouts.multiplayerJoin)
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchPart() {
        return {
            id: Packet.Client_MatchPart, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchPart() {
        return this.WritePacket({
            id: Packet.Client_MatchPart, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchChangeSlot(raw) {
        return {
            id: Packet.Client_MatchChangeSlot, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {Number} data
     * @return {Client}
     */
    WriteMatchChangeSlot(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeSlot, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchReady() {
        return {
            id: Packet.Client_MatchReady, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchReady() {
        return this.WritePacket({
            id: Packet.Client_MatchReady, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchLock(raw) {
        return {
            id: Packet.Client_MatchLock, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {Number} data
     * @return {Client}
     */
    WriteMatchLock(data) {
        return this.WritePacket({
            id: Packet.Client_MatchLock, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchChangeSettings(raw) {
        return {
            id: Packet.Client_MatchChangeSettings, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     * 
     * @param {Match} data
     * @return {Client}
     */
    WriteMatchChangeSettings(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeSettings, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchStart() {
        return {
            id: Packet.Client_MatchStart, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchStart() {
        return this.WritePacket({
            id: Packet.Client_MatchStart, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchScoreUpdate(raw) {
        return {
            id: Packet.Client_MatchScoreUpdate, data: this.UnmarshalPacket(raw, {type: 'scoreframe'})
        }
    }

    /**
     * 
     * @param {ScoreFrame} data
     * @return {Client}
     */
    WriteMatchScoreUpdate(data) {
        return this.WritePacket({
            id: Packet.Client_MatchScoreUpdate, data: this.MarshalPacket(data, {type: 'scoreframe'})
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchComplete() {
        return {
            id: Packet.Client_MatchComplete, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchComplete() {
        return this.WritePacket({
            id: Packet.Client_MatchComplete, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchChangeMods(raw) {
        return {
            id: Packet.Client_MatchChangeMods, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {CurrentMods} data
     * @return {Client}
     */
    WriteMatchChangeMods(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangeMods, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchLoadComplete() {
        return {
            id: Packet.Client_MatchLoadComplete, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchLoadComplete() {
        return this.WritePacket({
            id: Packet.Client_MatchLoadComplete, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchNoBeatmap() {
        return {
            id: Packet.Client_MatchNoBeatmap, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchNoBeatmap() {
        return this.WritePacket({
            id: Packet.Client_MatchNoBeatmap, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchNotReady() {
        return {
            id: Packet.Client_MatchNotReady, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchNotReady() {
        return this.WritePacket({
            id: Packet.Client_MatchNotReady, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchFailed() {
        return {
            id: Packet.Client_MatchFailed, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchFailed() {
        return this.WritePacket({
            id: Packet.Client_MatchFailed, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchHasBeatmap() {
        return {
            id: Packet.Client_MatchHasBeatmap, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchHasBeatmap() {
        return this.WritePacket({
            id: Packet.Client_MatchHasBeatmap, data: this.MarshalPacket()
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchSkipRequest() {
        return {
            id: Packet.Client_MatchSkipRequest, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchSkipRequest() {
        return this.WritePacket({
            id: Packet.Client_MatchSkipRequest, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadChannelJoin(raw) {
        return {
            id: Packet.Client_ChannelJoin, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     * 
     * @param {ChannelName} data
     * @return {Client}
     */
    WriteChannelJoin(data) {
        return this.WritePacket({
            id: Packet.Client_ChannelJoin, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadBeatmapInfoRequest() {
        return {
            id: Packet.Client_BeatmapInfoRequest, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteBeatmapInfoRequest() {
        return this.WritePacket({
            id: Packet.Client_BeatmapInfoRequest, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchTransferHost(raw) {
        return {
            id: Packet.Client_MatchTransferHost, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {SlotId} data
     * @return {Client}
     */
    WriteMatchTransferHost(data) {
        return this.WritePacket({
            id: Packet.Client_MatchTransferHost, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadFriendAdd(raw) {
        return {
            id: Packet.Client_FriendAdd, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {UserId} data
     * @return {Client}
     */
    WriteFriendAdd(data) {
        return this.WritePacket({
            id: Packet.Client_FriendAdd, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadFriendRemove(raw) {
        return {
            id: Packet.Client_FriendRemove, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {UserId} data
     * @return {Client}
     */
    WriteFriendRemove(data) {
        return this.WritePacket({
            id: Packet.Client_FriendRemove, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchChangeTeam() {
        return {
            id: Packet.Client_MatchChangeTeam, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchChangeTeam() {
        return this.WritePacket({
            id: Packet.Client_MatchChangeTeam, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadChannelLeave(raw) {
        return {
            id: Packet.Client_ChannelLeave, data: this.UnmarshalPacket(raw, {type: 'string'})
        }
    }

    /**
     * 
     * @param {ChannelName} data
     * @return {Client}
     */
    WriteChannelLeave(data) {
        return this.WritePacket({
            id: Packet.Client_ChannelLeave, data: this.MarshalPacket(data, {type: 'string'})
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadReceiveUpdates(raw) {
        return {
            id: Packet.Client_ReceiveUpdates, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {RandomInt} data
     * @return {Client}
     */
    WriteReceiveUpdates(data) {
        return this.WritePacket({
            id: Packet.Client_ReceiveUpdates, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSetIrcAwayMessage(raw) {
        return {
            id: Packet.Client_SetIrcAwayMessage, data: this.UnmarshalPacket(raw, Layouts.message)
        }
    }

    /**
     * 
     * @param {Message} data
     * @return {Client}
     */
    WriteSetIrcAwayMessage(data) {
        return this.WritePacket({
            id: Packet.Client_SetIrcAwayMessage, data: this.MarshalPacket(data, Layouts.message)
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserStatsRequest(raw) {
        return {
            id: Packet.Client_UserStatsRequest, data: this.UnmarshalPacket(raw, {type: 'int32array'})
        }
    }

    /**
     * 
     * @param {UserIds} data
     * @return {Client}
     */
    WriteUserStatsRequest(data) {
        return this.WritePacket({
            id: Packet.Client_UserStatsRequest, data: this.MarshalPacket(data, {type: 'int32array'})
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadInvite(raw) {
        return {
            id: Packet.Client_Invite, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {UserId} data
     * @return {Client}
     */
    WriteInvite(data) {
        return this.WritePacket({
            id: Packet.Client_Invite, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadMatchChangePassword(raw) {
        return {
            id: Packet.Client_MatchChangePassword, data: this.UnmarshalPacket(raw, Layouts.multiplayerLobby)
        }
    }

    /**
     * 
     * @param {Match} data
     * @return {Client}
     */
    WriteMatchChangePassword(data) {
        return this.WritePacket({
            id: Packet.Client_MatchChangePassword, data: this.MarshalPacket(data, Layouts.multiplayerLobby)
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadSpecialMatchInfoRequest(raw) {
        return {
            id: Packet.Client_SpecialMatchInfoRequest, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {MatchId} data
     * @return {Client}
     */
    WriteSpecialMatchInfoRequest(data) {
        return this.WritePacket({
            id: Packet.Client_SpecialMatchInfoRequest, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserPresenceRequest(raw) {
        return {
            id: Packet.Client_UserPresenceRequest, data: this.UnmarshalPacket(raw, {type: 'int32array'})
        }
    }

    /**
     * 
     * @param {UserIds} data
     * @return {Client}
     */
    WriteUserPresenceRequest(data) {
        return this.WritePacket({
            id: Packet.Client_UserPresenceRequest, data: this.MarshalPacket(data, {type: 'int32array'})
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadUserPresenceRequestAll() {
        return {
            id: Packet.Client_UserPresenceRequestAll, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteUserPresenceRequestAll() {
        return this.WritePacket({
            id: Packet.Client_UserPresenceRequestAll, data: this.MarshalPacket()
        })
    }

    /**
     * 
     * @param {OsuBuffer} raw
     * @return {Packet}
     */
    ReadUserToggleBlockNonFriendPM(raw) {
        return {
            id: Packet.Client_UserToggleBlockNonFriendPM, data: this.UnmarshalPacket(raw, {type: 'int32'})
        }
    }

    /**
     * 
     * @param {BlockPM} data
     * @return {Client}
     */
    WriteUserToggleBlockNonFriendPM(data) {
        return this.WritePacket({
            id: Packet.Client_UserToggleBlockNonFriendPM, data: this.MarshalPacket(data, {type: 'int32'})
        })
    }

    /**
     *
     * @return {Packet}
     */
    ReadMatchAbort() {
        return {
            id: Packet.Client_MatchAbort, data: null
        }
    }

    /**
     *
     * @return {Client}
     */
    WriteMatchAbort() {
        return this.WritePacket({
            id: Packet.Client_MatchAbort, data: this.MarshalPacket()
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
     * @param {MatchId} data
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
     * @param {MatchId} data
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
 * @prop {UserStatus|Message|UserId|Reason|ReplayFrame|Match|MatchJoin|SlotId|ScoreFrame|BlockPM|ChannelName|RandomInt|UserIds|CurrentMods|null} data
 */