// How do I check in SQLite whether a table exists?
// https://stackoverflow.com/questions/1601151/how-do-i-check-in-sqlite-whether-a-table-exists

var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(path.join(__dirname, '../tmp/db.sqlite3'));


db.serialize(function () {
    db.run('create table if not exists lorem (info TEXT)');

    var stmt = db.prepare('INSERT INTO lorem VALUES (?)');
    for (var i = 0; i < 10; i++) {
        stmt.run('Ipsum ' + i);
    }
    stmt.finalize();

    db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
        console.log(row.id + ': ' + row.info);
    });
});

db.close();