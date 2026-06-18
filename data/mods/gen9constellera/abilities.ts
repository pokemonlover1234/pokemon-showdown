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
			if (move.type === 'Grass' && source.hasType('Grass')) {
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
			if (move.type === 'Grass' && source.hasType('Grass')) {
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
			if (move.type === 'Fire' && source.hasType('Fire')) {
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
			if (move.type === 'Fire' && source.hasType('Fire')) {
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
			if (move.type === 'Water' && source.hasType('Water')) {
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
			if (move.type === 'Water' && source.hasType('Water')) {
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
			if (move.type === 'Bug' && source.hasType('Bug')) {
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
			if (move.type === 'Bug' && source.hasType('Bug')) {
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
			if (move.type === 'Electric' && source.hasType('Electric')) {
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
			if (move.type === 'Electric' && source.hasType('Electric')) {
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
			if (move.type === 'Dragon' && source.hasType('Dragon')) {
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
			if (move.type === 'Dragon' && source.hasType('Dragon')) {
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
			if (move.type === 'Rock' && source.hasType('Rock')) {
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
			if (move.type === 'Rock' && source.hasType('Rock')) {
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
			if (move.type === 'Steel' && source.hasType('Steel')) {
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
			if (move.type === 'Steel' && source.hasType('Steel')) {
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
};
