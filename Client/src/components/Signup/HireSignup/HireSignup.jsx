import { useContext, useState } from 'react'
import './HireSignup.css'
import {toast, ToastContainer} from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/userContext';


// default value
const defaultValue = {
    Name:'',
    Email:'',
    MobileNumber:'',
    Password:'',
    ConfirmPassword:''
};

const defaultval = {
    OrganizationName:'',
    OrganizationEmail:'',
    // HiringManagerName:'',
    OrganizationContactNumber:'',
    Password:'',
    ConfirmPassword:''
}

export default function HireSignup(){
    const nav = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const [hiring, setHiring] = useState(true);
    const [searchJob, setSearchJob] = useState(false);
    const [jobSeekerData, setJobSeekerData] = useState(defaultValue)
    const [HirersData, setHirersData] = useState(defaultval);

    if(user){
        nav('/');
        return;
    }

    const HandleHiring = ()=>{
        setSearchJob(false);
        setHiring(true);
    }

    const HandleSearchJob = ()=>{
        setHiring(false);
        setSearchJob(true);
    }

    const HandleJobSeekerformChange = (e)=>{
        // console.log(jobSeekerData)
        setJobSeekerData((prev)=>{
            return {...prev, [e.target.name]: e.target.value};
        })
    }

    const HandleHirersFormChange = (e)=>{
        // console.log(HirersData);
        setHirersData((prev)=>{
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const HandleJobSubmit = async(e)=>{
        e.preventDefault();
        let response = await fetch(`${import.meta.env.VITE_API_URL}`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobSeekerData)
        })
        let data = await response.json();
        setJobSeekerData(defaultValue);
    }

    const HandleHirerSubmit = async(e)=>{
        e.preventDefault();
        let response = await fetch('http://localhost:1313/create-hirer', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(HirersData)
        })
        let data = await response.json();
        // console.log(data);
        setHirersData(defaultval);
    }


    

    return (
        <>
        <div className='signin-up-space'></div>
        <div className='signup-buttons-div'>
            <button className={`${hiring && "shdw-btn dark"}`} onClick={HandleHiring} >Hire</button>
            <button className={`${searchJob && "shdw-btn dark"}`} onClick={HandleSearchJob}>Search for Job</button>
        </div>

        <section className='hiree-signup-container'>

            {/* form for hiring */}
            {hiring && <form action="" onSubmit={HandleHirerSubmit}>
                <p className='signup-heading'>Hire</p>
                <div>
                    <label htmlFor="">Organization Name : </label>
                    <input type="text" value={HirersData.OrganizationName} name='OrganizationName' onChange={HandleHirersFormChange} required/>
                </div>
                <div>
                    <label htmlFor="">Organization Email : </label>
                    <input type="email" value={HirersData.OrganizationEmail} name='OrganizationEmail' onChange={HandleHirersFormChange} required/>
                </div>
                {/* <div>
                    <label htmlFor="">Hiring Manager Name : </label>
                    <input type="text" value={HirersData.HiringManagerName} name='HiringManagerName' onChange={HandleHirersFormChange} required/>
                </div> */}
                <div>
                    <label htmlFor="">Organization Contact No. : </label>
                    <input type="text" value={HirersData.OrganizationContactNumber} name='OrganizationContactNumber' onChange={HandleHirersFormChange} minLength='10' maxLength='10' required/>
                </div>
                <div>
                    <label htmlFor="">Password : </label>
                    <input type="text" className='Password' value={HirersData.Password} name='Password' onChange={HandleHirersFormChange} minLength='8' required/>
                </div>
                <div>
                    <label htmlFor="">Confirm Password : </label>
                    <input type="text" value={HirersData.ConfirmPassword} className='ConfirmPassword' name='ConfirmPassword' onChange={HandleHirersFormChange} minLength='8' required/>
                </div>

                <button className='signin-signup-btn'>Register</button>

                <p>Already have an account? <Link to='/signin'>Signin</Link></p>
            </form>}

            {/* form for job search */}

            {searchJob &&<form action="" onSubmit={HandleJobSubmit}>
                <p className='signup-heading'>Search for Job</p>
                <div>
                    <label htmlFor="">Name : </label>
                    <input type="text" value={jobSeekerData.Name} name='Name' onChange={HandleJobSeekerformChange} required/>
                </div>
                <div>
                    <label htmlFor="">Email : </label>
                    <input type="email" name='Email' value={jobSeekerData.Email} onChange={HandleJobSeekerformChange} required/>
                </div>
                <div>
                    <label htmlFor="">Mobile Number : </label>
                    <input type="text" name='MobileNumber' value={jobSeekerData.MobileNumber} onChange={HandleJobSeekerformChange} minLength='10' maxLength='10' required/>
                </div>
                <div>
                    <label htmlFor="">Password : </label>
                    <input type="text" name='Password' value={jobSeekerData.Password} onChange={HandleJobSeekerformChange} minLength='8' required/>
                </div>

                <div>
                    <label htmlFor="">Confirm Password : </label>
                    <input type="text" value={jobSeekerData.ConfirmPassword} name='ConfirmPassword' onChange={HandleJobSeekerformChange} minLength='8' required/>
                </div>

                <button className='signin-signup-btn'>Register</button>

                <p>Already have an account? <Link to='/signin'>Signin</Link></p>
            </form>}
        </section>
        </>
    )
}