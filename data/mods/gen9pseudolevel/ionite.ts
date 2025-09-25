import { formatsdata, learnsets, pokedex } from "../../ionitedata";
import dirty from "./dirty.json";
import * as fs from 'fs';
import data from "./data.json";
import path from "path";

function buildCache() {
	const formatsdataout = formatsdata(data);
	const learnsetdataout = learnsets(data);
	const pokedexdataout = pokedex(data);
	fs.writeFileSync(path.join(__dirname, "formats-data-cache.json"), JSON.stringify(formatsdataout, null, 2), 'utf8');
	fs.writeFileSync(path.join(__dirname, "learnsets-cache.json"), JSON.stringify(learnsetdataout, null, 2), 'utf8');
	fs.writeFileSync(path.join(__dirname, "pokedex-cache.json"), JSON.stringify(pokedexdataout, null, 2), 'utf8');
	dirty.dirty = false;
	fs.writeFileSync(path.join(__dirname, "dirty.json"), JSON.stringify(dirty, null, 2));
}

function formatsDataTable() {
	if (dirty.dirty) {
		buildCache();
	}
	return JSON.parse(fs.readFileSync(path.join(__dirname, "formats-data-cache.json"), 'utf8'));
}

function learnsetTable() {
	if (dirty.dirty) {
		buildCache();
	}
	return JSON.parse(fs.readFileSync(path.join(__dirname, "learnsets-cache.json"), 'utf8'));
}

function pokedexTable() {
	if (dirty.dirty) {
		buildCache();
	}
	return JSON.parse(fs.readFileSync(path.join(__dirname, "pokedex-cache.json"), 'utf8'));
}

export default { "formats-data": formatsDataTable, "learnsets": learnsetTable, "pokedex": pokedexTable };
