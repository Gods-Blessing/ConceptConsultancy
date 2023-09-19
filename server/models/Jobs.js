import mongoose from "mongoose";

const JobsSchema = new mongoose.Schema({
    OrganizationName:{
        type: String,
        required: true
    },
    PostTitle:{
        type: String,
        required: true
    },
    Experience:{
        type: String,
        required: true
    },
    Country:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    CreatedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HiringUser'
    }
    ,
    FullAddress:{
        type: String,
        required: true
    },
    Qualification:{
        type: String,
        required: true
    },
    Skills:{
        type: String,
        required: true
    },
    JobDescription:[{type:Object}],
    UsersApplied:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'JobSeekerUser'
        }
    ]

}, {timestamps: true});

export const Jobs = mongoose.model('Jobs', JobsSchema);

 