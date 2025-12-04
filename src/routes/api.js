import express from 'express';
import { rollD20 } from '../utils/roll.js';

const router = express.Router();

// basic health + example
router.get('/health', (req, res) => res.json({ status: 'ok', time: Date.now() }));

// POST /api/roll
// body: { type: "d20", count: 1, modifier: 0 }
// returns: { rolls: [..], total, success: boolean (if target provided) }
router.post('/roll', (req, res) => {
  const { type = 'd20', count = 1, modifier = 0, target } = req.body;
  if (type !== 'd20') return res.status(400).json({ error: 'only d20 supported for now' });
  try {
    const result = rollD20(count, modifier, target);
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
