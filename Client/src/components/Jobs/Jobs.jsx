import React , { useEffect, useState, lazy, Suspense, useCallback } from 'react';
// import Job from './Job/Job';
const Job = lazy(()=> import('./Job/Job'));
import './Jobs.css';

let locations = ['Delhi', 'Noida', 'Gurugram'];

export default function Jobs(){
    const [uid, setUid] = useState('');
    const [AllJobs, setAllJobs] = useState([]);
    const [filterForm, setFilterForm] = useState({State:'',PostTitle:'' });

    const HandleFormFilter = (e)=>{
        setFilterForm((prev)=>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    const gettingAlljobs = useCallback(async ()=>{
        let response = await fetch(`${import.meta.env.VITE_API_URL}jobs/get-jobs/?State=${filterForm.State}&PostTitle=${filterForm.PostTitle}`,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'token':`${JSON.parse(localStorage.getItem('info_cc')).message}`
            }
        });
        let data = await response.json();
        setAllJobs(data.message);
        setUid(data.Uid);
    }, [filterForm]);

    useEffect(()=>{
        gettingAlljobs();
    }, [filterForm])

    return(
        <section>
            <div className="job-search-input">
                <input onChange={HandleFormFilter} type="text" placeholder='Search by Post Name...' name='PostTitle'/>
                <input onChange={HandleFormFilter} type="text" placeholder='Search by state...' name='State'/>
            </div>

            <div className='Jobs-container'>
                {AllJobs && AllJobs.map((data, idx)=><Suspense key={idx} fallback={<h1>Loading...</h1>}><Job Uid={uid} key={idx} info={data} fxns={{AllJobs, setAllJobs}}/></Suspense>)}
                    {/* <Job/>
                    <Job/> */}

            </div>
        </section>
    )
}