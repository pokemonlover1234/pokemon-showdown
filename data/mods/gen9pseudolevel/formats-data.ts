import data from "./data.json";
import { FormatsData as VanillaData } from "../../formats-data";
const gennedTable: import('../../../sim/dex-species').ModdedSpeciesFormatsDataTable =
JSON.parse(JSON.stringify(VanillaData));

for (const pokemon of Object.keys(gennedTable)) {
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
