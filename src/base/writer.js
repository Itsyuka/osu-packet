'use strict';
const OsuBuffer = require('osu-buffer');

class Writer {
    /**
     * @param {Buffer|OsuBuffer|undefined} input
     */
    constructor(input) {
        this.buffer = OsuBuffer.from((input instanceof Buffer || input instanceof OsuBuffer) ? input : []);
    }

    /**
     * Writes a set of data to a buffer
     * @param {Object} o
     * @param {String} o.type
     * @param {Object|Array|String|Number|Boolean|Null} o.data
     * @param {Boolean?} o.nullable
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
                    buff.WriteByte(o.data[a].status);
                }
                for (let b = 0; b < 16; b++) {
                    buff.WriteByte(o.data[b].team);
                }
                for (let c = 0; c < 16; c++) {
                    if ((o.data[c].status & (4 | 8 | 16 | 32 | 64)) > 0) {
                        buff.WriteInt32(o.data[c].playerId);
                    }
                }
                break;
            }
            /*
             * !!!!!!!!!!!!!!!!WARNING!!!!!!!!!!!!!!!!
             * This is only for multiplayer stuff, will break anything if you use it elsewhere
             */
            case 'multislotmods': {
                if ((o.requires & 1) > 0) {
                    for (let i = 0; i < 16; i++) {
                        buff.WriteUInt32(o.data[i].mods);
                    }
                }
                break;
            }
        }

        return buff.buffer;
    }

    /**
     * Marshal's a packet to a buffer from a layout
     * @param {Object|Number|String|Boolean|Array|Null} data
     * @param {Array|Object} layout
     * @return {Buffer}
     */
    MarshalPacket(data = null, layout = []) {
        let buff = new OsuBuffer();
        if (layout instanceof Array) {
            layout.forEach(item => {
                buff.WriteBuffer(this.Write({
                    data: item.uses?data[item.uses]:data[item.name],
                    type: item.type,
                    nullable: item.nullable || false,
                    requires: item.requires?data[item.requires]:null,
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
     * @return {Writer}
     */
    WritePacket(packet) {
        this.buffer.WriteInt16(packet.id)
            .WriteBoolean(false)
            .WriteUInt32(packet.data.length)
            .WriteBuffer(packet.data);

        return this;
    }

    /**
     * Returns a buffer
     * @return {Buffer}
     */
    get toBuffer() {
        return this.buffer.buffer;
    }
}

module.exports = Writer;