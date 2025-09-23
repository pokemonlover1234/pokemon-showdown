import data from "./data.json";
import { Pokedex as VanillaDex } from "../../pokedex";
const gennedTable: import('../../../sim/dex-species').ModdedSpeciesFormatsDataTable = {};
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

export const FormatsData: import('../../../sim/dex-species').ModdedSpeciesFormatsDataTable = gennedTable;
