import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RoundSchema = new Schema({
  match: { type: Schema.Types.ObjectId, ref: 'Match' },
  number: Number,
  defenders: [{
    player: { type: Schema.Types.ObjectId, ref: 'Player' },
    perchIndex: Number,     // 0..4
    badgeValue: Number,     // -2, -1, +1, +2, +3
  }],
  throws: [{ type: Schema.Types.ObjectId, ref: 'Throw' }],
  scores: [{ team: { type: Schema.Types.ObjectId, ref: 'Team' }, points: Number }]
}, { timestamps: true });

export default mongoose.model('Round', RoundSchema);
