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
		secondaries: [
			{
				chance: 18,
				status: 'frz',
			}, {
				chance: 17,
				volatileStatus: 'par',
			},
		],
	},
	iceburn: {
		inherit: true,
		secondaries: [
			{
				chance: 18,
				status: 'frostbite',
			}, {
				chance: 17,
				volatileStatus: 'brn',
			},
		],
	},
	glaciate: {
		inherit: true,
		accuracy: 90,
		basePower: 75,
		secondaries: [
			{
				chance: 15,
				status: 'frz',
			}, {
				chance: 14,
				volatileStatus: 'frostbite',
			},
		],
	},
	cryofreeze: {
		inherit: true,
		name: "Cryofreeze",
		accuracy: 85,
	},
	mountaingale: {
		inherit: true,
		secondary: {
			chance: 10,
			status: 'frz',
		},
	},
	rustyblade: {
		inherit: true,
		basePower: 65,
		name: "Rusty Blade"
	},
	gravbolt: {
		inherit: false,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Grav Bolt",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		onBasePower(basePower) {
			if (this.field.getPseudoWeather('gravity')) {
				return this.chainModify(1.5);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Electric",
	},
};
