import express  from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index";


const app=express();
dotenv.config()
app.use(bodyParser.json())
app.use("/api/v1",router)

const port=process.env.PORT
const db=process.env.DATABASE
// configure  our server
const stertserver=()=>{
    app.listen(port,()=>{
        console.log(`port running on ${port}`)
    })
}
// configure database
const connect=()=>{
    mongoose.connect(db,{

    })
}

Promise.all([stertserver(),connect()]).then(()=>{
    console.log(`port running on .... ${port}`)
    console.log(`database successfuly connected`)
})
.catch((error)=>{
    console.log(error)
})
export default app;
