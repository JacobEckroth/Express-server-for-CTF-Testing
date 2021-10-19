const express = require('express');


const app = express();
app.use(express.json());
const port = 3000;

app.post('/post',(req,res)=>{
    console.log("got a post!");
    console.log(req.body);
    res.status(200).send(req.body);
})
app.post('*',(req,res)=>{
    console.log("got a random post");
    res.sendStatus(404);
})
app.get('/get',(req,res)=>{

    let data = [
        {
            deviceID: '6b2f1ac96c691229',
            latitude: 0.0001,
            longitude: -122.084
        },
        {
            deviceID: '6bdafsda2f1ac96c691229',
            latitude: 37.421998333333335,
            longitude: -122.084
        },
        {
            deviceID: '6bdaffdsasda2f1ac96c691229',
            latitude: 3232.42192133333335,
            longitude: -122.2320846
        }
    ]

    console.log("got a get!");
    res.status(200).send(JSON.stringify(data));
})
app.get('*',(req,res)=>{
    res.send("bye bye");
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})