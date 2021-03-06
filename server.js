const { urlencoded } = require('express')
const express = require('express')
const app = express()
app.use(express.json())
app.use(urlencoded())
app.use(express.static("build"))

const hippieStuff = ["scoby hotel poppin'", "Yerba Mate Tea", "gut-health", "B12 infusion"]

app.get("/api/hippiestuff", (req, res) => {
    try{
        res.send(hippieStuff)

    }
    catch(error){
        console.error(error)
        res.sendStatus(500)
    }
    
});

app.post("/api/hippiestuff", (req, res) => {
    const data = req.body.name
    data.id = hippieStuff.length + 1
    try{
    hippieStuff.push(data)
    res.send(data)
    }
    catch(error){
        console.error(error)
        res.sendStatus(500)
    }

})
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
  });

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))