var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(path.join(__dirname, '../tmp/db.sqlite3'));

db.serialize(function () {
    // 获取数据，每条数据触发一次回调，有多少数据回调就会有多少次
    // https://github.com/mapbox/node-sqlite3/wiki/API#databaseeachsql-param--callback-complete
    db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
        console.log(row.id + ': ' + row.info);
    });
});

db.close();