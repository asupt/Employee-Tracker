const inquirer = require('inquirer');
const express = require('express');
const router = require('express').Router;
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
    {
      // TODO: Enter PostgreSQL username
      user: 'postgres',
      // TODO: Enter PostgreSQL password
      password: 'root',
      host: 'localhost',
      database: 'company_db'
    },
    console.log(`Connected to the movies_db database.`)
  )



inquirer
    .prompt([
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            {
                name: 'View all departments',
                value: 0
            }, 
            {
                name:'View all roles',
                value: 1
            }, 
            {
                name:'View all employees',
                value: 2
            }, 
            {
                name:'Add a department',
                value: 3
            }, 
            {
                name:'Add a role',
                value: 4
            }, 
            {
                name:'Add an employee',
                value: 5
            }, 
            {
                name:'Update an employee role',
                value: 6
            }
        ]
    },
    ])
    .then(response => {
        
        if (response.choice === 0) {
            console.log(response.choice);
            pool.connect((err, client, done) => {
                if (err) throw err;
                client.query('SELECT  * FROM  departments', (err, res) => {
                    if (err)
                        console.log(err.stack);
                    else {
                        console.log(res.rows);
                    }
                    pool.end()
                    
                })
            })
            
        }

        else if (response.choice === 1) {
            console.log(response.choice);
            pool.connect((err, client, done) => {
                if (err) throw err;
                client.query('SELECT  * FROM  roles', (err, res) => {
                    if (err)
                        console.log(err.stack);
                    else {
                        console.log(res.rows);
                    }
                    pool.end()
                    
                })
            })
            
        }

        else if (response.choice === 2) {
            console.log(response.choice);
            pool.connect((err, client, done) => {
                if (err) throw err;
                client.query('SELECT  * FROM  employees', (err, res) => {
                    if (err)
                        console.log(err.stack);
                    else {
                        console.log(res.rows);
                    }
                    pool.end()
                    
                })
            })
            
        }
    });
    
    

// pool.connect();