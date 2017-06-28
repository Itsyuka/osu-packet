'use strict';
const OsuBuffer = require('osu-buffer');
const Packet = require('./packets');

class Base {
    constructor(input) {
        this.buffer = OsuBuffer.from((input instanceof Buffer) ? input : []);
    }

    UnmarshalPacket(raw, layout) {
        let data = {};
        layout.forEach(item => {
            switch (item.type.toLowerCase()) {
                case 'int8':
                    data[item.name] = raw.ReadInt8();
                    break;
                case 'uint8':
                    data[item.name] = raw.ReadUInt8();
                    break;
                case 'int16':
                    data[item.name] = raw.ReadInt16();
                    break;
                case 'uint16':
                    data[item.name] = raw.ReadUInt16();
                    break;
                case 'int32':
                    data[item.name] = raw.ReadInt32();
                    break;
                case 'uint32':
                    data[item.name] = raw.ReadUInt32();
                    break;
                case 'int64':
                    data[item.name] = raw.ReadInt64();
                    break;
                case 'uint64':
                    data[item.name] = raw.ReadUInt64();
                    break;
                case 'string':
                    data[item.name] = raw.ReadOsuString();
                    break;
                case 'float':
                    data[item.name] = raw.ReadFloat();
                    break;
                case 'double':
                    data[item.name] = raw.ReadDouble();
                    break;
                case 'boolean':
                    data[item.name] = raw.ReadBoolean();
                    break;
                case 'byte':
                    data[item.name] = raw.ReadByte();
                    break;
                case 'int32array':
                    data[item.name] = [];
                    for (let i = 0; i < raw.ReadInt16(); i++) {
                        data[item.name].push(raw.ReadInt32());
                    }
                    break;
                case 'replayframes':
                    data[item.name] = [];
                    let rLen = raw.ReadUInt16();
                    for (let r = 0; r < rLen; r++) {
                        data[item.name].push({
                            buttonState: raw.ReadByte(),
                            bt: raw.ReadByte(),
                            mouseX: raw.ReadFloat(),
                            mouseY: raw.ReadFloat(),
                            time: raw.ReadInt32()
                        });
                    }
                    break;
                case 'scoreframe':
                    data[item.name] = {
                        time: raw.ReadInt32(),
                        id: raw.ReadByte(),
                        count300: raw.ReadUInt16(),
                        count100: raw.ReadUInt16(),
                        count50: raw.ReadUInt16(),
                        countGeki: raw.ReadUInt16(),
                        countKatu: raw.ReadUInt16(),
                        countMiss: raw.ReadUInt16(),
                        totalScore: raw.ReadInt32(),
                        maxCombo: raw.ReadUInt16(),
                        currentCombo: raw.ReadUInt16(),
                        perfect: raw.ReadBoolean(),
                        currentHp: raw.ReadByte(),
                        tagByte: raw.ReadByte(),
                        usingScoreV2: raw.ReadBoolean(),
                    };
                    data[item.name].comboPortion = data[item.name].usingScoreV2 ? raw.ReadDouble() : 0;
                    data[item.name].bonusPortion = data[item.name].usingScoreV2 ? raw.ReadDouble() : 0;
                    break;
                case 'multislots':
                    data[item.name] = [];
                    for(let a = 0; a < 16; a++) {
                        data[item.name][a] = {};
                        data[item.name][a].status = raw.ReadByte();
                    }
                    for(let b = 0; b < 16; b++) {
                        data[item.name][b].team = raw.ReadByte();
                    }
                    for(let c = 0; c < 16; c++) {
                        data[item.name][c].playerId = (data[item.name][c].status & (4 | 8 | 16 | 32 | 64)) > 0 ?
                            raw.ReadInt32() : 0;
                    }
                    break;
                /*
                 * !!!!!!!!!!!!!!!!WARNING!!!!!!!!!!!!!!!!
                 * This is only for multiplayer stuff, will break anything if you use it elsewhere
                 */
                case 'multislotmods':
                    data[item.name] = [];
                    if((data['specialModes'] & 1) > 0) {
                        for(let d = 0; d < 16; d++) {
                            data[item.name][d].mods = raw.ReadUInt32();
                        }
                    }
                    break;
            }
        });

        return data;
    }

    MarshalPacket(data, layout) {
        let buff = new OsuBuffer();
        layout.forEach(item => {
            switch (item.type) {
                case 'int8':
                    buff.WriteInt8(data[item.name]);
                    break;
                case 'uint8':
                    buff.WriteUInt8(data[item.name]);
                    break;
                case 'int16':
                    buff.WriteInt16(data[item.name]);
                    break;
                case 'uint16':
                    buff.WriteUInt16(data[item.name]);
                    break;
                case 'int32':
                    buff.WriteInt32(data[item.name]);
                    break;
                case 'uint32':
                    buff.WriteUInt32(data[item.name]);
                    break;
                case 'int64':
                    buff.WriteInt64(data[item.name]);
                    break;
                case 'uint64':
                    buff.WriteUInt64(data[item.name]);
                    break;
                case 'string':
                    buff.WriteOsuString(data[item.name], item.nullable);
                    break;
                case 'float':
                    buff.WriteFloat(data[item.name]);
                    break;
                case 'double':
                    buff.WriteDouble(data[item.name]);
                    break;
                case 'boolean':
                    buff.WriteBoolean(data[item.name]);
                    break;
                case 'byte':
                    buff.WriteByte(data[item.name]);
                    break;
                case 'int32array':
                    buff.WriteInt16(item.data.length);
                    for(let a = 0; a < data[item.name].length; a++) {
                        buff.WriteInt32(data[item.name][a]);
                    }
                    break;
                case 'replayframes':
                    buff.WriteUInt16(data[item.name].length);
                    for(let r = 0; r < data[item.name].length; r++) {
                        buff.WriteByte(data[item.name][r].buttonState)
                            .WriteByte(data[item.name][r].bt)
                            .WriteFloat(data[item.name][r].mouseX)
                            .WriteFloat(data[item.name][r].mouseY)
                            .WriteInt32(data[item.name][r].time);
                    }
                    break;
                case 'scoreframe':
                    buff.WriteInt32(data[item.name].time)
                        .WriteByte(data[item.name].id)
                        .WriteUInt16(data[item.name].count300)
                        .WriteUInt16(data[item.name].count100)
                        .WriteUInt16(data[item.name].count50)
                        .WriteUInt16(data[item.name].countGeki)
                        .WriteUInt16(data[item.name].countKatu)
                        .WriteUInt16(data[item.name].countMiss)
                        .WriteInt32(data[item.name].totalScore)
                        .WriteUInt16(data[item.name].maxCombo)
                        .WriteUInt16(data[item.name].currentCombo)
                        .WriteBoolean(data[item.name].perfect)
                        .WriteByte(data[item.name].currentHp)
                        .WriteByte(data[item.name].tagByte)
                        .WriteBoolean(data[item.name].usingScoreV2);
                    if(data[item.name].usingScoreV2) {
                        buff.WriteDouble(data[item.name].comboPortion)
                            .WriteDouble(data[item.name].bonusPortion);
                    }
                    break;
                case 'multislots':
                    for(let a = 0; a < 16; a++) {
                        buff.WriteByte(data[item.name][a].status);
                    }
                    for(let b = 0; b < 16; b++) {
                        buff.WriteByte(data[item.name][b].team);
                    }
                    for(let c = 0; c < 16; c++) {
                        if((data[item.name][c].status & (4 | 8 | 16 | 32 | 64)) > 0) {
                            buff.WriteInt32(data[item.name][c].playerId);
                        }
                    }
                    break;
                /*
                 * !!!!!!!!!!!!!!!!WARNING!!!!!!!!!!!!!!!!
                 * This is only for multiplayer stuff, will break anything if you use it elsewhere
                 */
                case 'multislotmods':
                    if((data['specialModes'] & 1) > 0) {
                        for(let d = 0; d < 16; d++) {
                            buff.WriteUInt32(data[item.name][d].mods);
                        }
                    }
                    break;
            }
        });

        return buff.buffer;
    }

    WritePacket(packet) {
        this.buffer.WriteInt16(packet.id)
            .WriteBoolean(false)
            .WriteUInt32(packet.data.length)
            .WriteBuffer(packet.data);

        return this;
    }

    Parse() {
        let packets = [];
        while (true) {
            let id;
            let length;
            let raw;
            let data;

            if (!this.buffer.canRead(7)) {
                break;
            }
            id = this.buffer.ReadInt16();
            this.buffer.ReadBoolean();
            length = this.buffer.ReadInt32();
            raw = this.buffer.Slice(length);
            try {
                packets.push(this[`Read${Packet.idToString[id]}`](raw));
            } catch(e) {
                console.warn('Count not find the function', `Read${Packet.idToString[id]}()!`);
            }
        }

        return packets;
    }
}

module.exports = Base;