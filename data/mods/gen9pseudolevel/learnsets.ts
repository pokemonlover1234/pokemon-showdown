let gennedTable = {};
import data from "./data.json";
import { Learnsets as VanillaSets } from "../../learnsets";

for(const pokemon of Object.keys(data)){
	try {
		if(!(pokemon in VanillaSets)){
			continue;
		}
		const values = data[pokemon as keyof typeof data];
		const learnset = VanillaSets[pokemon as keyof typeof VanillaSets].learnset;
		if(learnset === undefined){
			continue;
		}
		const newLearnset = JSON.parse(JSON.stringify(learnset));

		for(const move of values.addmoves){
			(newLearnset as any)[move] = ["1L1"];
		}
		for(const move of values.rmmoves){
			delete (newLearnset as any)[move];
		}
		(gennedTable as any)[pokemon] = {
			inherit: true,
			learnset: newLearnset
		}
	} catch (err) {
		console.log(pokemon + " Caused Error: " + err);
	}
}

export const Learnsets: import('../../../sim/dex-species').ModdedLearnsetDataTable = gennedTable
