import React , { useEffect, useState, lazy, Suspense } from 'react';
// import Job from './Job/Job';
const Job = lazy(()=> import('./Job/Job'));
import './Jobs.css';

let locations = ['Delhi', 'Noida', 'Gurugram'];

export default function Jobs(){
    const [uid, setUid] = useState('');
    const [AllJobs, setAllJobs] = useState([]);

    const gettingAlljobs = async ()=>{
        let response = await fetch(`${import.meta.env.VITE_API_URL}jobs/get-jobs`,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'token':`${JSON.parse(localStorage.getItem('info_cc')).message}`
            }
        });
        let data = await response.json();
        setAllJobs(data.message);
        setUid(data.Uid);
    }

    useEffect(()=>{
        gettingAlljobs();
    }, [])

    return(
        <section>
            <div className="job-search-input">
                <input type="text" placeholder='Search by role name...' />
                <input type="text" placeholder='Search by Location...' />
            </div>

            <div className='Jobs-container'>
                {AllJobs && AllJobs.map((data, idx)=><Suspense fallback={<h1>Loading...</h1>}><Job Uid={uid} key={idx} info={data} fxns={{AllJobs, setAllJobs}}/></Suspense>)}
                    {/* <Job/>
                    <Job/> */}

            </div>
        </section>
    )
}