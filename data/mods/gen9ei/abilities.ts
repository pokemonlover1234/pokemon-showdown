export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	
	watercompaction: {
    inherit: false,
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Water') {
				this.boost({ def: 2 });
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Water Compaction Atk weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				this.debug('Water Compaction SpA weaken');
				return this.chainModify(0.5);
			}
		},
		flags: { breakable: 1 },
		name: "Well-Baked Body",
		rating: 3.5,
    num: 195
	},
	ironfist: {
		inherit: false,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				this.debug('Iron Fist boost');
				return this.chainModify([5325, 4096]);
			}
		},
		flags: {},
		name: "Iron Fist",
		rating: 1.5,
		num: 89,
	},
	defeatist: {
		inherit: false,
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 3) {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 3) {
				return this.chainModify(0.5);
			}
		},
		flags: {},
		name: "Defeatist",
		rating: 1.5,
		num: 129,
	},
	flowergift: {
		inherit: false,
		onSwitchInPriority: -2,
		onStart(pokemon) {
			this.singleEvent('WeatherChange', this.effect, this.effectState, pokemon);
		},
		onWeatherChange(pokemon) {
			if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Cherrim' || pokemon.transformed) return;
			if (!pokemon.hp) return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				if (pokemon.species.id !== 'cherrimsunshine') {
					pokemon.formeChange('Cherrim-Sunshine', this.effect, false, '0', '[msg]');
				}
			} else {
				if (pokemon.species.id === 'cherrimsunshine') {
					pokemon.formeChange('Cherrim', this.effect, false, '0', '[msg]');
				}
			}
		},
		onAllyModifyAtkPriority: 3,
		onAllyModifyAtk(atk, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onAllyModifySpePriority: 4,
		onAllyModifySpe(spe, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, breakable: 1 },
		name: "Flower Gift",
		rating: 1.5,
		num: 122,
	},
	quickfeet: {
		inherit: false,
		onModifySpe(spe, pokemon) {
			if (pokemon.status) {
				return this.chainModify(2);
			}
		},
		flags: {},
		name: "Quick Feet",
		rating: 1.5,
		num: 95,
	},
	liquidvoice: {
		inherit: false,
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			if (move.flags['sound'] && !pokemon.volatiles['dynamax']) { // hardcode
				move.type = 'Water';
			}
		},
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Punk Rock boost');
				return this.chainModify([4915, 4096]);
			}
		},
		flags: {},
		name: "Liquid Voice",
		rating: 1.5,
		num: 204,
	},
	icebody: {
		inherit: false,
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('frostbite', target);
				}
			}
		},
		flags: {},
		name: "Ice Body",
		rating: 1.5,
		num: 115,
	},
	illuminate: {
		inherit: true,
		
		flags: {},
		name: "Illuminate",
		rating: 1.5,
		num: 35,
	},
	flareboost: {
		inherit: false,
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.status === 'brn') {
				return this.chainModify(1.5);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'brn') {
				return false;
			}
		},
		flags: {},
		name: "Flare Boost",
		rating: 1.5,
		num: 138,
	},
	toxicboost: {
		inherit: false,
		onBasePower(basePower, attacker, defender, move) {
			if ((attacker.status === 'psn' || attacker.status === 'tox')) {
				return this.chainModify(1.5);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				return false;
			}
		},
		flags: {},
		name: "Toxic Boost",
		rating: 1.5,
		num: 137,
	},
	corrosion: {
		inherit: true,
		onEffectiveness(typeMod, target, type, move) {
			if (move.type !== 'Poison') return;
			if (!target) return; // avoid crashing when called from a chat plugin
			// ignore effectiveness if the target is Steel type and immune to Poison
			if (!target.runImmunity('Poison')) {
				if (target.hasType('Steel')) return 0;
			}
		},
		flags: {},
		name: "",
		rating: 1.5,
		num: 212,
	},
	protean: {
		inherit: false,
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.flags['futuremove'] || move.sourceEffect === 'snatch' || move.callsMove) return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.effectState.protean = true;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
		flags: {},
		name: "Protean",
		rating: 1.5,
		num: 168,
	},
	illusion: {
		inherit: true,
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.illusion) {
				return this.chainModify(1.3);
			}
		},
		flags: {},
		name: "Illusion",
		rating: 1.5,
		num: 149,
	},
};
