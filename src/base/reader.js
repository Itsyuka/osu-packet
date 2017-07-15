'use strict';
const OsuBuffer = require('osu-buffer');
const Packet = require('../packets');

class Reader {
    /**
     * @param {Buffer|OsuBuffer} input
     */
    constructor(input) {
        if(!input) throw new ReferenceError('The property input is not defined');
        this.buffer = OsuBuffer.from(input);
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
            if(typeof this[Packet.idToString[id]] !== "undefined") {
                try {
                    packets.push(this[Packet.idToString[id]](raw));
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

module.exports = Reader;