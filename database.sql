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

ALTER TABLE college_majors
ADD COLUMN major_description VARCHAR(255); -- Change the VARCHAR length as needed

ALTER TABLE college_majors
ALTER COLUMN major_description TYPE character varying(1000);


-- For Computer Science:
UPDATE college_majors
SET major_description = 'Computer Science is an enthralling exploration into the realm of algorithms, computational machines, and the very essence of computation. This discipline stretches across theoretical studies of algorithms and computation to practical issues of implementing computing systems in hardware and software. Computer Engineering emerges as a vital branch, blending computer science with electronic engineering to innovate and develop cutting-edge computer hardware and software, driving forward our digital world.'
WHERE major_name = 'Computer Science';

-- For Electrical Engineering:
UPDATE college_majors
SET major_description = 'Electrical Engineering is the cornerstone of modern technology, focused on the design and application of systems and devices that harness electricity, electronics, and electromagnetism. From the advent of the electric telegraph to today’s sophisticated electronic devices, this field has propelled the evolution of technology. It encompasses a vast range of applications, including power generation, telecommunications, and digital computing, shaping the infrastructure of our contemporary world.'
WHERE major_name = 'Electrical Engineering';

-- For Mechanical Engineering:
UPDATE college_majors
SET major_description = 'Mechanical Engineering is the art and science of designing and making machines. Bridging physics, engineering mathematics, and materials science, it’s responsible for everything from the smallest micro-machines to the largest power plants. This discipline is a testament to human ingenuity, applying principles of mechanics and energy to develop solutions that improve the world, from advanced robotics to sustainable energy solutions.'
WHERE major_name = 'Mechanical Engineering';

-- For Biology:
UPDATE college_majors
SET major_description = 'Biology is the vibrant study of life and living organisms, an intricate tapestry of physical structure, chemical processes, molecular interactions, and evolutionary patterns. This field invites a deep understanding of the building blocks of life, unlocking the mysteries of genetic codes, ecosystems, and the evolution of species. Biology serves as a gateway to addressing critical challenges in health, environment, and biodiversity, fostering advancements in medical sciences, conservation, and biotechnology.'
WHERE major_name = 'Biology';

-- For Chemistry:
UPDATE college_majors
SET major_description = 'Chemistry, often referred to as the central science, bridges the physical sciences with life sciences and applied sciences, such as medicine and engineering. It delves into the composition, structure, properties, and change of matter, providing the foundation for understanding the material universe. From developing new materials to solving energy challenges, chemistry plays a pivotal role in driving innovation and enhancing our quality of life.'
WHERE major_name = 'Chemistry';

-- For Physics:
UPDATE college_majors
SET major_description = 'Physics is the fundamental exploration of nature, aiming to understand the universe''s very fabric, from the smallest particles to the vastness of space. This discipline seeks to uncover the principles governing matter, energy, and the forces of nature, leading to groundbreaking discoveries that have shaped our technological landscape. Physics is crucial for innovations in fields ranging from quantum computing to astrophysics, offering profound insights into the cosmos and the underlying laws of existence.'
WHERE major_name = 'Physics';

-- For Mathematics:
UPDATE college_majors
SET major_description = 'Mathematics is the language of the universe, an essential tool for understanding the world around us. From abstract concepts of number theory to the practical applications of calculus, mathematics is at the core of scientific discovery and technological innovation. It enables the formulation of theories, the solving of complex problems, and the prediction of phenomena, underpinning advances in every field of study, including science, engineering, and economics.'
WHERE major_name = 'Mathematics';

-- For Environmental Science:
UPDATE college_majors
SET major_description = 'Environmental Science is an interdisciplinary field that melds physical, biological, and information sciences to explore and find solutions for the planet''s pressing environmental issues. It stands at the crossroads of human activity and the natural world, aiming to understand and mitigate the impact of climate change, pollution, and habitat destruction. Through research and applied science, it seeks sustainable practices to protect the environment and support a balanced ecosystem.'
WHERE major_name = 'Environmental Science';

-- For Economics:
UPDATE college_majors
SET major_description = 'Economics is a fascinating study of how individuals, businesses, and governments allocate resources. It encompasses everything from microeconomic analysis, which examines the choices made by individuals, to the grand scale of macroeconomics, which looks at the total economic activity and policies of entire countries. Economists explore how economic principles apply to decision-making, market dynamics, and the impact of policies on economic growth and stability.'
WHERE major_name = 'Economics';

-- For Political Science:
UPDATE college_majors
SET major_description = 'Political Science delves into the theory and practice of politics and governance. By analyzing political systems, behaviors, and structures, this field seeks to understand the foundations of power and authority, and the principles of governance. Political science is pivotal in shaping leaders, informing policy, and fostering democratic societies, providing insights into the complexities of political interactions and the impact of policy decisions on societal wellbeing.'
WHERE major_name = 'Political Science';

-- For Psychology:
UPDATE college_majors
SET major_description = 'Psychology is the scientific study of the mind and behavior, offering insights into the complex processes that govern thoughts, emotions, and actions. This discipline explores the depths of human consciousness, from neural pathways to social interactions, contributing to our understanding of individual and collective behavior. Psychology applies its findings to improve mental health, enhance educational practices, and strengthen community relations, making it a cornerstone of societal development.'
WHERE major_name = 'Psychology';

-- For Sociology:
UPDATE college_majors
SET major_description = 'Sociology examines the fabric of society, studying social relationships, interactions, and structures that define human life. It provides a lens through which to view the organization of societies and the behavior of individuals within social contexts. Sociology addresses critical issues such as inequality, social change, and cultural dynamics, offering insights that contribute to the development of a more equitable and cohesive society.'
WHERE major_name = 'Sociology';

-- For History:
UPDATE college_majors
SET major_description = 'History is a captivating exploration of the past, offering a window into the events, cultures, and individuals that have shaped our world. This discipline goes beyond mere dates and facts, seeking to understand the causes and consequences of historical phenomena. History teaches critical thinking and analytical skills, empowering students to draw lessons from the past to inform the future.'
WHERE major_name = 'History';

-- For English Literature:
UPDATE college_majors
SET major_description = 'English Literature invites students into the vast world of prose, poetry, and drama written in the English language. From the epic sagas of ancient Britain to the nuanced narratives of modern times, this field explores the power of words to reflect, critique, and shape human experience. English literature examines themes of identity, conflict, love, and loss, offering profound insights into the human condition across time and cultures.'
WHERE major_name = 'English Literature';

-- For Philosophy:
UPDATE college_majors
SET major_description = 'Philosophy engages with the deepest questions of existence, knowledge, and ethics, challenging students to ponder the nature of reality, the limits of human understanding, and the principles of right action. This discipline has shaped intellectual thought across centuries, inspiring debates on logic, metaphysics, and the philosophy of mind. Philosophy cultivates critical thinking, logical analysis, and ethical reasoning, skills that are invaluable in any field.'
WHERE major_name = 'Philosophy';

-- For Art History:
UPDATE college_majors
SET major_description = 'Art History is the study of art and its impact on society, tracing the evolution of visual expression from ancient cave paintings to contemporary installations. This field examines the cultural, social, and historical contexts of art, offering insights into the creative impulses and societal values of different eras. Art history not only celebrates human creativity but also fosters an appreciation of diversity and the transformative power of art.'
WHERE major_name = 'Art History';

-- For Music:
UPDATE college_majors
SET major_description = 'Music is a universal language that transcends cultural and linguistic boundaries, touching the hearts and minds of people worldwide. This discipline explores the theory, history, and practice of music, from classical compositions to contemporary sounds. Music majors learn the art of performance, composition, and analysis, developing a deep understanding of music''s role in society and its capacity to convey emotion and inspire change.'
WHERE major_name = 'Music';

-- For Theatre Arts:
UPDATE college_majors
SET major_description = 'Theatre Arts is a vibrant field that combines the spectacle of performance with the depth of human emotion, exploring the complexities of the human experience through drama, dance, and music. This discipline fosters creativity, collaboration, and critical thinking, preparing students for diverse careers in the performing arts. Theatre arts celebrate the power of storytelling and the impact of live performance, engaging audiences in dialogues that resonate across cultures and generations.'
WHERE major_name = 'Theatre Arts';

-- For Computer Engineering:
UPDATE college_majors
SET major_description = 'Computer Engineering bridges the gap between computer science and electrical engineering, focusing on the development and integration of hardware and software systems. This field is at the forefront of technology innovation, designing the computing devices and systems that power our digital world. Computer engineers work on a range of technologies, from microprocessors to supercomputers, playing a critical role in advancing computing technologies.'
WHERE major_name = 'Computer Engineering';

-- For Aerospace Engineering:
UPDATE college_majors
SET major_description = 'Aerospace Engineering propels students into the design and development of aircraft and spacecraft, blending aeronautical and astronautical engineering to explore the frontiers of air and space travel. This field is essential for advancing aviation technology, exploring outer space, and understanding the aerodynamic forces at play. Aerospace engineers contribute to groundbreaking projects, from commercial jets to interplanetary missions, shaping the future of transportation and exploration.'
WHERE major_name = 'Aerospace Engineering';

-- For Civil Engineering:
UPDATE college_majors
SET major_description = 'Civil Engineering is the backbone of the built environment, focusing on the design, construction, and maintenance of the infrastructure that supports modern society. From bridges and roads to water supply systems and buildings, civil engineers ensure the safety, sustainability, and resilience of our physical world. This discipline combines technical expertise with creative problem-solving to address challenges like urbanization and climate change, making it a cornerstone of societal development.'
WHERE major_name = 'Civil Engineering';

-- For Biomedical Engineering:
UPDATE college_majors
SET major_description = 'Biomedical Engineering is a transformative field that applies engineering principles to the medical and biological sciences, enhancing healthcare through innovations in medical devices, diagnostic equipment, and therapeutic strategies. This interdisciplinary approach aims to improve patient care, from developing advanced prosthetics to engineering tissue and genetic therapies, biomedical engineers work at the intersection of technology and biology to advance medical science and improve lives.'
WHERE major_name = 'Biomedical Engineering';

-- For Nursing:
UPDATE college_majors
SET major_description = 'Nursing is a noble profession dedicated to caring for individuals, families, and communities, ensuring they achieve, maintain, or recover optimal health and quality of life. Nurses blend compassion with scientific knowledge, providing essential healthcare services from preventive care to acute treatment. This field demands a commitment to patient care, lifelong learning, and teamwork, preparing practitioners to meet the complex needs of a diverse patient population.'
WHERE major_name = 'Nursing';

-- For Business Administration:
UPDATE college_majors
SET major_description = 'Business Administration is the art and science of managing the resources, operations, and strategy of business entities. Covering a broad array of disciplines, including marketing, finance, management, and operations, this field prepares students to lead organizations effectively in a global economy. Business administrators are pivotal in driving growth, innovation, and efficiency, making strategic decisions that shape the future of businesses and economies.'
WHERE major_name = 'Business Administration';

-- For Accounting:
UPDATE college_majors
SET major_description = 'Accounting, known as the language of business, is vital for recording, analyzing, and communicating financial information. It supports decision-making by providing key insights into the financial health of organizations. Accountants play a crucial role in guiding financial planning, tax strategy, and audit processes, ensuring transparency and compliance in the financial world. This discipline is foundational for the integrity and efficiency of financial markets and institutions.'
WHERE major_name = 'Accounting';

CREATE TABLE IF NOT EXISTS public.user_future_table
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    state VARCHAR(255),
    college_name VARCHAR(255),
    college_major VARCHAR(255),
    college_major_salary NUMERIC(10, 2),
    college_major_description TEXT,
    avg_monthly_mortgage NUMERIC(10, 2),
    avg_monthy_groceries NUMERIC(10, 2),
    avg_monthly_utilities NUMERIC(10, 2),
    avg_monthly_car_payment NUMERIC(10, 2),
    avg_monthly_car_insurance NUMERIC(10, 2),
    avg_monthly_student_loan_payment NUMERIC(10, 2),
    FOREIGN KEY (user_id) REFERENCES public.user(id)
);


