import { JobSeekerUser } from "../models/JobSeekerUserModel.js";
import {Jobs} from '../models/Jobs.js';
import { HiringUser } from "../models/HirereUserModel.js";


// adding the new user to the DB
export const createJobSeeker = async (req, res)=>{
    console.log(req.body);
    // res.end("heyy you are here");
    if(req.body.Password !== req.body.ConfirmPassword){
        return res.status(403).json({
            message: "Password and ConfirmPasword do not match"
        })
    }

    let user = await JobSeekerUser.findOne({Email:req.body.Email});
    if(user){
        return res.status(409).json({
            message: "User already Exist"
        })
    }

    let newUser = await JobSeekerUser.create(req.body);
    console.log(newUser);
    return res.status(201).json({
        message: "User created"
    })
};


// applying for job
export const ApplyTojob = async (req,res)=>{
    let user = await JobSeekerUser.findById(req.userid);
    if(!user){
        return res.status(401).json({
            message: 'UnAuthorized'
        })
    }

    let job = await Jobs.findById(req.params.id);
    if(!job){
        return res.status(203).json({
            message: "Job Doesn't exist"
        })
    }

    if(!job.UsersApplied.includes(req.userid)){
        job.UsersApplied.push(req.userid);
        await job.save();
    }
    if(!user.jobsApplied.includes(req.params.id)){
        user.jobsApplied.push(req.params.id);
        await user.save();
    }
    return res.status(200).json({
        message: "Successfull",
        job:job
    })
}


export const userProfile = async(req, res)=>{
    // console.log("user id=>",req.userid);
    let user;
    user = await JobSeekerUser.findById(req.userid);
    if(!user){
        user = await HiringUser.findById(req.userid);

        if(!user){
            return res.status(404).json({
                message:"UnAuthorized"
            })
        }
    }

    let proUser = user.toJSON();
    delete proUser.Password
    delete proUser.createdAt
    delete proUser.updatedAt
    delete proUser.__v
    return res.status(200).json({
        message: proUser
    })
}

export const editProfile = async (req,res)=>{
    let user = await JobSeekerUser.findById(req.userid);
    if(user.Email != req.body.Email){
        let newuser = await JobSeekerUser.findOne({Email: req.body.Email});
        if(!newuser){
            return res.status(200).json({
                message: "User Exist with this Email"
            })
        }
        user.Email = req.body.Email;
    }

    if(user.MobileNumber != req.body.MobileNumber){
        user.Email = req.body.Email;
    }

    if(user.skills != req.body.skills){
        user.skills = req.body.skills;
    }

    if(user.SchoolName != req.body.SchoolName){
        user.SchoolName = req.body.SchoolName
    }

    if(user.SchoolPercentage != req.body.SchoolPercentage){
        user.SchoolPercentage = req.body.SchoolPercentage
    }

    if(user.SchoolPassingYear != req.body.SchoolPassingYear){
        user.SchoolPassingYear = req.body.SchoolPassingYear
    }

    if(user.InstituteName != req.body.InstituteName){
        user.InstituteName = req.body.InstituteName
    }

    if(user.InstitutePercentage != req.body.InstitutePercentage){
        user.InstitutePercentage = req.body.InstitutePercentage
    }

    if(user.InstitutePassingYear != req.body.InstitutePassingYear){
        user.InstitutePassingYear = req.body.InstitutePassingYear
    }

    if(user.ExperienceYrs != req.body.ExperienceYrs){
        user.ExperienceYrs = req.body.ExperienceYrs
    }

    if(user.PreviousExperience != req.body.PreviousExperience){
        user.PreviousExperience = req.body.PreviousExperience
    }

    await user.save()

    let proUser = user.toJSON();
    delete proUser.Password
    delete proUser.createdAt
    delete proUser.updatedAt
    delete proUser.__v

    return res.status(200).json({
        message: proUser
    })
}


