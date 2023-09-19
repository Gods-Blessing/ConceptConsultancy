import { useContext, useEffect } from 'react';
import './Job.css';
import { UserContext } from '../../../context/userContext';

export default function Job({info, Uid, fxns}){
    const {user, setUser} = useContext(UserContext);

    const ApplyForJob = async(id)=>{
        let response = await fetch(`http://localhost:1313/${id}`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'token':`${JSON.parse(localStorage.getItem('info_cc')).message}`
            }
        });
        let data = await response.json();
        if(response.status == 200){
            let idx = fxns.AllJobs.indexOf(info);
            let newarr = [...fxns.AllJobs];
            newarr[idx] = data.job;
            fxns.setAllJobs(newarr);
        }
    }

    const deletejob = async(id)=>{
        let response = await fetch(`${import.meta.env.VITE_API_URL}jobs/delete/job/${id}`, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'token':`${JSON.parse(localStorage.getItem('info_cc')).message}`
            }
        });
        let data = await response.json();
        if(response.status == 200){
            fxns.setHrJobs(data.message);
        }
    }
    
    return(
        <div className='job-desc-container'>
            <div className="job-header">
                <h1 className='job-title first-letr-cap'><u>
                        {info.PostTitle}
                    </u>
                </h1>

                <div className="job-company-location">
                    <div>
                        <p className='first-letr-cap'>
                        {info.State}
                        </p>
                    </div>
                </div>
                
            </div>
            <div>
                <p className='first-letr-cap'>
                    <span className='desc-title'>
                    Organization Name :
                    </span> &nbsp; &nbsp; 
                    {info.OrganizationName}
                </p>
            </div>

            <div>
                <p className='desc-title'>Skills :</p>
                <p className='job-desc'>{info.Skills}</p>
            </div>

            <div>
                <p className='desc-title'>Responsibilities : </p>
                <ul className='job-desc job-desc-ul'>
                    {info.JobDescription.map((data, idx)=><li key={`desc-${idx}`} className='first-letr-cap'>{data.value}</li>)}
                </ul>
            </div>

            {   (user && !user.info.desc )
                    &&
                <>
                <button className='apply-btn' onClick={()=>ApplyForJob(info._id)} disabled={info.UsersApplied.includes(Uid) ? true:false}>Apply</button>
                {info.UsersApplied.includes(Uid) && <p className='already-applied'>Already Applied</p>}
                </>
            }

            {   (user && user.info.desc && user.info.desc === 'hiree' && info.CreatedBy == Uid)
                    &&
                <button className='apply-btn' onClick={()=>deletejob(info._id)} disabled={info.UsersApplied.includes(Uid) ? true:false}>Delete</button>
            }
        </div>
    )
}