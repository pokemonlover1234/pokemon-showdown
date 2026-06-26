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
	
	overgrow: {
		inherit: false,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hasType('Grass')) {
				this.debug('Overgrow 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Grass') {
				this.debug('Overgrow 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hasType('Grass')) {
				this.debug('Overgrow 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Grass') {
				this.debug('Overgrow 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Overgrow",
		rating: 2,
		num: 65,
	},
	blaze: {
		inherit: false,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hasType('Fire')) {
				this.debug('Blaze 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Fire') {
				this.debug('Blaze 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hasType('Fire')) {
				this.debug('Blaze 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Fire') {
				this.debug('Blaze 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Blaze",
		rating: 2,
		num: 66,
	},
	torrent: {
		inherit: false,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hasType('Water')) {
				this.debug('Torrent 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Water') {
				this.debug('Torrent 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hasType('Water')) {
				this.debug('Torrent 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Water') {
				this.debug('Torrent 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Torrent",
		rating: 2,
		num: 67,
	},
	swarm: {
		inherit: false,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hasType('Bug')) {
				this.debug('Swarm 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Bug') {
				this.debug('Swarm 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hasType('Bug')) {
				this.debug('Swarm 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Bug') {
				this.debug('Swarm 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Swarm",
		rating: 2,
		num: 68,
	},
	transistor: {
		inherit: false,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric' && attacker.hasType('Electric')) {
				this.debug('Transistor 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Electric') {
				this.debug('Transistor 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric' && attacker.hasType('Electric')) {
				this.debug('Transistor 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Electric') {
				this.debug('Transistor 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Transistor",
		rating: 2,
		num: 262,
	},
	dragonsmaw: {
		inherit: false,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dragon' && attacker.hasType('Dragon')) {
				this.debug('Dragon\'s Maw 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dragon' && attacker.hasType('Dragon')) {
				this.debug('Dragon\'s Maw 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Dragon\'s Maw",
		rating: 2,
		num: 263,
	},
	rockypayload: {
		inherit: false,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Rock' && attacker.hasType('Rock')) {
				this.debug('Rocky Payload 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Rock') {
				this.debug('Rocky Payload 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Rock' && attacker.hasType('Rock')) {
				this.debug('Rocky Payload 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Rock') {
				this.debug('Rocky Payload 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Rocky payload",
		rating: 2,
		num: 276,
	},
	steelworker: {
		inherit: false,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Steel' && attacker.hasType('Steel')) {
				this.debug('Steelworker 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Steel') {
				this.debug('Steelworker 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Steel' && attacker.hasType('Steel')) {
				this.debug('Steelworker 1.3 boost');
				return this.chainModify(1.3);
			}
			else if (move.type === 'Steel') {
				this.debug('Steelworker 1.5 boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Steelworker",
		rating: 2,
		num: 200,
	},
	hypercutter: {
		inherit: false,
		onTryBoost(boost, target, source, effect) {
			if (boost.atk && boost.atk < 0) {
				delete boost.atk;
				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "Attack", "[from] ability: Hyper Cutter", `[of] ${target}`);
				}
			}
		},
		flags: { breakable: 1 },
		name: "Hyper Cutter",
		rating: 1.5,
		num: 52,
	},
	tabletsofruin: {
		inherit: false,
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Tablets of Ruin');
		},
		onAnyModifyAtk(atk, source, target, move) {
			const abilityHolder = this.effectState.target;
			if (source.hasAbility('Tablets of Ruin')) return;
			if (source.hasAbility('Hyper Cutter')) return;
			if (!move.ruinedAtk) move.ruinedAtk = abilityHolder;
			if (move.ruinedAtk !== abilityHolder) return;
			this.debug('Tablets of Ruin Atk drop');
			return this.chainModify(0.75);
		},
		flags: {},
		name: "Tablets of Ruin",
		rating: 4.5,
		num: 284,
	},
	bigpecks: {
		inherit: false,
		onTryBoost(boost, target, source, effect) {
			if (boost.def && boost.def < 0) {
				delete boost.def;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", `[of] ${target}`);
				}
			}
		},
		flags: { breakable: 1 },
		name: "Big Pecks",
		rating: 0.5,
		num: 145,
	},
	swordofruin: {
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Sword of Ruin');
		},
		onAnyModifyDef(def, target, source, move) {
			const abilityHolder = this.effectState.target;
			if (target.hasAbility('Sword of Ruin')) return;
			if (target.hasAbility('Big Pecks')) return;
			if (!move.ruinedDef?.hasAbility('Sword of Ruin')) move.ruinedDef = abilityHolder;
			if (move.ruinedDef !== abilityHolder) return;
			this.debug('Sword of Ruin Def drop');
			return this.chainModify(0.75);
		},
		flags: {},
		name: "Sword of Ruin",
		rating: 4.5,
		num: 285,
	},
	runaway: {
		inherit: false,
		
		onTryBoost(boost, target, source, effect) {
			if (boost.spe && boost.spe < 0) {
				delete boost.spe;
				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "Speed", "[from] ability: Run Away", `[of] ${target}`);
				}
			}
		},
		onTrapPokemonPriority: -10,
		onTrapPokemon(pokemon) {
			pokemon.trapped = false;
		},
		onMaybeTrapPokemonPriority: -10,
		onMaybeTrapPokemon(pokemon) {
			pokemon.maybeTrapped = false;
		},
		flags: {breakable: 1},
		name: "Run Away",
		rating: 0,
		num: 50,
	},
	plus: {
		inherit: false,
		onModifySpAPriority: 5,
		//Modifies user's Sp.Atk by 1.5 if an ally has + or -
		onModifySpA(spa, pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		//Modifies a pokemon's Sp.Atk by 1.5 if they are a teammate, and possess + or -
		onAnyModifySpA(spa, source, target, move) {
			const abilityHolder = this.effectState.target; //???
			if (!source.isAlly(target)) return; //Not a teammate. Exit
			if (!source.hasAbility('Plus') && !source.hasAbility('Minus')) return; //No + or -. Exit
			if (!move.ruinedSpA) move.ruinedSpA = abilityHolder; //???
			if (move.ruinedSpA !== abilityHolder) return; //???
			this.debug('Plus Sp.Atk Increase');
			return this.chainModify(1.5);
		},
		flags: {},
		name: "Plus",
		rating: 0,
		num: 57,
	},
	minus: {
		inherit: false,
		onModifySpDPriority: 5,
		//Modifies user's Sp.Atk by 1.5 if an ally has + or -
		onModifySpD(spd, pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		//Modifies a pokemon's Sp.Atk by 1.5 if they are a teammate, and possess + or -
		onAnyModifySpD(spd, source, target, move) {
			const abilityHolder = this.effectState.target; //???
			if (!source.isAlly(target)) return; //Not a teammate. Exit
			if (!source.hasAbility('Plus') && !source.hasAbility('Minus')) return; //No + or -. Exit
			if (!move.ruinedSpD) move.ruinedSpD = abilityHolder; //??????
			if (move.ruinedSpD !== abilityHolder) return; //?????????????????????
			this.debug('Minus Sp.Def Increase');
			return this.chainModify(1.5);
		},
		flags: {},
		name: "Minus",
		rating: 0,
		num: 58,
	},
	forewarn: {
		inherit: false,
		onStart(pokemon) {
			let warnMoves: (Move | Pokemon)[][] = [];
			let warnBp = 1;
			let defboost = 0;
			for (const target of pokemon.foes()) {
				for (const moveSlot of target.moveSlots) {
					const move = this.dex.moves.get(moveSlot.move);
					let bp = move.basePower;
					if (move.ohko) bp = 150;
					if (move.id === 'counter' || move.id === 'metalburst' || move.id === 'mirrorcoat') bp = 120;
					if (bp === 1) bp = 80;
					if (!bp && move.category !== 'Status') bp = 80;
					if (bp > warnBp) { //If current move is stronger than record high
						if (move.category === 'Physical') {
							defboost = 1;
						}
						if (move.category === 'Special') {
							defboost = 0;
						}
						warnMoves = [[move, target]];
						warnBp = bp;
					} else if (bp === warnBp) {
						warnMoves.push([move, target]);
					}
				}
			}
			if (!warnMoves.length) return;
			const [warnMoveName, warnTarget] = this.sample(warnMoves);
			this.add('-activate', pokemon, 'ability: Forewarn', warnMoveName, `[of] ${warnTarget}`);
			if (defboost) {
				this.boost({ def: 1 })
			}
			else {
				this.boost({ spd: 1})
			}
		},
		flags: {},
		name: "Forewarn",
		rating: 0.5,
		num: 108,
	},
};
