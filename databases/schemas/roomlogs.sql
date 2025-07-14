CREATE TABLE public.roomlogs (
	type text NOT NULL,
	roomid text NOT NULL,
	userid text NULL,
	time TIMESTAMP(6) NOT NULL,
	log text NOT NULL,
	INDEX linecount (userid, roomid, time),
	INDEX month (roomid, time),
	INDEX type (roomid, type, time),
	INDEX rename_idx (roomid)
);
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