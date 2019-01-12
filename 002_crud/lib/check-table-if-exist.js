// How do I check in SQLite whether a table exists?
// https://stackoverflow.com/questions/1601151/how-do-i-check-in-sqlite-whether-a-table-exists

var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(path.join(__dirname, '../tmp/db.sqlite3'));

db.serialize(function () {
    db.all('SELECT 1 FROM sqlite_master WHERE type=\'table\' AND name=\'lorem\';', function (err, row) {
        // lorem:  null [ { '1': 1 } ]
        console.log('lorem: ', err, row);
    });

    db.all('SELECT 1 FROM sqlite_master WHERE type=\'table\' AND name=\'lorem2\';', function (err, row) {
        // lorem2:  null []
        console.log('lorem2: ', err, row);
    });
});

db.close();