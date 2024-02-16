
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- Table: public.college_major_link

-- DROP TABLE IF EXISTS public.college_major_link;

CREATE TABLE IF NOT EXISTS public.college_major_link
(
    id integer NOT NULL DEFAULT nextval('college_major_link_id_seq'::regclass),
    college_id integer NOT NULL,
    major_id integer NOT NULL,
    CONSTRAINT college_major_link_pkey PRIMARY KEY (id),
    CONSTRAINT college_major_link_college_id_fkey FOREIGN KEY (college_id)
        REFERENCES public.colleges (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT college_major_link_major_id_fkey FOREIGN KEY (major_id)
        REFERENCES public.college_majors (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.college_major_link
    OWNER to postgres;

    -- 

    -- Table: public.college_majors

-- DROP TABLE IF EXISTS public.college_majors;

CREATE TABLE IF NOT EXISTS public.college_majors
(
    id integer NOT NULL DEFAULT nextval('college_majors_id_seq'::regclass),
    college_major character varying(80) COLLATE pg_catalog."default" NOT NULL,
    average_salary integer,
    CONSTRAINT college_majors_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.college_majors
    OWNER to postgres;

    --
    -- Table: public.college_state_link

-- DROP TABLE IF EXISTS public.college_state_link;

CREATE TABLE IF NOT EXISTS public.college_state_link
(
    id integer NOT NULL DEFAULT nextval('college_state_link_id_seq'::regclass),
    college_id integer NOT NULL,
    major_id integer NOT NULL,
    state character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT college_state_link_pkey PRIMARY KEY (id),
    CONSTRAINT college_state_link_college_id_fkey FOREIGN KEY (college_id)
        REFERENCES public.colleges (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT college_state_link_major_id_fkey FOREIGN KEY (major_id)
        REFERENCES public.college_majors (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.college_state_link
    OWNER to postgres;

    --

    -- Table: public.colleges

-- DROP TABLE IF EXISTS public.colleges;

CREATE TABLE IF NOT EXISTS public.colleges
(
    id integer NOT NULL DEFAULT nextval('colleges_id_seq'::regclass),
    college_name character varying(80) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT colleges_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.colleges
    OWNER to postgres;

    ---- Table: public.user

-- DROP TABLE IF EXISTS public."user";

CREATE TABLE IF NOT EXISTS public."user"
(
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    username character varying(80) COLLATE pg_catalog."default" NOT NULL,
    password character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(80) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(80) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (id),
    CONSTRAINT user_username_key UNIQUE (username)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."user"
    OWNER to postgres;