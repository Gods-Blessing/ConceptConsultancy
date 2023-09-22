import {creatingToken} from '../config/jwt.js'
import {JobSeekerUser} from '../models/JobSeekerUserModel.js'
import {HiringUser} from '../models/HirereUserModel.js';

export const singin = async(req, res)=>{
    console.log(req.body);
    let jobseeker = await JobSeekerUser.findOne({Email: req.body.email});
    // console.log(jobseeker);

    if(jobseeker){
        if(jobseeker.Password !== req.body.password){
            return res.status(403).json({
                message: 'Username or Password mismatch.'
            })
        }
        let token = creatingToken(jobseeker._id);
        // console.log(token);

        return res.status(200).json({
            message: token,
            info:{
                name:jobseeker.Name
            }
        })
    }

    let hiringuser = await HiringUser.findOne({OrganizationEmail: req.body.email});
    if(hiringuser){
        if(hiringuser.Password !== req.body.password){
            return res.status(403).json({
                message: 'Username or Password mismatch.'
            })
        }
        let token = creatingToken(hiringuser._id);

        return res.status(200).json({
            message: token,
            info:{
                name: hiringuser.OrganizationName,
                desc: 'hiree'
            }
        })
    }

    return res.status(404).json({
        message: 'No such user Exist'
    })
}