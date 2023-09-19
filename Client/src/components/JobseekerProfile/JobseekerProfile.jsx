import './JobseekerProfile.css'

import React, {useContext, useEffect, useState} from "react";
import {UserContext} from '../../context/userContext';

let initialValue = {
    Email:'',
    MobileNumber:'',
    skills:'',
    SchoolName:'',
    SchoolPercentage:'',
    SchoolPassingYear:'',
    InstituteName:'',
    InstitutePercentage:'',
    InstitutePassingYear:'',
    ExperienceYrs:'',
    PreviousExperience:''
}

export default function JobseekerProfile(){
    let {user, setUser} = useContext(UserContext);
    // console.log(user);
    const [showForm, setShowForm] = useState(false);
    const [UserProfile, setUserProfile] = useState(null);
    const [formData, setFormData] = useState(initialValue);

    const [orgForm, setOrgForm] = useState({
        OrganizationEmail:'',
        OrganizationContactNumber:''
    });

    const handleFormData = (e)=>{
        setFormData((prev)=>{
            return {...prev, [e.target.name]: e.target.value};
        })
    }

    const HandleOrgForm = (e)=>{
        setOrgForm((prev)=>{
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const HandleEdit = ()=>{
        setShowForm(!showForm);
    }

    const HandleJobseekerPrffrm = async(e)=>{
        e.preventDefault();
        let response = await fetch(`${import.meta.env.VITE_API_URL}user/edit/profile`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'token':`${JSON.parse(localStorage.getItem('info_cc')).message}`
            },
            body: JSON.stringify({...formData})
        })
        let data = await response.json();
        if(response.status == 200){
            setUserProfile(data.message);
            setFormData(data.message);
        }
    }

    const HandleJobHirerfrm = async(e)=>{
        e.preventDefault();
        let response = await fetch(`${import.meta.env.VITE_API_URL}hire/edit/profile`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'token':`${JSON.parse(localStorage.getItem('info_cc')).message}`
            },
            body: JSON.stringify({...orgForm})
        })
        let data = await response.json();
        if(response.status == 200){
            setUserProfile(data.message);
            setOrgForm(data.message);
        }
    }

    const gettingUser = async ()=>{
        let response = await fetch(`${import.meta.env.VITE_API_URL}user/search/job/profile`,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'token':`${JSON.parse(localStorage.getItem('info_cc')).message}`
            }
        });
        if(response.status === 404){
            setUser(null);
            localStorage.clear();
        }
        if(response.status === 200){
            let data = await response.json();
            // console.log();
            setUserProfile(data.message);
            if(JSON.parse(localStorage.getItem('info_cc')).info.desc){
                setOrgForm(data.message);
            }else{
                setFormData(data.message);
            }
        }
    }

    // console.log(JSON.parse(localStorage.getItem('info_cc')).info);

    console.log(UserProfile);

    useEffect(()=>{
        gettingUser();
    }, [])

    return(
        <div className='profile-container'>
            <button className='editing-btn' onClick={HandleEdit}>{showForm ? 'Back':'Edit'}</button>

            {/* for job seeker */}
            {(!showForm 
                &&
                (localStorage.key('info_cc')) 
                    &&
                    !(JSON.parse(localStorage.getItem('info_cc')).info.desc)
                &&
                !user.info.desc) && <div className="bio-info-div">

                <div className='small-info-divs'>
                    <p>Name :</p>
                    <p className='userr-name'>{UserProfile && UserProfile.Name}</p>
                </div>

                <div className='small-info-divs'>
                    <p>Email :</p>
                    <p>{UserProfile && UserProfile.Email}</p>
                </div>

                <div className='small-info-divs'>
                    <p>Mobile Number :</p>
                    <p>{UserProfile && UserProfile.MobileNumber}</p>
                </div>

                <div className='small-info-divs'>
                    <p>Skills :</p>
                    <p>{(UserProfile && UserProfile.skills && UserProfile.skills.length > 0) ? UserProfile.skills.toString() : "Empty"}</p>
                </div>

                <div>
                    <p>12th :</p>
                    <div className='small-info-divs'>
                        <p className='profile-info-sub-headings'>School :</p>
                        <p>{(UserProfile && UserProfile.SchoolName ) ? UserProfile.SchoolName : "Empty"}</p>
                    </div>

                    <div className='small-info-divs'>
                        <p className='profile-info-sub-headings'>12th % :</p>
                        <p>{(UserProfile && UserProfile.SchoolPercentage) ? UserProfile.SchoolPercentage : "Empty"}</p>
                    </div>

                    <div className='small-info-divs'>
                        <p className='profile-info-sub-headings'>Passing Year :</p>
                        <p>{(UserProfile && UserProfile.SchoolPassingYear) ? UserProfile.SchoolPassingYear : "Empty"}</p>
                    </div>
                </div>


                <div>
                    <p>Graduation :</p>
                    <div className='small-info-divs'>
                        <p className='profile-info-sub-headings'>College/Institute :</p>
                        <p>{(UserProfile && UserProfile.InstituteName) ? UserProfile.InstituteName : "Empty"}</p>
                    </div>

                    <div className='small-info-divs'>
                        <p className='profile-info-sub-headings'>Marks in % :</p>
                        <p>{(UserProfile && UserProfile.InstitutePercentage) ? UserProfile.InstitutePercentage : "Empty"}</p>
                    </div>

                    <div className='small-info-divs'>
                        <p className='profile-info-sub-headings'>Year of Passing :</p>
                        <p>{(UserProfile && UserProfile.InstitutePassingYear) ? UserProfile.InstitutePassingYear : "Empty"}</p>
                    </div>
                </div>


                <div>
                    <p>Experience Description :</p>
                    <p>{(UserProfile && UserProfile.PreviousExperience) ? UserProfile.PreviousExperience : "Empty"}</p>
                </div>
            </div>}

            {/* for hirers */}
            {(!showForm &&
                (localStorage.key('info_cc')) 
                &&
                (JSON.parse(localStorage.getItem('info_cc')).info.desc)
            ) && 
            <div className="bio-info-div">
                <div className='small-info-divs'>
                    <p>Organization Name :</p>
                    <p className='userr-name'>{UserProfile && UserProfile.OrganizationName}</p>
                </div>

                <div className='small-info-divs'>
                    <p>Organization Email :</p>
                    <p className=''>{UserProfile && UserProfile.OrganizationEmail}</p>
                </div>

                <div className='small-info-divs'>
                    <p>Contact Number :</p>
                    <p className=''>{UserProfile && UserProfile.OrganizationContactNumber}</p>
                </div>


            </div>
            }

{/* Form for Making Changes in the Profile */}
            {(showForm && !user.info.desc) && <form onSubmit={HandleJobseekerPrffrm}  className='profile-editing-form' action="">
                <div className='d-flex'>
                    <p className='users-name-label'>Name :</p>
                    <p className='users-name'>{UserProfile && UserProfile.Name}</p>
                </div>
                
                <div>
                    <label htmlFor="" >Email :</label>
                    <input onChange={handleFormData} type="text" name="Email" value={formData.Email}/>
                </div>

                <div>
                    <label htmlFor="" >Mobile Number :</label>
                    <input onChange={handleFormData} type="text" name="MobileNumber" value={formData.MobileNumber}/>
                </div>

                <div>
                    <label htmlFor="" >Skills : &nbsp;  &nbsp; <span>Skills should be comma seperated</span></label>
                    <input onChange={handleFormData} type="text" name="skills" value={formData.skills && formData.skills.toString()}/>
                </div>

                <div>
                    <label htmlFor="">12th :</label>
                    <input onChange={handleFormData} type="text" placeholder="School Name"
                    name='SchoolName'
                    value={formData.SchoolName && formData.SchoolName}/>
                    <input onChange={handleFormData} type="text" placeholder="Marks in %" name='SchoolPercentage'  value={formData.SchoolPercentage && formData.SchoolPercentage}/>
                    <input onChange={handleFormData} type="text" placeholder="Year of Passing"
                    name='SchoolPassingYear'
                    value={formData.SchoolPassingYear && formData.SchoolPassingYear}/>
                </div>

                <div>
                    <label htmlFor="">Graduation :</label>
                    <input onChange={handleFormData} type="text" placeholder="College/Institute Name" name='InstituteName' value={formData.InstituteName}/>
                    <input onChange={handleFormData} type="text" placeholder="Marks in %" name='InstitutePercentage' value={formData.InstitutePercentage}/>
                    <input onChange={handleFormData} type="text" placeholder="Year of Passing"  name='InstitutePassingYear' value={formData.InstitutePassingYear}/>
                </div>

                <div>
                    <label htmlFor="">Years of Experience :</label>
                    <input onChange={handleFormData} type="text" name="ExperienceYrs" id="" value={formData.ExperienceYrs}/>
                </div>
                
                <div>
                    <label htmlFor="">Description :</label>
                    <textarea onChange={handleFormData} name="PreviousExperience" id="" cols="30" rows="10" placeholder="Describe Previous experience or Previous job role" value={formData.PreviousExperience}></textarea>
                    
                </div>

                <button>Submit</button>
            </form>}

            {(showForm && 
                    (localStorage.key('info_cc')) 
                    &&
                    (JSON.parse(localStorage.getItem('info_cc')).info.desc)
                &&
                user.info.desc) &&
                <form onSubmit={HandleJobHirerfrm}  className='profile-editing-form' action="">
                <div className='d-flex'>
                    <p className='users-name-label'>Organization Name :</p>
                    <p className='users-name'>{UserProfile.OrganizationName}</p>
                </div>
                
                <div>
                    <label htmlFor="" >Organization Email :</label>
                    <input onChange={HandleOrgForm} type="text" name="OrganizationEmail" value={orgForm.OrganizationEmail}/>
                </div>

                <div>
                    <label htmlFor="" >Contact Number :</label>
                    <input onChange={HandleOrgForm} type="text" name="OrganizationContactNumber" value={orgForm.OrganizationContactNumber}/>
                </div>

                <button>Submit</button>
            </form>
            }
        </div>
    )
}