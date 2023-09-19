import './Hire.css';
import plus from '../../assets/plus.png';
import minus from '../../assets/minus.png';
import { useContext, useEffect, useState } from 'react';
import {UserContext} from '../../context/userContext';

const defaultValue = {
    OrganizationName:'',
    PostTitle:'',
    Country:'',
    State:'',
    City:'',
    Qualification:'',
    Skills:'',
    Experience:''
} 

export default function Hire(){
    let {user, setUser} = useContext(UserContext);
    const [JobDescription, setJobDescription] = useState([{name:'', value:''}]);
    const [jobData, setJobData] = useState(defaultValue);
    const [FullAddress, setFullAddress] = useState('');


    const HandleFormSubmit = async(e)=>{
        e.preventDefault();
        let response = await fetch(`${import.meta.env.VITE_API_URL}jobs/create-Job`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'token':`${JSON.parse(localStorage.getItem('info_cc')).message}`
            },
            body: JSON.stringify({...jobData,FullAddress, JobDescription})
        })
        if(response.status === 401){
            setUser(null);
            localStorage.clear();
        }
        let data = await response.json();
        setJobData(defaultValue);
        setFullAddress('');
        setJobDescription([{name:'', value:''}]);
    }

    let HandleIncreaseInput = (e)=>{
        setJobDescription((prev)=>{
            return [...prev, {name:'', value:''}]
        })
    }

    const HandleJobDesc = (idx,e)=>{
        let data = [...JobDescription];
        data[idx].name = e.target.name;
        data[idx].value = e.target.value;
        setJobDescription(data);
    }

    const HandleJobDeleteDesc = (idx, e)=>{
        let newarr = [...JobDescription];
        newarr.splice(idx, 1)
        setJobDescription(newarr);
    }

    const HandleJobData = (e)=>{
        // console.log(e.target.value)
        setJobData((prev)=>{
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const HandleAddress = (e)=>{
        setFullAddress(e.target.value)
    }



    return(
        <section className='hire-page-container'>
            <form action="" onSubmit={HandleFormSubmit}>
                <p className='post-job-heading'>Post Job</p>
                <div className='flex-clm'>
                    <label htmlFor="">Organization</label>
                    <input type="text" placeholder='Organization name' value={jobData.OrganizationName} onChange={HandleJobData} name='OrganizationName' required/>
                </div>

                <div className='flex-clm'>
                    <label htmlFor="">Post Title</label>
                    <input type="text" name='PostTitle' value={jobData.PostTitle} placeholder='Title...' onChange={HandleJobData} required/>
                </div>

                <div className='flex-clm'>
                    <label htmlFor="">Location : </label>

                    <div className='flex-row flex-wrap location-child-divs'>
                        <div >
                            <label htmlFor="">Country</label>
                            <input type="text" name='Country' placeholder='Country...' value={jobData.Country} onChange={HandleJobData} required/>
                        </div>

                        <div>
                            <label htmlFor="">State</label>
                            <input type="text" name='State' placeholder='State...' value={jobData.State} onChange={HandleJobData} required/>
                        </div>

                        <div>
                            <label htmlFor="">City</label>
                            <input type="text" name='City' placeholder='City...' value={jobData.City} onChange={HandleJobData} required/>
                        </div>
                    </div>
                </div>

                <div className='flex-clm'>
                    <label htmlFor="">Full Address</label>
                    <textarea name="" id="" cols="30" rows="5" value={FullAddress} onChange={HandleAddress}></textarea>
                </div>

                <div className='flex-clm'>
                    <label htmlFor="">Qualification</label>
                    <input type="text" name='Qualification' value={jobData.Qualification} onChange={HandleJobData} required/>
                </div>

                <div className='flex-clm'>
                    <label htmlFor="">Experience Required </label>
                    <input type="text" name='Experience' value={jobData.Experience} onChange={HandleJobData} required/>
                </div>

                <div className='flex-clm'>
                    <label htmlFor="">Skills Requirements <span className='small-font'>( all skills should be comma i.e , seperated )</span></label>
                    <input type="text" name='Skills' value={jobData.Skills} onChange={HandleJobData} required/>
                </div>
                <div id='desc-id' className='flex-clm'>
                    <div>
                        <label htmlFor="">Job Description</label>
                        <img className='adding-input-icon' src={plus} alt="" onClick={HandleIncreaseInput}/>
                    </div>

                    {JobDescription.map((data, idx)=>{
                        return(
                            <div key={idx} className='description-input'>
                                <input name={`desc-${idx}`}  type="text" value={data.value} onChange={(e)=>HandleJobDesc(idx, e)} required/>
                                <img className='adding-input-icon' src={minus} onClick={(e)=>HandleJobDeleteDesc(idx, e)} alt="" />
                            </div>
                        )
                    })}
                    
                    
                </div>

                <button className='post-job'>Post Opportunity</button>
                
            </form>
        </section>
    )
}