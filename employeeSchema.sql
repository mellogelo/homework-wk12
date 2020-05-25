DROP DATABASE IF EXISTS boringcompany_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE boringcompany_db;

USE boringcompany_db;

-- Create the table plans.
CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int NOT NULL,
  manager_id int NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

CREATE TABLE role (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary DECIMAL(6,2) NOT NULL,
  dept_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (dept_id) REFERENCES department(id)
);

CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  dept_name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);