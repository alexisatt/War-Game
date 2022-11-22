import express from 'express';
const app = express();

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import {getData, updateData} from './connection.js'

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static("public/assets"));

// HTML Routes

app.get('/start', (req,res)=> {
    res.sendFile(path.join(__dirname, "./public/assets/start.html"));
});
app.get('/war', (req,res)=> {
    res.sendFile(path.join(__dirname, "./public/assets/index.html"));
});

// Data
app.get("/data", async (req,res)=> {
    const data = await getData()
    res.json(data)
})
app.post("/data",async (req, res) => {
    const {name, score} = req.body
    const data = await createData(name, score)
    res.json(data)
})
app.put("/data/:id", async (req,res) => {
    console.log('body')
    console.log(req.body)
    req.body= JSON.parse(req.body)
    const {score, id} = req.body
    const data = await updateData(score, id)
    res.json(data)
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something Broke!')
})


app.listen(7979, ()=> {
    console.log('Server is running on port 9191')
})



