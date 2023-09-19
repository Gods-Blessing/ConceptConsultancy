import {Jobs} from '../models/Jobs.js';
import {HiringUser} from '../models/HirereUserModel.js';
import {JobSeekerUser} from '../models/JobSeekerUserModel.js';

export const CreateJobs = async (req,res)=>{
    let jobCreatingUser = await HiringUser.findById(req.userid);

    if(!jobCreatingUser){
        return res.status(401).json({
            message: 'UnAuthorized'
        })
    }
    
    let job = await Jobs.create(req.body);
    job.CreatedBy = jobCreatingUser._id;
    await job.save();    
    jobCreatingUser.JobsPosted.push(job._id);
    await jobCreatingUser.save();
    return res.status(200).json({
        message: "Successfull"
    })
}

export const getAllJobs = async(req,res)=>{
    console.log(req.userid);
    let user = await JobSeekerUser.findById(req.userid);
    // if(!user){
    //     return res.status(401).json({
    //         message: 'UnAuthorized'
    //     })
    // }
    let jobs = await Jobs.find();
    // let newData = jobs.map((data)=>{ return {...data, [data._id]:undefined}});
    //     console.log("newdata",newData);
    return res.status(200).json({
        message: jobs,
        Uid: req.userid
    })
}

export const DeleteJob = async(req,res)=>{
    let jobb = await Jobs.findById(req.params.id);
    if(!jobb){
        return res.status(401).json({
            message: "job doesn't exist"
        })
    }
    if(jobb){
        for(let i = 0; i < jobb.UsersApplied.length; i++){
            let userApplied = await JobSeekerUser.findById(jobb.UsersApplied[i]._id);
            let idx = userApplied.jobsApplied.indexOf(jobb.id);
            userApplied.jobsApplied.splice(idx, 1);
            await userApplied.save();
        }
    }
    if(jobb.CreatedBy != req.userid){
        return res.status(401).json({
            message: "UnAuthorized"
        })
    }
    jobb = await Jobs.findByIdAndDelete(req.params.id);

    let user = await HiringUser.findById(req.userid);
    let idx = user.JobsPosted.indexOf(req.params);
    user.JobsPosted.splice(idx, 1);
    await user.save();
    
    return res.status(200).json({
        message: user.JobsPosted
    })
}

