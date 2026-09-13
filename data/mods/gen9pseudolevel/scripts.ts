export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen9',
	endTurn() {
		if (this.dynamicScripts?.endTurn) {
			return this.dynamicScripts.endTurn.call(this);
		}
		return this.constructor.prototype.endTurn.call(this);
	},
	pokemon: {
		getAbility() {
			if (this.battle.dynamicScripts?.pokemon?.getAbility) {
				return this.battle.dynamicScripts?.pokemon?.getAbility.call(this);
			}
			return this.constructor.prototype.getAbility.call(this);
		},
		transformInto(pokemon, effect) {
			if (this.battle.dynamicScripts?.pokemon?.transformInto) {
				return this.battle.dynamicScripts?.pokemon?.transformInto.call(this, pokemon, effect);
			}
			return this.constructor.prototype.transformInto.call(this, pokemon, effect);
		},
	},
};
