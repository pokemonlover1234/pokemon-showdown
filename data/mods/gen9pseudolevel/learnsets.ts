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
		console.log(pokemon + ": " + values.addmoves)
		for(const move in values.addmoves){
			(newLearnset as any)[move] = ["1L1"];
		}
		for(const move in values.rmmoves){
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

console.log(gennedTable.mightyena.learnset);

export const Learnsets: import('../../../sim/dex-species').ModdedLearnsetDataTable = gennedTable
