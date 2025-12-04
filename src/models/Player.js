import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String }, // e.g., "athlete", maybe position
  stats: {
    STR: Number,
    DEX: Number,
    WIS: Number,
    CHA: Number,
    CON: Number,
  },
  // other props: avatar, skill proficiencies
}, { timestamps: true });

export default mongoose.model('Player', PlayerSchema);
