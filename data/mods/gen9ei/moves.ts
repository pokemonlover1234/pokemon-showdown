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
overheat: {
		inherit: true,
		accuracy: 100,
},
dracometeor: {
		inherit: true,
		accuracy: 100,
},
psychoboost: {
		inherit: true,
		accuracy: 100,
},
fleurcannon: {
		inherit: true,
		accuracy: 100,
},
leafstorm: {
		inherit: true,
		accuracy: 100,
},
inferno: {
		inherit: true,
		basePower: 120,
},
megadrain: {
		inherit: true,
		accuracy: 60,
},
jawlock: {
		inherit: true,
		basePower: 90,
		type: "Fighting",
		onHit(target, source, move) {
			target.addVolatile('trapped', source, move, 'trapper');
		},
},
mistyexplosion: {
		inherit: true,
},
beatup: {
	inherit: false,
	num: 251,
	accuracy: 100,
	basePower: 25,
	target: "normal",
	type: "Dark",
	contestType: "Clever",
	category: "Physical",
	name: "Beat Up",
	pp: 10,
	priority: 0,
	flags: { protect: 1, mirror: 1, allyanim: 1, metronome: 1 },
	multihit: [2, 5],
},
covet: {
	inherit: true,
	type: "Fairy",
},
flash: {
	inherit: false,
	num: 148,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		isNonstandard: "Past",
		name: "Flash",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
	secondary: {
			chance: 50,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
},
rocksmash: {
	inherit: true,
	basePower: 60,
},
cut: {
	inherit: true,
	basePower: 75,
	type: "Steel",
	accuracy: 100,
	pp: 25,
},
razorshell: {
	inherit: false,
		num: 534,
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		name: "Razor Shell",
		pp: 10,
		priority: 0,
		critRatio: 2,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	kingsshield: {
		num: 588,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "King's Shield",
		pp: 10,
		priority: 4,
		flags: { noassist: 1, failcopycat: 1, failinstruct: 1 },
		stallingMove: true,
		volatileStatus: 'kingsshield',
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (this.checkMoveBypassesProtect(move, source, target, false)) return;
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (this.checkMoveMakesContact(move, source, target)) {
					this.boost({ atk: -1 }, source, target, this.dex.getActiveMove("King's Shield"));
				}
				return this.NOT_FAIL;
			},
		},
		target: "self",
		type: "Steel",
		zMove: { effect: 'clearnegativeboost' },
		contestType: "Cool",
	},
inferno: {
		inherit: true,
		basePower: 95,
},
shellsidearm: {
		inherit: true,
		basePower: 100,
	secondary: {
			chance: 10,
			status: 'psn',
		},
},
volttackle: {
		num: 344,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Volt Tackle",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		recoil: [25, 100],
		target: "normal",
		type: "Electric",
		contestType: "Cool",
},
geargrind: {
		inherit: true,
		basePower: 50,
		accuracy: 100,
},
	headcharge: {
		inherit: true,
		recoil: [0, 100],
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
},
	icehammer: {
		inherit: true,
		accuracy: 100,
		self: {
			boosts: {
				spe: -0,
			},
		},
},
lowsweep: {
		inherit: true,
		basePower: 60,
},
lusterpurge: {
		inherit: true,
		basePower: 85,
},
	mistball: {
		inherit: true,
		basePower: 85,
},
	snaptrap: {
		inherit: true,
		basePower: 100,
		accuracy: 85;
},
	mistball: {
		inherit: true,
		basePower: 85,
},
	thunderwave: {
		inherit: true,
		pp: 15,
},
	rocktomb: {
		inherit: true,
		accuracy: 100,
},
metalclaw: {
		inherit: true,
		accuracy: 100,
},
firefang: {
		inherit: true,
		accuracy: 100,
},
	icefang: {
		inherit: true,
		accuracy: 100,
},
	thunderfang: {
		inherit: true,
		accuracy: 100,
},
	mudshot: {
		inherit: true,
		accuracy: 100,
},
	hyperfang: {
		inherit: true,
		accuracy: 100,
},
	icywind: {
		inherit: true,
		accuracy: 100,
},
	electroweb: {
		inherit: true,
		accuracy: 100,
},
	snarl: {
		inherit: true,
		accuracy: 100,
},
	aircutter: {
		inherit: true,
		accuracy: 100,
},
	airslash: {
		inherit: true,
		accuracy: 100,
},
	glaciate: {
		inherit: true,
		accuracy: 100,
},
	lightofruin: {
		inherit: true,
		accuracy: 100,
},
	razorleaf: {
		inherit: true,
		accuracy: 100,
},
	rockthrow: {
		inherit: true,
		accuracy: 100,
},
	takedown: {
		inherit: true,
		accuracy: 100,
},
fakeout: {
		inherit: true,
		pp: 5,
},
featherdance: {
		inherit: true,
		pp: 5,
},
rockslide: {
		inherit: true,
		accuracy: 100,
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
},
stoneedge: {
		inherit: true,
		accuracy: 90,
},
triattack: {
		inherit: true,
		secondary: {
			chance: 20,
			onHit(target, source) {
				const status = this.sample(['brn', 'par', 'frostbite']);
				target.trySetStatus(status, source);
			},
		},
},
	aeroblast: {
		inherit: true,
		accuracy: 100,
},
	powerwhip: {
		inherit: true,
		accuracy: 90,
},
	hammerarm: {
		inherit: true,
		accuracy: 100,
},
	drillrun: {
		inherit: true,
		accuracy: 100,
},
	zenheadbutt: {
		inherit: true,
		accuracy: 100,
},
	steelbeam: {
		inherit: true,
		accuracy: 100,
},
	playrough: {
		inherit: true,
		accuracy: 100,
},
	highhorsepower: {
		inherit: true,
		accuracy: 100,
},
strangesteam: {
		inherit: true,
		accuracy: 100,
},
	crushclaw: {
		inherit: true,
		accuracy: 100,
},
	flyingpress: {
		inherit: true,
		accuracy: 100,
},
pinmissile: {
		inherit: true,
		accuracy: 100,
},
aquatail: {
		inherit: true,
		accuracy: 100,
},
	blazekick: {
		inherit: true,
		accuracy: 100,
},
circlethrow: {
		inherit: true,
		accuracy: 100,
},
dragontail: {
		inherit: true,
		accuracy: 100,
},
iciclecrash: {
		inherit: true,
		accuracy: 100,
},
rockblast: {
		inherit: true,
		accuracy: 100,
},
doublehit: {
		inherit: true,
		accuracy: 100,
},
	dualchop: {
		inherit: true,
		accuracy: 100,
},
	belch: {
		inherit: true,
		accuracy: 100,
},
	bonerush: {
		inherit: true,
		accuracy: 100,
		basePower: 25,
},
gigaimpact: {
		inherit: true,
		accuracy: 100,
},
	meteorbeam: {
		inherit: true,
		accuracy: 100,
},
	frostbreath: {
		inherit: false,
		num: 524,
		accuracy: 90,
		basePower: 60,
		category: "Special",
		name: "Frost Breath",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
		secondary: {
			chance: 30,
			status: 'frostbite',
		},
},
	scaleshot: {
		inherit: true,
		accuracy: 100,
},
	rockwrecker: {
		inherit: true,
		accuracy: 100,
},
	skyuppercut: {
		inherit: true,
		accuracy: 100,
},
	steelwing: {
		inherit: true,
		accuracy: 100,
},
	doubleslap: {
		inherit: true,
		accuracy: 100,
},
	furyattack: {
		inherit: true,
		basePower: 20,
		accuracy: 100,
},
swagger: {
		inherit: true,
		accuracy: 90,
},
furyswipes: {
		inherit: true,
		accuracy: 100,
},
submission: {
		inherit: true,
		accuracy: 100,
},
	flashcannon: {
		inherit: true,
		flags: { protect: 1, mirror: 1, metronome: 1, pulse: 1},
},
	pyroball: {
		inherit: true,
		flags: { protect: 1, mirror: 1, defrost: 1, bullet: 1, kick: 1 },
},
	stomp: {
		inherit: true,
		flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1, minimize: 1, kick: 1 },
},












	
};
