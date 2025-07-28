CREATE TABLE IF NOT EXISTS gen9computergeneratedteams (
	species_id TExt PRIMARY KEY,
	wins integer NOT NULL,
	losses integer NOT NULL,
	level integer NOT NULL
);

CREATE INDEX IF NOT EXISTS gen9computergeneratedteams_species_id_level ON gen9computergeneratedteams(species_id, level);

CREATE TABLE IF NOT EXISTS gen9_historical_levels (
	species_id TEXT NOT NULL,
	level integer NOT NULL,
	timestamp integer NOT NULL
);

CREATE TABLE IF NOT EXISTS db_info (
	key TEXT PRIMARY KEY,
	value TEXT NOT NULL
);

INSERT INTO db_info (key, value) VALUES ('version', '1') ON CONFLICT DO NOTHING;
