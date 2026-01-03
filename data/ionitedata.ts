import { Pokedex as VanillaDex } from "./pokedex";
import { Learnsets as VanillaSets } from "./learnsets";

export function formatsdata(data: any) {
	const gennedTable: import('../sim/dex-species').ModdedSpeciesFormatsDataTable = {};
	for (const pokemon of Object.keys(VanillaDex)) {
		try {
			if (pokemon in data) {
				gennedTable[pokemon as keyof typeof gennedTable] = {
					inherit: true,
					tier: "ZU",
					doublesTier: "DUU",
					natDexTier: "ZU",
				};
			} else {
				gennedTable[pokemon as keyof typeof gennedTable] = {
					inherit: true,
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

export function learnsets(data: any) {
	const gennedTable: import("../sim/dex-species").ModdedLearnsetDataTable = {};
	for (const pokemon of Object.keys(data)) {
		try {
			const values = data[pokemon as keyof typeof data];
			let learnset = null;
			if (pokemon in VanillaSets) {
				learnset = VanillaSets[pokemon as keyof typeof VanillaSets].learnset;
				if (learnset === undefined) {
					learnset = {};
				}
			} else {
				learnset = {};
			}
			const newLearnset = JSON.parse(JSON.stringify(learnset));

			for (const move of values.addmoves) {
				(newLearnset)[move] = ["1L1"];
			}
			for (const move of values.rmmoves) {
				delete (newLearnset)[move];
			}
			(gennedTable as any)[pokemon] = {
				inherit: true,
				learnset: newLearnset,
			};
		} catch (err: any) {
			console.log(pokemon + " Caused Error: " + err);
		}
	}
	return gennedTable;
}

export function pokedex(data: any) {
	const gennedTable: import("../sim/dex-species").ModdedSpeciesDataTable = {};
	for (const pokemon of Object.keys(data)) {
		try {
			if ((VanillaDex.hasOwnProperty(pokemon))) {
				console.log("Modified Pokemon " + pokemon + " does not exist in Showdown Dex");
			}
			const values = data[pokemon as keyof typeof data];
			const tags = VanillaDex[pokemon as keyof typeof VanillaDex].tags;
			let newTags = [];
			if (tags !== undefined) {
				newTags = JSON.parse(JSON.stringify(tags));
			}
			if (values.restricted) {
				newTags.push("Ionite - Restricted");
			}
			(gennedTable as any)[pokemon] = {
				inherit: true,
				types: values.types,
				abilities: values.abilities,
				baseStats: values.baseStats,
				tags: newTags,
			};
		} catch (err: any) {
			console.log(pokemon + " Caused Error: " + err);
		}
	}
	return gennedTable;
}
