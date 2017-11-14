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
    helper.execute("select * from Employee", function(rows) {
        res.json({employees: rows});
    })
});

const PORT = 3000;
app.listen(PORT, function() {
    console.log("Server listening on port:", PORT);
});


// TODO: Solve the tasks!

// Todo: Load an employee by its ID
app.get('/employee/:id', function(req, res) {
    const employeeId = req.params.id;
    console.log(employeeId);
    throw "NotImplemented";
});

// Todo: Delete an employee by its id
app.delete('/...', function(req, res) {
   throw "NotImplemented";
});

// Todo: Insert a new employee
// app....

