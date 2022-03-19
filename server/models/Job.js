import mongoose from "mongoose";

const jobListSchema=new mongoose.Schema({
    CompanyName:{
        type:String,
        required:true
    },
    AppliedDate:{
        type:Date,
        required:true
    },
    ApplicationStatus:{
        type:String,
        required:true
    }

});

const JobApplication=mongoose.model("Job_List",jobListSchema);
export default JobApplication;