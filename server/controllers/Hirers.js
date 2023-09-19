import {HiringUser} from '../models/HirereUserModel.js';

// create a  hirer
export const createHirer = async (req,res)=>{
    console.log(req.body);
    if(req.body.Password !== req.body.ConfirmPassword){
        return res.status(403).json({
            message: "Password and ConfirmPasword do not match"
        })
    }

    let user = await HiringUser.findOne({OrganizationEmail:req.body.OrganizationEmail});
    if(user){
        return res.status(409).json({
            message: "User already Exist"
        })
    }

    let newUser = await HiringUser.create(req.body);
    console.log(newUser);
    return res.status(201).json({
        message: "User created"
    })
}

// edit hirers profile
export const editProfile = async (req,res)=>{
    console.log("BoDY =>> ",req.body);
    let user = await HiringUser.findById(req.userid);
    if(user.Email != req.body.Email && req.body.Email != ''){
        let newuser = await HiringUser.findOne({OrganizationEmail: req.body.OrganizationEmail});
        if(!newuser){
            return res.status(200).json({
                message: "User Exist with this Email"
            })
        }
        user.OrganizationEmail = req.body.OrganizationEmail;
    }

    if(user.OrganizationContactNumber != req.body.OrganizationContactNumber && req.body.OrganizationContactNumber != ''){
        user.OrganizationContactNumber = req.body.OrganizationContactNumber;
    }

    await user.save()

    let proUser = user.toJSON();
    delete proUser.Password
    delete proUser.createdAt
    delete proUser.updatedAt;
    delete proUser.__v;

    return res.status(200).json({
        message: proUser
    })
}

// get all jobs by hr
export const allJobsbyHr = async (req,res)=>{
    // console.log(req.userid);
    let user = await HiringUser.findById(req.userid);
    await user.populate({path:'JobsPosted'});

    return res.status(200).json({
        message: user.JobsPosted,
        Uid: user.id
    })
}