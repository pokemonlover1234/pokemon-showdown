CREATE TABLE replays (
    id TEXT NOT NULL PRIMARY KEY,
    format TEXT NOT NULL,
    players TEXT NOT NULL,
    log TEXT NOT NULL,
    inputlog TEXT,
    uploadtime INTEGER NOT NULL,
    views INTEGER NOT NULL,
    formatid TEXT NOT NULL,
    rating INTEGER,
    private SMALLINT,
    password TEXT
);

CREATE TABLE replayplayers (
    playerid TEXT NOT NULL PRIMARY KEY,
    formatid TEXT NOT NULL,
    id TEXT NOT NULL,
    rating INTEGER,
    uploadtime INTEGER NOT NULL,
    private SMALLINT,
    password TEXT,
    format TEXT NOT NULL,
    players TEXT NOT NULL
);