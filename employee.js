var mysql = require("mysql");
var inquirer = require("inquirer");

// ========== CONNECTION ================
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 8889,
  // username
  user: "root",
  // password
  password: "root",
  database: "boringcompany_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// ========== PROMPT ================

function start() {
    inquirer
      .prompt({
        name: "welcome",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees by Department",
          "View All Employees by Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager"
        ]
      })
      .then(function(answer) {
        switch (answer.welcome) {
        case "View All Employees":
          viewAll();
          break;
  
        case "View All Employees by Department":
          viewByDept();
          break;
  
        case "View All Employees by Manager":
          viewByManager();
          break;
  
        case "Add Employee":
          addEmployee();
          break;
  
        case "Remove Employee":
          removeEmployee();
          break;

        case "Update Employee Role":
          updateRole();
          break;

        case "Update Employee Manager":
          updateManager();
          break;
        }
      });
  }