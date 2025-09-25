import { formatsdata, learnsets, pokedex } from "../../ionitedata";
import dirty from "./dirty.json";
import * as fs from 'fs';
import data from "./data.json";

function buildCache() {
	const formatsdataout = formatsdata(data);
	const learnsetdataout = learnsets(data);
	const pokedexdataout = pokedex(data);
	fs.writeFileSync("./formats-data-cache.json", JSON.stringify(formatsdataout, null, 2), 'utf8');
	fs.writeFileSync("./learnsets-cache.json", JSON.stringify(learnsetdataout, null, 2), 'utf8');
	fs.writeFileSync("./pokedex-cache.json", JSON.stringify(pokedexdataout, null, 2), 'utf8');
	dirty.dirty = false;
	fs.writeFileSync("./dirty.json", JSON.stringify(dirty, null, 2));
}

function formatsDataTable() {
	if (dirty.dirty) {
		buildCache();
	}
	return JSON.parse(fs.readFileSync("./formats-data-cache.json", 'utf8'));
}

function learnsetTable() {
	if (dirty.dirty) {
		buildCache();
	}
	return JSON.parse(fs.readFileSync("./learnsets-cache.json", 'utf8'));
}

function pokedexTable() {
	if (dirty.dirty) {
		buildCache();
	}
	return JSON.parse(fs.readFileSync("./pokedex-cache.json", 'utf8'));
}

export default { "formats-data": formatsDataTable, "learnsets": learnsetTable, "pokedex": pokedexTable };
