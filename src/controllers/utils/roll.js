import crypto from 'crypto';

// secure random int inclusive [min, max]
function randomIntInclusive(min, max) {
  return crypto.randomInt(min, max + 1);
}

export function rollD20(count = 1, modifier = 0, target = undefined) {
  if (count < 1 || count > 20) throw new Error('count must be 1..20');
  const rolls = [];
  for (let i = 0; i < count; i++) {
    rolls.push(randomIntInclusive(1, 20));
  }
  const subtotal = rolls.reduce((a, b) => a + b, 0);
  const total = subtotal + modifier;
  const success = (typeof target === 'number') ? (total >= target) : undefined;
  return { rolls, subtotal, modifier, total, success };
}

const result = contestedRoll(attacker.insight, defender.deception);
