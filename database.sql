
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL
);

CREATE TABLE "colleges" (
    "id" SERIAL PRIMARY KEY,
    "college_name" VARCHAR (80) NOT NULL,
    "state" VARCHAR (1000) NOT NULL,
);

CREATE TABLE "college_majors" (
    "id" SERIAL PRIMARY KEY,
    "college_major" VARCHAR (80) NOT NULL,
    "state" VARCHAR (1000) NOT NULL,
);