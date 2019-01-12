var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(path.join(__dirname, '../tmp/db.sqlite3'));

db.serialize(function () {
    // 获取数据，只返回第一条数据
    // row 第一条数据，如果结果为空，则为 undefined
    // https://github.com/mapbox/node-sqlite3/wiki/API#databasegetsql-param--callback
    db.get('SELECT rowid AS id, info FROM lorem', function (err, row) {
        console.log(row.id + ': ' + row.info);
    });
});

db.close();