let gennedTable = {};
import data from "./data.json";
import { Pokedex as VanillaDex } from "../../pokedex";

for(const pokemon of Object.keys(data)){
	try {
		const values = data[pokemon as keyof typeof data];
		let newTags = VanillaDex[pokemon as keyof typeof VanillaDex].tags ?? [];
		if(values.restricted){
			newTags.push("Ionite - Restricted");
		}
		(gennedTable as any)[pokemon] = {
			inherit: true,
			types: values.types,
			abilities: values.abilities,
			baseStats: values.baseStats,
			tags: newTags
		}
	} catch (err) {
		console.log("Unknown Pokemon: "+pokemon);
	}
}

export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = gennedTable;
//{
// 	shiftry: {
// 		inherit: true,
// 		abilities: { 0: "Chlorophyll", 1: "Early Bird", H: "Pickpocket" },
// 	},
// 	piplup: {
// 		inherit: true,
// 		abilities: { 0: "Torrent", H: "Defiant" },
// 	},
// 	prinplup: {
// 		inherit: true,
// 		abilities: { 0: "Torrent", H: "Defiant" },
// 	},
// 	empoleon: {
// 		inherit: true,
// 		abilities: { 0: "Torrent", H: "Defiant" },
// 	},
// };
