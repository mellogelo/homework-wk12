USE boringcompany_db;

INSERT INTO department (dept_name)
VALUES ("Sales");

INSERT INTO department (dept_name)
VALUES ("Design");

INSERT INTO department (dept_name)
VALUES ("Development");

INSERT INTO role (title, salary, dept_id)
VALUES ("Sales Rep", 60000, 1);

INSERT INTO role (title, salary, dept_id)
VALUES ("Sales Manager", 82000, 1);

INSERT INTO role (title, salary, dept_id)
VALUES ("Graphic Designer", 40000, 2);

INSERT INTO role (title, salary, dept_id)
VALUES ("Art Director", 82000, 2);

INSERT INTO role (title, salary, dept_id)
VALUES ("Junior Developer", 60000, 3);

INSERT INTO role (title, salary, dept_id)
VALUES ("Full Stack Developer", 120000, 3);

INSERT INTO role (title, salary, dept_id)
VALUES ("Lead Developer", 200000, 3);