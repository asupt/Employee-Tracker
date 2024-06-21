DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

\c company_db;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(255)
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    salary INTEGER,
    department_id INTEGER REFERENCES departments(id)
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    role_id INTEGER REFERENCES roles(id),
    manager_id INTEGER REFERENCES employees(id)
);