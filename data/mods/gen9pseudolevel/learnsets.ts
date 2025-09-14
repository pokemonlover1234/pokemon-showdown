let gennedTable = {};
import data from "./data.json";
import { Learnsets as VanillaSets } from "../../learnsets";

for(const pokemon of Object.keys(data)){
	try {
		if(!(pokemon in VanillaSets)){
			console.log("Pokemon " + pokemon + " has no vanilla learnset");
			continue;
		}
		const values = data[pokemon as keyof typeof data];
		const newLearnset = VanillaSets[pokemon as keyof typeof VanillaSets].learnset;
		if(newLearnset === undefined){
			console.log("Pokemon " + pokemon + " exists in vanilla learnset table but has no learnset object.");
			continue;
		}

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
	} catch (err) {
		console.log(pokemon + " Caused Error: " + err);
	}
}


export const Learnsets: import('../../../sim/dex-species').ModdedLearnsetDataTable = gennedTable
