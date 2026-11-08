// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	// Ionite Metas
	////////////////////////////////////////////////////////////////////
	{
		section: "Ionite Metagames",
		column: 1,
	},
	{
		name: "[Gen 9] Ionite Natdex Singles",
		mod: "gen9ionitenatdex",
		ruleset: ["Standard"],
	},
	{
		name: "[Gen 9] Ionite Natdex Doubles",
		mod: "gen9ionitenatdex",
		ruleset: ["Standard"],
		gameType: 'doubles',
	},
	{
		name: "[Gen 9] Ionite Natdex  BSS",
		mod: "gen9ionitenatdex",
		bestOfDefault: true,
		ruleset: ["Open Team Sheets", "Picked Team Size = 3", "Max Team Size = 6", "Standard"],
	},
	{
		name: "[Gen 9] Ionite Natdex VGC",
		mod: "gen9ionitenatdex",
		bestOfDefault: true,
		ruleset: ["Open Team Sheets", "Picked Team Size = 4", "Max Team Size = 6", "Standard"],
		gameType: 'doubles',
	},
	{
		name: "[Gen 9] Ionite Natdex Triples",
		mod: "gen9ionitenatdex",
		ruleset: ["Standard"],
		gameType: 'triples',
	},
	{
		name: "[Gen 9] Ionite Natdex 2v2 Doubles",
		mod: "gen9ionitenatdex",
		ruleset: ["Picked Team Size = 2", "Max Team Size = 4", "Standard"],
		gameType: 'doubles',
	},
	// Psuedo Level Metagames PLM
	///////////////////////////////////////////////////////////////////
	{
		section: "Psuedo Level Metagames",
		column: 1,
	},
	{
		name: "[Gen 9] Pseudo Level Singles",
		mod: "gen9pseudolevel",
		ruleset: ["Standard"],
		banlist: ['Eviolite'],
	},
	{
		name: "[Gen 9] Pseudo Level Doubles",
		mod: "gen9pseudolevel",
		ruleset: ["Standard"],
		banlist: ['Eviolite'],
		gameType: 'doubles',
	},
	{
		name: "[Gen 9] Pseudo Level BSS",
		mod: "gen9pseudolevel",
		bestOfDefault: true,
		banlist: ['Eviolite'],
		ruleset: ["Open Team Sheets", "Picked Team Size = 3", "Max Team Size = 6", "Standard"],
	},
	{
		name: "[Gen 9] Pseudo Level VGC",
		mod: "gen9pseudolevel",
		bestOfDefault: true,
		banlist: ['Eviolite'],
		ruleset: ["Open Team Sheets", "Picked Team Size = 4", "Max Team Size = 6", "Standard"],
		gameType: 'doubles',
	},
	{
		name: "[Gen 9] Pseudo Level Triples",
		mod: "gen9pseudolevel",
		ruleset: ["Standard"],
		banlist: ['Eviolite'],
		gameType: 'triples',
	},
	{
		name: "[Gen 9] Pseudo Level 2v2 Doubles",
		mod: "gen9pseudolevel",
		banlist: ['Eviolite'],
		ruleset: ["Picked Team Size = 2", "Max Team Size = 4", "Standard"],
		gameType: 'doubles',
	},
	{
		name: "[Gen 9] Pseudo Level The Card Game",
		desc: `The type chart is simplified based off of the Pok&eacute;mon Trading Card Game.`,
		mod: 'gen9pseudolevel',
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Terastal Clause'],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Last Respects', 'Shed Tail', 'Eviolite',
		],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.hpType = pokemon.hpType.replace(/(Ghost|Fairy)/g, 'Psychic')
					.replace(/Bug/g, 'Grass')
					.replace(/Ice/g, 'Water')
					.replace(/(Rock|Ground)/g, 'Fighting')
					.replace(/Flying/g, 'Normal')
					.replace(/Poison/g, 'Dark');
				pokemon.teraType = pokemon.teraType.replace(/(Ghost|Fairy)/g, 'Psychic')
					.replace(/Bug/g, 'Grass')
					.replace(/Ice/g, 'Water')
					.replace(/(Rock|Ground)/g, 'Fighting')
					.replace(/Flying/g, 'Normal')
					.replace(/Poison/g, 'Dark');
			}
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			pokemon.apparentType = pokemon.getTypes(true).join('/');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			pokemon.apparentType = pokemon.getTypes(true).join('/');
		},
	},
	{
		name: "[Gen 9] Pseudo Level Linked",
		desc: `The first two moves in a Pok&eacute;mon's moveset are used simultaneously.`,
		mod: "gen9pseudolevel",
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Evasion Clause', 'Terastal Clause'],
		banlist: [
			'Arena Trap', 'Chlorophyll', 'Drought', 'Electric Surge', 'Moody',
			'Sand Rush', 'Serene Grace', 'Shadow Tag', 'Slush Rush', 'Speed Boost', 'Swift Swim', 'Unburden', 'Booster Energy', 'King\'s Rock', 'Quick Claw', 'Razor Fang',
			'Baton Pass', 'Last Respects', 'Shed Tail', 'Eviolite',
		],
		restricted: [
			'Assurance', 'Baneful Bunker', 'Bounce', 'Burning Bulwark', 'Copycat', 'Detect', 'Dig', 'Dive', 'Encore', 'Endeavor', 'Fake Out', 'Fly', 'Imprison', 'Nasty Plot',
			'Phantom Force', 'Protect', 'Ruination', 'Shadow Force', 'Shell Smash', 'Silk Trap', 'Spiky Shield', 'Sunny Day', 'Super Fang', 'Swords Dance', 'Taunt', 'Trick Room',
		],
		onValidateSet(set) {
			const problems = [];
			for (const [i, moveid] of set.moves.entries()) {
				const move = this.dex.moves.get(moveid);
				if ([0, 1].includes(i) && this.ruleTable.isRestricted(`move:${move.id}`)) {
					problems.push(`${set.name || set.species}'s move ${move.name} cannot be linked.`);
				}
			}
			return problems;
		},
	},
	{
		name: "[Gen 9] Pseudo Level Trademarked",
		desc: `Sacrifice your Pok&eacute;mon's ability for a status move that activates on switch-in.`,
		mod: 'gen9pseudolevel',
		ruleset: ['Standard OMs', 'Sleep Moves Clause', "Allow Tradeback"],
		banlist: [
			'Arena Trap', 'Moody', 'Shadow Tag', 'Light Clay', 'Baton Pass', 'Last Respects', 'Eviolite', 'Revival Blessing', 'Shed Tail',
		],
		restricted: [
			'Agility', 'Baneful Bunker', 'Belly Drum', 'Block', 'Burning Bulwark', 'Chilly Reception', 'Confuse Ray', 'Copycat', 'Dragon Dance', 'Detect', 'Destiny Bond',
			'Endure', 'Encore', 'Fairy Lock', 'Flatter', 'Focus Energy', 'Glare', 'Heal Bell', 'Ingrain', 'Instruct', 'Mean Look', 'move:Metronome', 'Nasty Plot', 'Parting Shot',
			'Poison Gas', 'Poison Powder', 'Protect', 'Roar', 'Silk Trap', 'Spiky Shield', 'Sleep Talk', 'Shell Smash', 'Stun Spore', 'Substitute', 'Supersonic', 'Swagger',
			'Sweet Kiss', 'Switcheroo', 'Swords Dance', 'Tail Glow', 'Tailwind', 'Taunt', 'Teeter Dance', 'Teleport', 'Thunder Wave', 'Toxic', 'Toxic Thread', 'Trick',
			'Trick Room', 'Will-O-Wisp', 'Wish', 'Whirlwind',
		],
		onValidateTeam(team, format, teamHas) {
			const problems = [];
			if (!teamHas.trademarks) return;
			for (const trademark of teamHas.trademarks.keys()) {
				if (teamHas.trademarks.get(trademark) > 1) {
					problems.push(`You are limited to 1 of each Trademark.`, `(You have ${teamHas.trademarks.get(trademark)} Pok\u00e9mon with ${trademark} as a Trademark.)`);
				}
			}
			return problems;
		},
		validateSet(set, teamHas) {
			const dex = this.dex;
			const ability = dex.moves.get(set.ability);
			if (!ability.exists) { // Not even a real move
				return this.validateSet(set, teamHas);
			}
			// Absolute trademark bans
			if (ability.category !== 'Status') {
				return [`${ability.name} is not a status move and cannot be used as a trademark.`];
			}
			// Contingent trademark bans
			if (this.ruleTable.isRestricted(`move:${ability.id}`)) {
				return [`${ability.name} is restricted from being used as a trademark.`];
			}
			if (set.moves.map(this.toID).includes(ability.id)) {
				return [`${set.name} may not use ${ability.name} as both a trademark and one of its moves simultaneously.`];
			}
			const customRules = this.format.customRules || [];
			if (!customRules.includes('!obtainableabilities')) customRules.push('!obtainableabilities');
			if (!customRules.includes('+noability')) customRules.push('+noability');

			const TeamValidator: typeof import('../sim/team-validator').TeamValidator =
				require('../sim/team-validator').TeamValidator;

			const validator = new TeamValidator(dex.formats.get(`${this.format.id}@@@${customRules.join(',')}`));
			const moves = set.moves;
			set.moves = [ability.id];
			set.ability = 'No Ability';
			let problems = validator.validateSet(set, {}) || [];
			if (problems.length) return problems;
			set.moves = moves;
			set.ability = 'No Ability';
			problems = problems.concat(validator.validateSet(set, teamHas) || []);
			set.ability = ability.id;
			if (!teamHas.trademarks) teamHas.trademarks = new this.dex.Multiset<string>();
			teamHas.trademarks.add(ability.name);
			return problems.length ? problems : null;
		},
	},

	// Constellera Metas
	///////////////////////////////////////////////////////////////////
	{
		section: "Constellera Metas",
		column: 1,
	},
	{
		name: "[Gen 9] Constellera",
		mod: "gen9constellera",
		ruleset: ["Standard"],
		debug: true,
	},
	{
		name: "[Gen 9] Constellera Doubles",
		mod: "gen9constellera",
		ruleset: ["Standard"],
		gameType: 'doubles',
	},
	{
		name: "[Gen 9] Constellera LC",
		mod: "gen9constellera",
		ruleset: ["Standard", "Little Cup"],
	},

	// Chimeramon Metas
	///////////////////////////////////////////////////////////////////
	{
		section: "Chimeramon Metas",
		column: 1,
	},
	{
		name: "[Gen 9] Chimeramons Singles",
		mod: "gen9chimeramons",
		ruleset: ["Standard", "Terastal Clause"],
	},
	{
		name: "[Gen 9] Chimeramons Doubles",
		mod: "gen9chimeramons",
		ruleset: ["Standard", "Terastal Clause"],
		gameType: "doubles",
	},

	// Little Giants
	///////////////////////////////////////////////////////////////////
	{
		section: "Little Giants",
		column: 1,
	},
	{
		name: "[Gen 9] Little Giants Singles",
		mod: "gen9ionitelc",
		ruleset: ["Standard", "-Mega"],
	},
	{
		name: "[Gen 9] Little Giants Doubles",
		mod: "gen9ionitelc",
		ruleset: ["Standard", "-Mega"],
		gameType: "doubles",
	},
	{
		name: "[Gen 9] Little Giants BSS",
		mod: "gen9ionitelc",
		bestOfDefault: true,
		ruleset: ["Open Team Sheets", "Picked Team Size = 3", "Max Team Size = 6", "Standard", "-Mega"],
	},
	{
		name: "[Gen 9] Little Giants VGC",
		mod: "gen9ionitelc",
		bestOfDefault: true,
		ruleset: ["Open Team Sheets", "Picked Team Size = 4", "Max Team Size = 6", "Standard", "-Mega"],
		gameType: 'doubles',
	},
	{
		name: "[Gen 9] Little Giants Triples",
		mod: "gen9ionitelc",
		ruleset: ["Standard", "-Mega"],
		gameType: 'triples',
	},
	{
		name: "[Gen 9] Little Giants Triples VGC",
		mod: "gen9ionitelc",
		ruleset: ["Open Team Sheets", "Picked Team Size = 3", "Max Team Size = 6", "Standard", "-Mega"],
		gameType: 'triples',
		bestOfDefault: true,
	},
	{
		name: "[Gen 9] Little Giants Triples VGC Plus",
		mod: "gen9ionitelc",
		ruleset: ["Open Team Sheets", "Picked Team Size = 4", "Max Team Size = 8", "Standard", "-Mega"],
		gameType: 'triples',
		bestOfDefault: true,
	},
	{
		name: "[Gen 9] Little Giants Custom Game",
		mod: 'gen9ionitelc',
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', '-Mega'],
	},

	// Fight Club Metas
	///////////////////////////////////////////////////////////////////
	{
		section: "Fight Club",
		column: 1,
	},
	{
		name: "[Gen 9] Fight Club",
		mod: "gen9fightclub",
		ruleset: ["Standard"],
		debug: true,
	},
	{
		name: "[Gen 9] Fight Club Doubles",
		mod: "gen9fightclub",
		ruleset: ["Standard"],
		gameType: 'doubles',
	},

	// Emerald Imperium
	///////////////////////////////////////////////////////////////////
	{
		section: "Emerald Imperium",
		column: 1,
	},
	{
		name: "[Gen 9] Emerald Imperium Singles",
		mod: "gen9ei",
		ruleset: ["Standard"],
		debug: true,
	},
	{
		name: "[Gen 9] Emerald Imperium Doubles",
		mod: "gen9ei",
		ruleset: ["Standard"],
		gameType: 'doubles',
	},
];
