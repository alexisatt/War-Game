import express from 'express';
const app = express();

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import {getData} from './server.js'
const router = express.Router();

// HTML Routes
app.use('/', router)

router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, "../start.html"));
})
router.get('/war', (req,res)=> {
    res.sendFile(path.join(__dirname, "../index.html"));
})
router.get('/score', (req,res)=> {
    res.sendFile(path.join(__dirname, "../finalScore.html"));
})

// Data
export async function sendStats(){


app.get("/data", (req,res)=> {
    const data = getData()
    res.json(data)
})
app.post("/data",(req, res) => {
    const {name, score} = req.body
    const data = createData(name, score)
    res.json(data)
} )
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something Broke!')
})
app.listen(7575, ()=> {
    console.log('Server is running on port 9191')
})
}
const data = await sendStats();

