const helper = require('./database/dbHelper');

helper.execute("select employeeid from employees", function(rows) {
    console.log("\u001B[1;32m Test successful! \033[0m")
}, function(err) {
    console.log("\033[91m Something went wrong!\n\033[0m", err);
    console.error();
});