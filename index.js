const express = require('express');
const app = express();
const helper = require('./database/dbHelper');

app.get('/execute/:sql', function(req, res){
    helper.execute(req.params.sql, function(rows) {
        res.json({rows: rows});
    }, function(err) {
        res.json({error: err});
    });
});

app.get('/employees', function(req, res) {
    helper.execute("select * from employees", function(rows) {
        res.json({employees: rows});
    })
});

const PORT = 3000;
app.listen(PORT, function() {
    console.log("Server listening on port:", PORT);
});


// TODO: Solve the tasks!

// Todo: 1. Load an employee by its ID
app.get('/employee/:id', function(req, res) {
    const employeeId = req.params.id;
    console.log(employeeId);
    throw "NotImplemented";
});

// Todo: 2. Delete an employee by its id
app.delete('/...', function(req, res) {
   throw "NotImplemented";
});

// Todo: 3. Insert a new employee
// app....


// Todo: 4. Get all employees, sort the result descending by first name

// Todo: 5. Get all employees with an employeeId > 4

// todo: 6. Get the first- and lastname of all employees, return an additional column 'fullname'

// Todo: 7. Get all employees who report to another employee (hint: foreign key 'reportsTo' on employee)

// Todo: 8. Get all employees who report to nobody

// Todo: 9. Get all employees who report to somebody and the person they report to (hint: join)

// Todo: 10. Get all employees with their reporter, even if they don't report to anybody (hint: another join)
// todo: the employees with no reporter shall be at the top of the results

// todo: 11. count the nr of employees

