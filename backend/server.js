import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connect
connectDB();


app.get('/',(req,res)=>{
    res.send('API working')
})

app.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`)
})