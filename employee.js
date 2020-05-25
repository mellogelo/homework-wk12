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

// ========== EACH QUESTION PROMPT ================

viewAll = () => {
    var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.dept_name, role.salary, CONCAT(manager.name, ' ', manager.last_name";
      query += "FROM employee LEFT JOIN role ON employee.role_id = role.role_id LEFT JOIN department ON role.dept_id = department_id";
      query += "LEFT JOIN employee manager ON manager.manager_id = employee.manager_id";
    connection.query(query, function(err, res) {
        console.table(res)
        start()
    })
}

viewByDepartment = () => {
    connection.query("SELECT * FROM department", function(err, results) {
        if (err) throw err;
    inquirer
    .prompt({
      name: "department",
      type: "rawlist",
      message: "Search by Department",
      choices: function() {
        var departmentAll = [];
        for (var i = 0; i < res.length; i++) {
          choiceArray.push(results[i].item_name);
        }
        return choiceArray;
    })
    .then(function(answer) {
      var query = "SELECT position, song, year FROM top5000 WHERE ?";
      connection.query(query, { artist: answer.artist }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        }
        runSearch();
      });
    });

    }
}