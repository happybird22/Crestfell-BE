import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ThrowSchema = new Schema({
  round: { type: Schema.Types.ObjectId, ref: 'Round' },
  attacker: { type: Schema.Types.ObjectId, ref: 'Player' },
  targetPerch: Number, // 0..4
  landedInCircle: Boolean,
  knockedOff: Boolean,
  distance: Number, // for tie-breaker
  rollDetail: {
    roll: Number,
    modifier: Number,
    total: Number,
    success: Boolean,
  }
}, { timestamps: true });

export default mongoose.model('Throw', ThrowSchema);
