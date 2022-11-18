CREATE TABLE IF NOT EXISTS users (
	id        serial       PRIMARY KEY,
	full_name varchar(64)  NOT NULL,
	username  varchar(32)  UNIQUE NOT NULL,
	passw     varchar(128) NOT NULL
);
