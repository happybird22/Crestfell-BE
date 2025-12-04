function rollD20(modifier = 0) {
  const raw = Math.ceil(Math.random() * 20);
  return { raw, total: raw + modifier };
}

function contestedRoll(actorModifier, defenderModifier) {
  const actor = rollD20(actorModifier);
  const defender = rollD20(defenderModifier);

  return {
    actor,
    defender,
    winner: actor.total > defender.total ? "actor" : "defender"
  };
}
