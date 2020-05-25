USE boringcompany_db;

-- DEPARTMENTS.

INSERT INTO department (dept_name)
VALUES ("Sales");

INSERT INTO department (dept_name)
VALUES ("Design");

INSERT INTO department (dept_name)
VALUES ("Development");

-- ROLES.

INSERT INTO role (title, salary, dept_id)
VALUES ("Sales Rep", 60000.00, 1);

INSERT INTO role (title, salary, dept_id)
VALUES ("Sales Manager", 82000.00, 1);

INSERT INTO role (title, salary, dept_id)
VALUES ("Graphic Designer", 40000.00, 2);

INSERT INTO role (title, salary, dept_id)
VALUES ("Art Director", 82000.00, 2);

INSERT INTO role (title, salary, dept_id)
VALUES ("Junior Developer", 60000.00, 3);

INSERT INTO role (title, salary, dept_id)
VALUES ("Full Stack Developer", 120000.00, 3);

INSERT INTO role (title, salary, dept_id)
VALUES ("Lead Developer", 200000.00, 3);

-- EMPLOYEE.

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jeff", "Winger", 1, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Abed", "Nadir", 4, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Troy", "Barnes", 3, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Richard", "Hendricks", 7, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jian", "Yang", 5, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bertram", "Gilfoyle", 6, null);