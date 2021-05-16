const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("ws.db");

db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS ideas (
        id INTEGER PRIMARY KEY AUTOINCREMENT, image TEXT NOT NULL, title TEXT NOT NULL, category TEXT NOT NULL, 
        description TEXT NOT NULL, link TEXT NOT NULL
        );`);
    
    // const query = `INSERT INTO ideas(image, title, category, description, link) VALUES (?, ?, ?, ?, ?);`;
    // const values =  ["https://img-premium.flaticon.com/png/512/2729/2729007.png?token=exp=1621110864~hmac=2dd94622d873491044bd9cfa4f159fd2",
    // "Cursos de Programação",
    // "Estudo",
    // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque repellendus alias quasi repudiandae velit;",
    // "https://github.com/Raymw1"]
    // db.run(query, values, function(err) {
    //     if (err) return console.log(err);
    // })
    
    // db.all("SELECT * FROM ideas;", function(err, rows) {
    //     console.log(rows);
    // });
})

module.exports = db;
