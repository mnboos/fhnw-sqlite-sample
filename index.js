const express = require('express');
const app = express();
const helper = require('./dbHelper');

app.get('/execute/:sql', function(req, res){
    helper.execute(req.params.sql, function(rows) {
        res.json({rows: rows});
    }, function(err) {
        res.json({error: err});
    });
});

const PORT = 3000;
app.listen(PORT, function() {
    console.log("Server listening on port:", PORT);
});