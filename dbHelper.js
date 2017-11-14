const sqlite = require('sqlite3');

const dbName = "Northwind_large.sqlite";

module.exports.execute = function(sql, onSucces, onError) {
    var db = new sqlite.Database(dbName);
    db.all(sql, function(err, rows) {
        if (err) {
            if (onError) {
                onError(err);
            } else {
                console.log("Error: ", err);
            }
        } else {
            if (onSucces) {
                onSucces(rows);
            } else {
                console.log("Loaded data: ", rows);
            }
        }
    });
    db.close();
};