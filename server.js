const express = require("express");
const app = express();
const hbs = require('hbs');
const path = require('path');
require('dotenv').config();



app.use(express.static(path.join(__dirname,"public")));

app.set("views",path.join(__dirname,"views"));

app.set("view engine","hbs");
// app.get();
hbs.registerPartials(path.join(__dirname,"/views/partials"));
// app.listen();
const albums=[
        {name:"Sunbather",
        artist: "Deafheaven",
        genre:"Black Metal - Shoegaze",
        src:"sunbather.png",
        href:"deafheaven",
        description:"Mixing TRVE Black Metal with post-rock and shoegaze, Deafheaven delivers, with their first full-length album, a powerful mix of sadness, violence and hope. The atmospheric phases are followed by ground breaking blast-beat phases. You feel roughed by their music, sotthed, then roughed again."
        },
        {name:"III",
        artist: "Run The Jewels",
        genre:"Hip-Hop",
        src:"RunTheJewels3.jpg",
        href:"runthejewels",
        description:"El P and Killer Mike are at it again. Flawless execution and incredible production. Each track on this album is a true bomb. It is impossible to pick a favourite out of it without feeling that another song is left out. A masterpiece that is a must-listen for every hip-hop head."
        },
        {name:"Cultural Divide",
        artist: "Capstan",
        genre:"Metalcore",
        src:"capstan.jpg",
        href:"capstan",
        description:"Capstan's first EP is a show of strength and the definition of their musical identity. Mixing elements of punk-rock and metalcore, the Florida quintet blends rage with passion and sends riff after riff adding a touch of prog to the mix."
        },
        {name:"Scenery",
        artist: "Ryo Fukui",
        genre:"Jazz",
        src:"scenery.jpg",
        href:"fukui",
        description:"A rare masterpiece from the 1970's. Ryo Fukui was a prominent pianist from the 1970's new wave of japanese jazz, blending influences from american jazz and japanese music. "
        },
        {name:"Atheist's Cornea",
        artist: "Envy",
        genre:"Post-Hardcore - Screamo",
        src:"footsteps.jpg",
        href:"envy",
        description:"Mixing TRVE Black Metal with post-rock and shoegaze, Deafheaven delivers, with their first full-length album, a powerful mix of sadness, violence and hope. The atmospheric phases are followed by ground breaking blast-beat phases. You feel roughed by their music, sotthed, then roughed again."
        },
        {name:"Time will Die and Love Will Bury It",
        artist: "Rolo Tomassi",
        genre:"Mathcore",
        src:"twdlwb.jpg",
        href:"rolotomassi",
        description:"El P and Killer Mike are at it again. Flawless execution and incredible production. Each track on this album is a true bomb. It is impossible to pick a favourite out of it without feeling that another song is left out. A masterpiece that is a must-listen for every hip-hop head."
        },
        {name:"Made an America",
        artist: "FEVER 333",
        genre:"Punk-Hardcore",
        src:"madeanamerica.jpg",
        href:"fever",
        description:"Capstan's first EP is a show of strength and the definition of their musical identity. Mixing elements of punk-rock and metalcore, the Florida quintet blends rage with passion and sends riff after riff adding a touch of prog to the mix."
        },
        {name:"Scenery - Ryo Fukui",
        artist: "Ryo Fukui",
        genre:"Jazz",
        src:"scenery.jpg",
        href:"scenery",
        description:"A rare masterpiece from the 1970's. Ryo Fukui was a prominent pianist from the 1970's new wave of japanese jazz, blending influences from american jazz and japanese music. "
        },
        {name:"Sunbather",
        artist: "Deafheaven",
        genre:"Black Metal - Shoegaze",
        src:"sunbather.png",
        href:"deafheaven",
        description:"Mixing TRVE Black Metal with post-rock and shoegaze, Deafheaven delivers, with their first full-length album, a powerful mix of sadness, violence and hope. The atmospheric phases are followed by ground breaking blast-beat phases. You feel roughed by their music, sotthed, then roughed again."
        },
        {name:"Cultural Divide",
        artist: "Capstan",
        genre:"Metalcore",
        src:"capstan.jpg",
        href:"capstan",
        description:"Capstan's first EP is a show of strength and the definition of their musical identity. Mixing elements of punk-rock and metalcore, the Florida quintet blends rage with passion and sends riff after riff adding a touch of prog to the mix."
        },
    ];


app.get("/",(req, res)=>{
    
    res.render("index",{albums});
});

app.get("/review/:href",(req,res)=>{
    const album = albums.filter(a => {
        return a.href === req.params.href;
    })
    console.log(album);
    
    res.render("review",{ album : album[0]});
 
});

app.get("/about",(req, res)=>{
    const data={
        title:["About"]
    }
      res.render("about",{albums});
});


app.get("/contact",(req, res)=>{
    const data={
        title:["Contact"]
    }
      res.render("contact",data);
});

app.listen(5000, ()=>{ console.log(`server is ready @ http://localhost:5000`);
});