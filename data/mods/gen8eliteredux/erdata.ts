import { Pokedex as VanillaDex } from "../../pokedex";
import { fromJson } from "@bufbuild/protobuf";
import { SpeciesListSchema, EggGroup, BodyColor } from "./er-proto/SpeciesList_pb";
import { SpeciesEnum } from "./er-proto/SpeciesEnum_pb";
import { AbilityEnum } from "./er-proto/AbilityEnum_pb";
import { ItemEnum } from "./er-proto/ItemEnum_pb";
import { MoveEnum } from "./er-proto/MoveEnum_pb";
import { Type } from "./er-proto/Types_pb";
import { toID } from "../../../sim/dex-data";
import type { ID } from "smogon";
import speciesData from "./er-json/SpeciesList.json";

const speciesList = fromJson(SpeciesListSchema, speciesData);

// The following functions convert the data in the er-config repo to
// the format usable by showdown during build-time.

// Helpers

// Convert the name of an enum value from the ER types to a showdown ID
function erEnumToShowdownId(enumId: string, cutoff: number): ID {
	return toID(enumId.substring(cutoff).replace(/_/g, ""));
}

// Mainly used for things like type names
function capitalizeFirstLetter(str: string): string {
	if (!str) return str;
	return str.charAt(0).toUpperCase() + str.substring(1);
}

// Handle some differences between the egg group names in ER vs showdown
function eggGroupToShowdown(enumId: string): string {
	if (enumId === "EGG_GROUP_NONE") return "";
	if (enumId === "HUMAN_LIKE") return "Human-Like";
	return capitalizeFirstLetter(enumId.toLowerCase().replace(/_/g, " "));
}

// Converters

export function formatsdata() {
	const gennedTable: any = {};
	for (const species of speciesList.species) {
		const pokemon = erEnumToShowdownId(SpeciesEnum[species.id], 8);
		gennedTable[pokemon] = {
			inherit: false,
			tier: "ZU",
			doublesTier: "ZU",
			natDexTier: "ZU",
		};
	}
	for (const pokemon of Object.keys(VanillaDex)) {
		try {
			if (!(pokemon in gennedTable)) {
				gennedTable[pokemon] = {
					inherit: false,
					tier: "Illegal",
					doublesTier: "Illegal",
					natDexTier: "Illegal",
				};
			}
		} catch (err: any) {
			console.log(pokemon + " Caused Error: " + err);
		}
	}
	return gennedTable;
}

export function learnsets() {
	const gennedTable: any = {};

	const delayedExpansion: any = {}; // Just in case we have a "usesLearnset" but haven't enumerated the target yet.

	for (const species of speciesList.species) {
		const pokemon = erEnumToShowdownId(SpeciesEnum[species.id], 8);
		try {
			const learnset: any = {};

			if (species.learnsetOrRef.case === "usesLearnset") {
				const refId = erEnumToShowdownId(SpeciesEnum[species.learnsetOrRef.value], 8);
				if (refId in gennedTable) {
					gennedTable[pokemon] = {
						inherit: false,
						learnset: gennedTable[refId].learnset,
					};
				} else {
					delayedExpansion[pokemon] = refId;
				}
			} else if (species.learnsetOrRef.case === "learnset") {
				const lset = species.learnsetOrRef.value;
				// Assume source of all moves is gen 8 to avoid showdown being weird about move gens.
				for (const lsetLvl of lset.level) {
					const lvl = lsetLvl.level;
					for (const move of lsetLvl.move) {
						const moveId = erEnumToShowdownId(MoveEnum[move], 5);
						if (moveId in learnset) {
							learnset[move].push("8L" + lvl.toString());
						} else {
							learnset[move] = ["8L" + lvl.toString()];
						}
					}
				}
				for (const move of lset.tutor) {
					const moveId = erEnumToShowdownId(MoveEnum[move], 5);
					if (moveId in learnset) {
						learnset[move].push("8T");
					} else {
						learnset[move] = ["8T"];
					}
				}
				gennedTable[pokemon] = {
					inherit: false,
					learnset,
				};
			}
		} catch (err: any) {
			console.log(pokemon + " Caused Error: " + err);
		}
	}

	for (const pokemon in delayedExpansion) {
		const refId = delayedExpansion[pokemon];
		if (!(refId in gennedTable)) {
			console.log("Warning: " + pokemon + " uses learnset of " + refId + " but target learnset not found.");
			continue;
		}
		gennedTable[pokemon] = {
			inherit: false,
			learnset: gennedTable[refId].learnset,
		};
	}

	return gennedTable;
}

export function pokedex() {
	const gennedTable: any = {};
	const prevoMap: any = {};
	for (const species of speciesList.species) {
		for (const evo of species.evo) {
			const evoId = erEnumToShowdownId(SpeciesEnum[evo.to], 8);
			const prevoId = erEnumToShowdownId(SpeciesEnum[species.id], 8);
			if (evoId in prevoMap) {
				console.log("Warning: " + evoId + " has multiple prevolutions. The latest was taken." + prevoMap[evoId] + " -> " + prevoId);
			}
			prevoMap[evoId] = prevoId;
		}
	}

	for (const species of speciesList.species) {
		const pokemon = erEnumToShowdownId(SpeciesEnum[species.id], 8);
		try {
			const dex = species.baseSpeciesInfo;

			const types = [capitalizeFirstLetter(erEnumToShowdownId(Type[species.type], 5))];
			if ("type2" in species) {
				types.push(capitalizeFirstLetter(erEnumToShowdownId(Type[species.type2], 5)));
			}

			const base = "01H";

			const abilities: any = {};
			let index = 0;

			for (const baseAbility of species.ability) {
				abilities[base[index]] = erEnumToShowdownId(AbilityEnum[baseAbility], 8);
				index++;
			}

			index = 0;

			for (const innateAbility of species.innate) {
				abilities["I" + index.toString()] = erEnumToShowdownId(AbilityEnum[innateAbility], 8);
				index++;
			}

			const evos = [];

			for (const evo of species.evo) {
				evos.push(erEnumToShowdownId(SpeciesEnum[evo.to], 8));
			}

			const eggGroups = [];
			if (dex.case === "dex") {
				const eggGroup1 = eggGroupToShowdown(EggGroup[dex.value.eggGroup]);
				if (eggGroup1 !== "") {
					eggGroups.push(eggGroup1);
				}
				if ("eggGroup2" in dex.value) {
					const eggGroup2 = eggGroupToShowdown(EggGroup[dex.value.eggGroup2]);
					if (eggGroup2 !== "") {
						eggGroups.push(eggGroup2);
					}
				}
			}

			gennedTable[pokemon] = {
				inherit: false,
				types,
				abilities,
				baseStats: {
					hp: species.hp,
					atk: species.atk,
					def: species.def,
					spa: species.spatk,
					spd: species.spdef,
					spe: species.spe,
				},
				evos,
				...(pokemon in prevoMap && {
					prevo: prevoMap[pokemon],
				}),
				...(dex.case === "dex" && { // If this isn't a form, get extra properties from dex info
					heightm: dex.value.height,
					weightkg: dex.value.weight,
					eggGroups,
					...(dex.value.bodyColor !== undefined && {
						color: capitalizeFirstLetter(erEnumToShowdownId(BodyColor[dex.value.bodyColor], 0)),
					}),
				}),
				...(dex.case === "formOf" && { // Otherwise link the base form
					baseSpecies: erEnumToShowdownId(SpeciesEnum[dex.value], 8),
					// Assume start of the enum string is base, then rest is form
					forme: capitalizeFirstLetter(pokemon.substring(SpeciesEnum[dex.value].length + 1).toLowerCase().replace(/_/g, "-")),
				}),
				...(species.mega.length > 0 && { // Mega-specific requirement
					...(species.mega[0].evoUsing.case === "item" && {
						requiredItem: erEnumToShowdownId(ItemEnum[species.mega[0].evoUsing.value], 5),
					}),
					...(species.mega[0].evoUsing.case === "move" && {
						requiredItem: erEnumToShowdownId(MoveEnum[species.mega[0].evoUsing.value], 5),
					}),
				}),
				...(species.primal.length > 0 && { // Primal-specific requirement
					requiredItem: erEnumToShowdownId(ItemEnum[species.primal[0].item], 5),
				}),
				// Handle genderless / gender ratio
				...(species.gender.case === "genderless" && {
					gender: "N",
				}),
				...(species.gender.case === "percentFemale" && {
					...(species.gender.value === 0 && {
						gender: "M",
					}),
					...(species.gender.value === 100 && {
						gender: "F",
					}),
					...(species.gender.value > 0 && species.gender.value < 100 && {
						genderRatio: { M: (1 - species.gender.value / 100), F: species.gender.value / 100 },
					}),
				}),
			};
		} catch (err: any) {
			console.log(pokemon + " Caused Error: " + err);
		}
	}
	return gennedTable;
}
