var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(path.join(__dirname, '../tmp/db.sqlite3'));

db.serialize(function () {
    // 获取数据，并在回调中返回结果
    // rows 是一个列表，里面就是所有的结果
    // https://github.com/mapbox/node-sqlite3/wiki/API#databaseallsql-param--callback
    db.all('SELECT rowid AS id, info FROM lorem', function (err, rows) {
        console.log(err, rows);
    });
});

db.close();