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
        img: "https://img-premium.flaticon.com/png/512/2729/2729007.png?token=exp=1621110864~hmac=2dd94622d873491044bd9cfa4f159fd2",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque repellendus alias quasi repudiandae velit;",
        url: "https://github.com/Raymw1"
    },
    {
        img: "https://img-premium.flaticon.com/png/512/2729/2729069.png?token=exp=1621110954~hmac=f00e6b47765dfff4b2d9c2aa07a6513d",
        title: "Yoga",
        category: "Bem Estar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque repellendus alias quasi repudiandae velit;",
        url: "https://github.com/Raymw1"
    },
    {
        img: "https://img-premium.flaticon.com/png/512/2729/2729001.png?token=exp=1621110864~hmac=179ed7730db152194979d92f91cca55a",
        title: "Leitura",
        category: "Estudo/Entretenimento",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque repellendus alias quasi repudiandae velit;",
        url: "https://github.com/Raymw1"
    },
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/2729/2729027.svg?token=exp=1620934043~hmac=4ebb143d41ff7ea490a5849c585f42d7",
        title: "Meditação",
        category: "Saúde Mental",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque repellendus alias quasi repudiandae velit;",
        url: "https://github.com/Raymw1"
    },
    {
        img: "https://img-premium.flaticon.com/png/512/2728/2728999.png?token=exp=1621110864~hmac=a362ab5240bd1629e9e1b234ab6de499",
        title: "Investimentos",
        category: "Finanças",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque repellendus alias quasi repudiandae velit;",
        url: "https://github.com/Raymw1"
    },
    {
        img: "https://img-premium.flaticon.com/png/512/2729/2729038.png?token=exp=1621110864~hmac=c9b4254f58d0d73abca61ba2c718ab51",
        title: "Pintura",
        category: "Lazer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque repellendus alias quasi repudiandae velit;",
        url: "https://github.com/Raymw1"
    }
]
// const reversedIdeas = ideas.reverse();

server.get("/", function(req, res) {
    let lastIdeas = [];
    const reversedIdeas = [...ideas].reverse();
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea);
        }   else{
            break;
        }
    }
    return res.render("index.html", { ideas: lastIdeas });    // Using nunjucks
})

server.get("/ideas", function(req, res) {
    const reversedIdeas = [...ideas].reverse();
    return res.render("ideas.html", { ideas: reversedIdeas });
})

server.listen(3000);


