const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
const dotenv = require('dotenv');
const { query } = require("express");
dotenv.config()


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.set('views', './views');
app.set('view engine', 'pug');

app.get("/", async (req,res) => {
    const query = ["London","Boston","Tokyo"];
    let results = []

    await query.map( item => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+ item +"&appid="+ process.env.API_KEY +"&units=metric";
        https.get(url,(response) => {
            response.on("data", async (data) => {
                const response_data = await JSON.parse(data)
                results.push(response_data)
                if(results.length == query.length) {
                    res.render("index.pug",{main : results})
                }
                console.log(response_data.weather)
            })
        })
    })
})


app.post("/result",(req,res) => {
    const city = req.body.send
    console.log(city)
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ process.env.API_KEY +"&units=metric";

    https.get(url,(response) => {
        response.on('data',async (data) => {
            const response_data = await JSON.parse(data)
            if(response.statusCode < 401) {
                res.render("result.pug",{main : response_data})
            } else {
                res.render("error.pug",{})
            }

        })
    })
})
app.listen(3000, ()=> {
    console.log("Server Listening")
})