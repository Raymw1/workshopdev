const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("ws.db");

db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS ideas (
        id INTEGER PRIMARY KEY AUTOINCREMENT, image TEXT NOT NULL, title TEXT NOT NULL, category TEXT NOT NULL, 
        description TEXT NOT NULL, link TEXT NOT NULL
        );`);
    
})


