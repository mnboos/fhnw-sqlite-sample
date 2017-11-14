const helper = require('./dbHelper');

helper.execute("select Id from Employee", function(rows) {
    console.log("\u001B[1;32m Installation successful! \033[0m")
}, function(err) {
    console.log("\033[91m Something went wrong!\n\033[0m", err);
    console.error();
});