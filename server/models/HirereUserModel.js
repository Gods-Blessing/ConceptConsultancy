import mongoose from "mongoose";

const HiringUserSchema = new mongoose.Schema({
    OrganizationName:{
        type: String,
        required: true
    },
    OrganizationEmail:{
        type: String,
        required: true
    },
    // HiringManagerName:{
    //     type: String
    // },
    OrganizationContactNumber:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    JobsPosted:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Jobs'
        }
    ]
}, {timestamps: true});

export const HiringUser = mongoose.model('HiringUser', HiringUserSchema);

 