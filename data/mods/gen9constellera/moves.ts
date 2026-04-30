export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	batonpass: {
		inherit: true,
		selfSwitch: true,
	},
	cometpunch: {
		inherit: true,
		accuracy: 90,
		basePower: 40,
		pp: 15,
		category: "Physical",
		isNonstandard: "Custom",
		multihit: 2,
		target: "normal",
		type: "Astral",
		desc: "Hits Twice",
	},
};
