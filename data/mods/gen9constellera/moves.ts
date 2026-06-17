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
	icebeam: {
		inherit: true,
		secondary: {
			chance: 10,
			status: 'frostbite',
		},
	},
	blizzard: {
		inherit: true,
		secondary: {
			chance: 10,
			status: 'frostbite',
		},
	},
	powdersnow: {
		inherit: true,
		secondary: {
			chance: 10,
			status: 'frostbite',
		},
	},
	freezeshock: {
		inherit: true,
		secondary: {
			chance: 30,
			onHit(target, source) {
				const status = this.sample(['par', 'frz']);
				target.trySetStatus(status, source);
			},
		},
	},
	iceburn: {
		inherit: true,
		secondary: {
			chance: 30,
			onHit(target, source) {
				const status = this.sample(['brn', 'frostbite']);
				target.trySetStatus(status, source);
			},
		},
	},
	glaciate: {
		inherit: true,
		secondary: {
			chance: 20,
			onHit(target, source) {
				const status = this.sample(['frz', 'frostbite']);
				target.trySetStatus(status, source);
			},
		},
	},
	cryofreeze: {
		inherit: true,
		accuracy: 75,
	},
	mountaingale: {
		inherit: true,
		secondary: {
			chance: 10,
			status: 'frz',
		},
	},

	
	
	
};
