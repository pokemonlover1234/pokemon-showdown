CREATE TABLE public.roomlogs (
	type text NOT NULL,
	roomid text NOT NULL,
	userid text NULL,
	time TIMESTAMP(6) NOT NULL,
	log text NOT NULL,
);

CREATE INDEX linecount ON roomlogs(userid, roomid, time);
CREATE INDEX month ON roomlogs(roomid, time);
CREATE INDEX type ON roomlogs(roomid, type, time);
CREATE INDEX rename_idx ON roomlogs(roomid);

-- computed columns have to be added after apparently
ALTER TABLE roomlogs ADD COLUMN content TSVECTOR GENERATED ALWAYS AS (to_tsvector('english', log)) STORED;

CREATE TABLE public.roomlog_dates (
	roomid text NOT NULL,
	-- YYYY-MM
	month text NOT NULL,
	-- YYYY-MM-DD
	date text NOT NULL,
	PRIMARY KEY (roomid, date)
);