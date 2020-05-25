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
          "View All Departments",
          "View All Roles",
          "View All Employees by Department",
          "View All Employees by Manager",
          "Add Employee",
          "Add Department",
          "Add Role",
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

        case "View All Departments":
          viewAllDept();
          break;  
  
        case "View All Roles":
          viewAllRole();
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

        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
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
  };

// ========== EACH QUESTION PROMPT ================

// ===== VIEW ALL EMPLOYEES======
viewAll = () => {
    // var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.dept_name, role.salary, CONCAT(manager.name, ' ', manager.last_name";
    //   query += "FROM employee LEFT JOIN role ON (employee.role_id = role.id) LEFT JOIN department ON (role.dept_id = department.id)";
    //   query += "LEFT JOIN employee manager ON (manager.manager_id = employee.manager_id)";
    connection.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
              console.table(res);
              start();
        start()
    });
};


// ===== VIEW ALL DEPARTMENTS======

function viewAllDept() {
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
              console.table(res);
              start();
    })
}

// ===== VIEW ALL DEPARTMENTS======

viewAllRole = () => {
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err;
              console.table(res);
              start();
    })
}


// ===== VIEW ALL EMPLOYEES BY DEPT ======

// viewByDepartment = () => {
//     connection.query("SELECT * FROM department", function(err, results) {
//         if (err) throw err;
//         inquirer
//         .prompt({
//             name: "department",
//             type: "rawlist",
//             message: "Search by Department",
//             choices: function() {
//                 var departmentAll = [];
//         for (var i = 0; i < results.length; i++) {
//           departmentAll.push(results[i].dept_name);
//         }
//         return departmentAll;
//         }
//         })
//         .then(function(answer) {
//             connection.query("SELECT * FROM employee", function(err, results) {
//                 for (var i = 0; i < res.length; i++) {
//                     console.table("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
//                 }
//                 start();
//             });
//         });
//     });
// };

// ===== ADD EMPLOYEE ======
addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the first name of the employee?",
            name: "eeFirstName"
        },
        {
            type: "input",
            message: "What's the last name of the employee?",
            name: "eeLastName"
        },
        {
            type: "input",
            message: "What is the employee's role id number?",
            name: "roleID"
        },
        {
            type: "input",
            message: "What is the manager id number?",
            name: "managerID"
        }
        ])
        .then(function(answer) {
            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.eeFirstName, answer.eeLastName, answer.roleID, answer.managerID], function(err, res) {
              if (err) throw err;
              console.table(res);
              start();
            });
          });
}

// ===== ADD DEPARTMENT ======

addDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What's new department name?",
            name: "newDept"
        }
    ])
    .then(function(answer) {
        connection.query("INSERT INTO department (dept_name) VALUES (?)", [answer.newDept], function(err, res) {
            if (err) throw err;
              console.table(res);
              start();
        })
    })
}

// ===== ADD ROLE ======

addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the title for the new role?",
            name: "newRole"
        },
        {
            type: "input",
            message: "What's the salary?",
            name: "roleSalary"
        },
        {
            type: "input",
            message: "What is the department id?",
            name: "newdeptId"
        },

    ])
    .then(function(answer) {
        connection.query("INSERT INTO role (title, salary, dept_id) VALUES (?, ?, ?)", [answer.newRole, answer.roleSalary, answer.newdeptId], function(err, res) {
            if (err) throw err;
              console.table(res);
              start();
        })
    })
}

