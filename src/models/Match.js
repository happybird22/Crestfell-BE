import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
  teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }], // length 2
  rounds: [{ type: Schema.Types.ObjectId, ref: 'Round' }],
  winner: { type: Schema.Types.ObjectId, ref: 'Team' },
  status: { type: String, default: 'pending' },
}, { timestamps: true });

export default mongoose.model('Match', MatchSchema);
