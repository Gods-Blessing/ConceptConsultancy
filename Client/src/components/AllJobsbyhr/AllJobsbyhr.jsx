import { useEffect, useState,lazy, Suspense } from "react";
// import Job from "../Jobs/Job/Job";
const Job = lazy(()=> import('../Jobs/Job/Job'));

export default function AllJobsbyhr(){
    const [uid, setUid] = useState('');
    const [hrJobs, setHrJobs] = useState([]);

    const gettingAlljobs = async ()=>{
        let response = await fetch(`${import.meta.env.VITE_API_URL}all/jobs/byhr`,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'token':`${JSON.parse(localStorage.getItem('info_cc')).message}`
            }
        });
        let data = await response.json();
        setHrJobs(data.message);
        setUid(data.Uid);
    }

    useEffect(()=>{
        gettingAlljobs();
    }, [])

    return(
        <section>
            <div className='Jobs-container'>
                {hrJobs.length == 0 && <h1>No Jobs Posted</h1>}
                {hrJobs && hrJobs.map((data, idx)=><Suspense fallback={<h1>Loading...</h1>}><Job Uid={uid} key={idx} info={data} fxns={{hrJobs, setHrJobs}}/></Suspense>)}
                    {/* <Job/>
                    <Job/> */}

            </div>
        </section>
    )
}