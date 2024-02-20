CREATE TABLE IF NOT EXISTS public.states
(
    id SERIAL PRIMARY KEY,
    state_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.colleges
(
    id SERIAL PRIMARY KEY,
    college_name VARCHAR(80) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.college_state_link
(
    id SERIAL PRIMARY KEY,
    college_id INTEGER NOT NULL,
    state_id INTEGER NOT NULL,
    FOREIGN KEY (college_id) REFERENCES public.colleges(id),
    FOREIGN KEY (state_id) REFERENCES public.states(id)
);

CREATE TABLE IF NOT EXISTS public.college_majors
(
    id SERIAL PRIMARY KEY,
    major_name VARCHAR(80) NOT NULL,
    average_salary INTEGER
);

CREATE TABLE IF NOT EXISTS public.college_major_link
(
    id SERIAL PRIMARY KEY,
    college_id INTEGER NOT NULL,
    major_id INTEGER NOT NULL,
    FOREIGN KEY (college_id) REFERENCES public.colleges(id),
    FOREIGN KEY (major_id) REFERENCES public.college_majors(id)
);

INSERT INTO public.states (state_name) VALUES 
('Colorado'), ('Tennessee'), ('Florida'), ('Alabama'), ('Kentucky');

INSERT INTO public.colleges (college_name) VALUES 
('University of Colorado Boulder'), 
('Colorado State University'), 
('University of Denver'), 
('Colorado College'), 
('Air Force Academy'),
('University of Tennessee'), 
('Vanderbilt University'), 
('Belmont University'), 
('East Tennessee State University'), 
('Tennessee Technological University'),
('University of Florida'), 
('Florida State University'), 
('University of Miami'), 
('University of Central Florida'), 
('Florida International University'),
('University of Alabama'), 
('Auburn University'), 
('University of Alabama at Birmingham'), 
('Alabama State University'), 
('Troy University'),
('University of Kentucky'), 
('University of Louisville'), 
('Western Kentucky University'), 
('Eastern Kentucky University'), 
('Northern Kentucky University');


INSERT INTO public.college_majors (major_name, average_salary) VALUES 
('Computer Science', 80000), 
('Electrical Engineering', 85000), 
('Mechanical Engineering', 75000), 
('Biology', 70000), 
('Chemistry', 65000),
('Physics', 73000),
('Mathematics', 68000),
('Environmental Science', 72000),
('Economics', 71000),
('Political Science', 69000),
('Psychology', 67000),
('Sociology', 65000),
('History', 63000),
('English Literature', 62000),
('Philosophy', 61000),
('Art History', 60000),
('Music', 59000),
('Theatre Arts', 58000),
('Computer Engineering', 86000),
('Aerospace Engineering', 88000),
('Civil Engineering', 84000),
('Biomedical Engineering', 87000),
('Nursing', 76000),
('Business Administration', 77000),
('Accounting', 78000);


INSERT INTO public.college_state_link (college_id, state_id) VALUES 
-- Colorado Colleges (1 to 5)
(1, 1), (2, 1), (3, 1), (4, 1), (5, 1),
-- Tennessee Colleges (6 to 10)
(6, 2), (7, 2), (8, 2), (9, 2), (10, 2),
-- Florida Colleges (11 to 15)
(11, 3), (12, 3), (13, 3), (14, 3), (15, 3),
-- Alabama Colleges (16 to 20)
(16, 4), (17, 4), (18, 4), (19, 4), (20, 4),
-- Kentucky Colleges (21 to 25)
(21, 5), (22, 5), (23, 5), (24, 5), (25, 5);

INSERT INTO public.college_major_link (college_id, major_id) VALUES 
-- University 1 (Colorado)
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
-- University 2 (Colorado)
(2, 6), (2, 7), (2, 8), (2, 9), (2, 10),
-- University 3 (Colorado)
(3, 11), (3, 12), (3, 13), (3, 14), (3, 15),
-- University 4 (Colorado)
(4, 16), (4, 17), (4, 18), (4, 19), (4, 20),
-- University 5 (Colorado)
(5, 21), (5, 22), (5, 23), (5, 24), (5, 25),
-- Continuing the pattern for universities in Tennessee (IDs 6-10)
(6, 1), (6, 2), (6, 3), (6, 4), (6, 5),
(7, 6), (7, 7), (7, 8), (7, 9), (7, 10),
(8, 11), (8, 12), (8, 13), (8, 14), (8, 15),
(9, 16), (9, 17), (9, 18), (9, 19), (9, 20),
(10, 21), (10, 22), (10, 23), (10, 24), (10, 25),
-- Florida Universities (IDs 11-15)
(11, 1), (11, 2), (11, 3), (11, 4), (11, 5),
(12, 6), (12, 7), (12, 8), (12, 9), (12, 10),
(13, 11), (13, 12), (13, 13), (13, 14), (13, 15),
(14, 16), (14, 17), (14, 18), (14, 19), (14, 20),
(15, 21), (15, 22), (15, 23), (15, 24), (15, 25),
-- Alabama Universities (IDs 16-20)
(16, 1), (16, 2), (16, 3), (16, 4), (16, 5),
(17, 6), (17, 7), (17, 8), (17, 9), (17, 10),
(18, 11), (18, 12), (18, 13), (18, 14), (18, 15),
(19, 16), (19, 17), (19, 18), (19, 19), (19, 20),
(20, 21), (20, 22), (20, 23), (20, 24), (20, 25),
-- Kentucky Universities (IDs 21-25)
(21, 1), (21, 2), (21, 3), (21, 4), (21, 5),
(22, 6), (22, 7), (22, 8), (22, 9), (22, 10),
(23, 11), (23, 12), (23, 13), (23, 14), (23, 15),
(24, 16), (24, 17), (24, 18), (24, 19), (24, 20),
(25, 21), (25, 22), (25, 23), (25, 24), (25, 25);


-- Fixing table
TRUNCATE TABLE public.college_majors, public.college_major_link CASCADE;



INSERT INTO public.college_majors (major_name, average_salary) VALUES 
('Computer Science', 80000), 
('Electrical Engineering', 85000), 
('Mechanical Engineering', 75000), 
('Biology', 70000), 
('Chemistry', 65000),
('Physics', 73000),
('Mathematics', 68000),
('Environmental Science', 72000),
('Economics', 71000),
('Political Science', 69000),
('Psychology', 67000),
('Sociology', 65000),
('History', 63000),
('English Literature', 62000),
('Philosophy', 61000),
('Art History', 60000),
('Music', 59000),
('Theatre Arts', 58000),
('Computer Engineering', 86000),
('Aerospace Engineering', 88000),
('Civil Engineering', 84000),
('Biomedical Engineering', 87000),
('Nursing', 76000),
('Business Administration', 77000),
('Accounting', 78000);

