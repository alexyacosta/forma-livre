CREATE TABLE IF NOT EXISTS projects (
	id        serial       PRIMARY KEY,
	project varchar(64)  NOT NULL,
	proj_link  varchar(32)  UNIQUE NOT NULL
);