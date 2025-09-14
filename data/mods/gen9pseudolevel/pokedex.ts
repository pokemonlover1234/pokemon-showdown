const gennedTable = {};
import data from "./data.json";
import { Pokedex as VanillaDex } from "../../pokedex";

for (const pokemon of Object.keys(data)) {
	try {
		const values = data[pokemon as keyof typeof data];
		const newTags = VanillaDex[pokemon as keyof typeof VanillaDex].tags ?? [];
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

export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = gennedTable;
