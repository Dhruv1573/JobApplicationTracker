import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from 'body-parser';

import JobApplication from "./models/Job.js";

import Routes from './routes/route.js'

const app=express();
app.use(express.json());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port=4000;

mongoose.connect("mongodb+srv://taskmanager:password12345@cluster0.ouppk.mongodb.net/TaskTrack?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});
app.use('/users',Routes);

// app.post("/insert",async(req,res)=>{
//     const companyName=req.body.companyName;
//     const appliedDate=req.body.appliedDate;
//     const status=req.body.status;
//     const jobList=new JobApplication({CompanyName:companyName,
//         AppliedDate:appliedDate,
//         ApplicationStatus:status});
//     console.log(companyName+appliedDate+status);
//     try{
//         await jobList.save();
//         res.send("Data Inserted");
//     }catch(err){
//         console.log(err);
//     }
// });

// app.get("/read",async(req,res)=>{
//     JobApplication.find({},(err,result)=>{
//         if(err){
//             res.send(err);
//         }

//         res.send(result);
//     })
// });

app.listen(port,()=>
    console.log(`Server is running on port: http://localhost:${port}`)
);
