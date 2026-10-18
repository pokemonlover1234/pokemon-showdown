export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen9',
	// Self destruct moves halve defense at this point.
			if (move.selfdestruct && defType === 'def') {
				defense = this.battle.clampIntRange(Math.floor(defense / 2), 1);
			}
      if (move.selfdestruct && defType === 'spD') {
				defense = this.battle.clampIntRange(Math.floor(spD / 2), 1);
			}
};
