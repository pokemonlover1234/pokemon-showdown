export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	watercompaction: {
    inherit: false,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({ def: 2 })) {
					this.add('-immune', target, '[from] ability: Well-Baked Body');
				}
				return null;
			}
		},
		flags: { breakable: 1 },
		name: "Well-Baked Body",
		rating: 3.5,
    num: 195
	},
};
