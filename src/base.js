'use strict';
const OsuBuffer = require('osu-buffer');
const Packet = require('./packets');

/**
 * @prop {OsuBuffer} buffer
 */
class Base {
    /**
     * @param {Buffer?} input
     */
    constructor(input) {
        this.buffer = OsuBuffer.from((input instanceof Buffer) ? input : []);
    }

    /**
     * Writes a set of data to a buffer
     * @param {Object} o
     * @return {Buffer}
     */
    Write(o) {
        let buff = new OsuBuffer();
        switch (o.type) {
            case 'int8':
                buff.WriteInt8(o.data);
                break;
            case 'uint8':
                buff.WriteUInt8(o.data);
                break;
            case 'int16':
                buff.WriteInt16(o.data);
                break;
            case 'uint16':
                buff.WriteUInt16(o.data);
                break;
            case 'int32':
                buff.WriteInt32(o.data);
                break;
            case 'uint32':
                buff.WriteUInt32(o.data);
                break;
            case 'int64':
                buff.WriteInt64(o.data);
                break;
            case 'uint64':
                buff.WriteUInt64(o.data);
                break;
            case 'string':
                buff.WriteOsuString(o.data, o.nullable);
                break;
            case 'float':
                buff.WriteFloat(o.data);
                break;
            case 'double':
                buff.WriteDouble(o.data);
                break;
            case 'boolean':
                buff.WriteBoolean(o.data);
                break;
            case 'byte':
                buff.WriteByte(o.data);
                break;
            case 'int32array': {
                buff.WriteInt16(o.data.length);
                for (let i = 0; i < o.data.length; i++) {
                    buff.WriteInt32(o.data[i]);
                }
                break;
            }
            case 'replayframes': {
                buff.WriteUInt16(o.data.length);
                for (let i = 0; i < o.data.length; i++) {
                    buff.WriteByte(o.data[i].buttonState)
                        .WriteByte(o.data[i].bt)
                        .WriteFloat(o.data[i].mouseX)
                        .WriteFloat(o.data[i].mouseY)
                        .WriteInt32(o.data[i].time);
                }
                break;
            }
            case 'scoreframe':
                buff.WriteInt32(o.data.time)
                    .WriteByte(o.data.id)
                    .WriteUInt16(o.data.count300)
                    .WriteUInt16(o.data.count100)
                    .WriteUInt16(o.data.count50)
                    .WriteUInt16(o.data.countGeki)
                    .WriteUInt16(o.data.countKatu)
                    .WriteUInt16(o.data.countMiss)
                    .WriteInt32(o.data.totalScore)
                    .WriteUInt16(o.data.maxCombo)
                    .WriteUInt16(o.data.currentCombo)
                    .WriteBoolean(o.data.perfect)
                    .WriteByte(o.data.currentHp)
                    .WriteByte(o.data.tagByte)
                    .WriteBoolean(o.data.usingScoreV2);
                if (o.data.usingScoreV2) {
                    buff.WriteDouble(o.data.comboPortion)
                        .WriteDouble(o.data.bonusPortion);
                }
                break;
            case 'multislots': {
                for (let a = 0; a < 16; a++) {
                    buff.WriteByte(o[a].status);
                }
                for (let b = 0; b < 16; b++) {
                    buff.WriteByte(o[b].team);
                }
                for (let c = 0; c < 16; c++) {
                    if ((o[c].status & (4 | 8 | 16 | 32 | 64)) > 0) {
                        buff.WriteInt32(o[c].playerId);
                    }
                }
                break;
            }
            /*
             * !!!!!!!!!!!!!!!!WARNING!!!!!!!!!!!!!!!!
             * This is only for multiplayer stuff, will break anything if you use it elsewhere
             */
            case 'multislotmods': {
                if ((o['specialModes'] & 1) > 0) {
                    for (let d = 0; d < 16; d++) {
                        buff.WriteUInt32(o[item.name][d].mods);
                    }
                }
                break;
            }
        }

        return buff.buffer;
    }

    /**
     * Reads a set of data from a buffer
     * @param {OsuBuffer} buff
     * @param {Object} layout
     * @return {Object|Array}
     */
    Read(buff, layout) {
        let data = {};
        switch (layout.type.toLowerCase()) {
            case 'int8':
                data = buff.ReadInt8();
                break;
            case 'uint8':
                data = buff.ReadUInt8();
                break;
            case 'int16':
                data = buff.ReadInt16();
                break;
            case 'uint16':
                data = buff.ReadUInt16();
                break;
            case 'int32':
                data = buff.ReadInt32();
                break;
            case 'uint32':
                data = buff.ReadUInt32();
                break;
            case 'int64':
                data = buff.ReadInt64();
                break;
            case 'uint64':
                data = buff.ReadUInt64();
                break;
            case 'string':
                data = buff.ReadOsuString();
                break;
            case 'float':
                data = buff.ReadFloat();
                break;
            case 'double':
                data = buff.ReadDouble();
                break;
            case 'boolean':
                data = buff.ReadBoolean();
                break;
            case 'byte':
                data = buff.ReadByte();
                break;
            case 'int32array': {
                let len = buff.ReadInt16();
                data = [];
                for (let i = 0; i < len; i++) {
                    data.push(buff.ReadInt32());
                }
                break;
            }
            case 'replayframes': {
                data = [];
                let len = buff.ReadUInt16();
                for (let i = 0; i < len; i++) {
                    data.push({
                        buttonState: buff.ReadByte(),
                        bt: buff.ReadByte(),
                        mouseX: buff.ReadFloat(),
                        mouseY: buff.ReadFloat(),
                        time: buff.ReadInt32()
                    });
                }
                break;
            }
            case 'scoreframe':
                data = {
                    time: buff.ReadInt32(),
                    id: buff.ReadByte(),
                    count300: buff.ReadUInt16(),
                    count100: buff.ReadUInt16(),
                    count50: buff.ReadUInt16(),
                    countGeki: buff.ReadUInt16(),
                    countKatu: buff.ReadUInt16(),
                    countMiss: buff.ReadUInt16(),
                    totalScore: buff.ReadInt32(),
                    maxCombo: buff.ReadUInt16(),
                    currentCombo: buff.ReadUInt16(),
                    perfect: buff.ReadBoolean(),
                    currentHp: buff.ReadByte(),
                    tagByte: buff.ReadByte(),
                    usingScoreV2: buff.ReadBoolean(),
                };
                data.comboPortion = data.usingScoreV2 ? buff.ReadDouble() : 0;
                data.bonusPortion = data.usingScoreV2 ? buff.ReadDouble() : 0;
                break;
        }
        return data;
    }

    /**
     * Unmarshal's the buffer from the layout
     * @param {OsuBuffer|Buffer} raw
     * @param {Array|Object|Null} layout
     * @return {Object|Null}
     */
    UnmarshalPacket(raw, layout = null) {
        if(!raw) {
            return null;
        }
        let buff = raw;
        if (raw instanceof Buffer) {
            buff = OsuBuffer.from(raw);
        }
        let data = {};
        if (layout instanceof Object) {
            data = this.Read(buff, layout);
        } else if (layout instanceof Array) {
            layout.forEach(item => {
                data[item.name] = this.Read(buff, item);
            });
        }
        return data;
    }

    /**
     * Marshal's a packet to a buffer from a layout
     * @param {Object|Number|String|Null} data
     * @param {Array|Object} layout
     * @return {Buffer}
     */
    MarshalPacket(data = null, layout = []) {
        let buff = new OsuBuffer();
        if (layout instanceof Array) {
            layout.forEach(item => {
                buff.WriteBuffer(this.Write({
                    data: data[item.name],
                    type: item.type,
                    nullable: item.nullable || false
                }));
            });
        } else if (layout instanceof Object) {
            buff.WriteBuffer(this.Write({
                data: data,
                type: layout.type,
                nullable: layout.nullable || false
            }));
        }

        return buff.buffer;
    }

    /**
     * Writes the packet to the buffer and returns self
     * @param packet
     * @return {Base}
     */
    WritePacket(packet) {
        this.buffer.WriteInt16(packet.id)
            .WriteBoolean(false)
            .WriteUInt32(packet.data.length)
            .WriteBuffer(packet.data);

        return this;
    }

    /**
     * Attempts to parse the whole buffer and returns an array of packets
     * @return {Array}
     */
    Parse() {
        let packets = [];
        let killed = false;
        while (!killed) {
            let id;
            let length;
            let raw;

            if (!this.buffer.canRead(7)) {
                break;
            }
            id = this.buffer.ReadInt16();
            this.buffer.ReadBoolean();
            length = this.buffer.ReadInt32();
            raw = this.buffer.Slice(length);
            if(typeof this[`Read${Packet.idToString[id]}`] !== "undefined") {
                try {
                    packets.push(this[`Read${Packet.idToString[id]}`](raw));
                } catch (e) {
                    // Some error ¯\_(ツ)_/¯
                }
            }
        }
        return packets;
    }

    /**
     * Returns a buffer
     * @return {Buffer}
     */
    get toBuffer() {
        return this.buffer.buffer;
    }
}

module.exports = Base;