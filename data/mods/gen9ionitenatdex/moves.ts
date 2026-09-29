export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	batonpass: {
		inherit: true,
		selfSwitch: true,
	},
	armorcannon: {
		inherit: true,
		flags: { protect: 1, mirror: 1, pulse: 1 },
	},
	relicsong: {
		inherit: true,
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
};
