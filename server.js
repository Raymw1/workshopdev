const express = require("express");
const server = express();

// Static
server.use(express.static("public"));

// nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("templates", {
    express: server,
    noCache: true
})

const ideas = [
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/2729/2729007.svg?token=exp=1620761718~hmac=a2c7b657b6b3cb3680ff38c08fb2fcf3",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque repellendus alias quasi repudiandae velit;",
        url: "TODO"
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/2729/2729069.svg?token=exp=1620761718~hmac=c23d1569dfab4ceaff57c38705ad6d1e",
        title: "Yoga",
        category: "Bem Estar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque repellendus alias quasi repudiandae velit;",
        url: "TODO"
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/2729/2729001.svg?token=exp=1620761718~hmac=661c743d5588b42d313ecd86c78ba889",
        title: "Leitura",
        category: "Estudo/Entretenimento",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque repellendus alias quasi repudiandae velit;",
        url: "TODO"
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/2729/2729027.svg?token=exp=1620934043~hmac=4ebb143d41ff7ea490a5849c585f42d7",
        title: "Meditação",
        category: "Saúde Mental",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque repellendus alias quasi repudiandae velit;",
        url: "TODO"
    }
]

server.get("/", function(req, res) {
    return res.render("index.html");    // Using nunjucks
})

server.get("/ideas", function(req, res) {
    return res.render("ideas.html");
})

server.listen(3000);


