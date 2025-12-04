import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  name: { type: String, required: true },
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  color: String,
}, { timestamps: true });

export default mongoose.model('Team', TeamSchema);
