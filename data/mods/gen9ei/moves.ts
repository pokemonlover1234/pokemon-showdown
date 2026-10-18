export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {

  shadowpunch: {
		inherit: true,
		basePower: 80,
  },
  steameruption: {
		inherit: true,
		basePower: 120,
    accuracy: 100,
  },
  muddywater: {
		inherit: true,
    basePower: 95,
		secondary: {
			chance: 40,
			boosts: {
				atk: -1,
			},
		},
  },
chatter: {
		inherit: true,
		basePower: 80,
  },
  lovelykiss: {
		inherit: true,
		accuracy: 85,
  },
  triplekick: {
		inherit: true,
		basePower: 20,
  },
  chargebeam: {
		inherit: true,
		accuracy: 100,
    secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
  },
selfdestruct: {
		inherit: true,
		basePower: 100,
  },
explosion: {
		inherit: true,
		basePower: 150,
  },
headsmash: {
		inherit: true,
		accuracy: 85,
  },
poisonfang: {
		inherit: true,
    basePower: 75,
		accuracy: 100,
    secondary: {
			chance: 30,
			status: 'tox',
		},
  },
diamondstorm: {
		inherit: true,
    category: "Special",
		accuracy: 100,
    self: {
			chance: 50,
			boosts: {
				def: 1,
			},
		},
  },
tailslap: {
		inherit: true,
		accuracy: 100,
  },
fly: {
		inherit: true,
		accuracy: 100,
    pp: 10,
  },
shadowclaw: {
		inherit: true,
		basePower: 80,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1},
  },
attackorder: {
		inherit: true,
		basePower: 120,
  },
attackorder: {
		inherit: true,
		accuracy: 80,
  },
armthrust: {
		inherit: true,
		accuracy: 25,
  },
parabolicharge: {
		inherit: true,
		basePower: 75,
  },
snipeshot: {
		inherit: true,
		basePower: 70,
    critRatio: 3,
  },
  octazooka: {
    inherit: false,
		num: 190,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Past",
		name: "Octazooka",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
















  
};
