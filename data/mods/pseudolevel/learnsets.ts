let gennedTable = {};
import data from "./data.json";
import { Learnsets as VanillaSets } from "../../learnsets";

for(const pokemon in Object.keys(data)){
	const values = data[pokemon as keyof typeof data];
	const newLearnset = JSON.parse(JSON.stringify(VanillaSets[pokemon as keyof typeof VanillaSets].learnset));

	for(const move in values.addmoves){
		(newLearnset as any)[move] = ["1L1"];
	}
	for(const move in values.rmmoves){
		delete (newLearnset as any)[move];
	}
	(gennedTable as any)[pokemon] = {
		inherit: true,
		learnsets: newLearnset
	}
}


export const Learnsets: import('../../../sim/dex-species').ModdedLearnsetDataTable = gennedTable
