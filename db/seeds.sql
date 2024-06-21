INSERT INTO departments (department_name)
VALUES ('Tax'),
       ('Hamster');

INSERT INTO roles (department_id, title, salary)
VALUES (1, 'filing assistant', 30000),
       (1, 'legal representative', 60000),
       (2, 'nibbler', 180000),
       (2, 'shell shucker', 130000);

INSERT INTO employees (role_id, first_name, last_name, manager_id)
VALUES (1, 'Jeff', 'Gordo', 1),
       (2, 'Dobe', 'Voozoo', 1),
       (3, 'Hammy', 'Nibbles', 1),
       (4, 'Shock', 'Junior', 1),
       (1, 'Jorge', 'Andriz', 1),
       (1, 'George', 'Gooch', 1),
       (1, 'Beff', 'Bordo', 2),
       (1, 'Megan', 'Fall', 2),
       (1, 'Humpter', 'Gordo', 3),
       (1, 'Iggle', 'Fez', 3),
       (1, 'Torty', 'Tamper', 4);
