import mongoose from "mongoose";

const JobSeekerUserSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type:String,
        required:true
    },
    MobileNumber:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    skills:{type:String},
    jobsApplied:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Jobs'
        }
    ],
    SchoolName:{
        type: String
    },
    SchoolPercentage:{
        type: String
    },
    SchoolPassingYear:{
        type: String
    },
    InstituteName:{
        type: String
    },
    InstitutePercentage:{
        type: String
    },
    InstitutePassingYear:{
        type: String
    },
    ExperienceYrs:{
        type: String
    },
    PreviousExperience:{
        type: String
    },
}, {timestamps: true});

export const JobSeekerUser = mongoose.model('JobSeekerUser', JobSeekerUserSchema);

 