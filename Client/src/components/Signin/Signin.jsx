import { Link, useNavigate, redirect, Navigate } from 'react-router-dom';
import './Signin.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';

export default function Signin(){
    const nav = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const [error, setError] = useState(null);
    const [userDetail, setUserDetail] = useState({email:'', password: ''});

    if(user) {
        nav("/");
        return
    }

    const HandleChange = (e)=>{
        // console.log(userDetail);
        setUserDetail((prev)=>{
            return {...prev, [e.target.name]: e.target.value};
        });
    }

    const HandleSigninSubmit = async(e)=>{
        e.preventDefault();
        // console.log(userDetail);
        let response = await fetch(`${import.meta.env.VITE_API_URL}signin`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetail)
        })
        console.log(response.status);
         if(response.status === 200){
            let data = await response.json();
            localStorage.setItem('info_cc', JSON.stringify(data))
            setUser(data)
            nav('/');
            setUserDetail({email:'', password: ''});
        }else{
            setError('Email or Password is wrong')
        }
    }


    return (
        <>
        <div className='signin-up-space'></div>
        <section className='signin-container'>
            <form action="" onSubmit={HandleSigninSubmit}>
            <p className='signin-heading'>Signin</p>
                <div>
                    <label htmlFor="">Registered Email : </label>
                    <input type="text" name='email' onChange={HandleChange} value={userDetail.email} required/>
                </div>
                <div>
                    <label htmlFor="">Password : </label>
                    <input type="text" name='password' onChange={HandleChange} value={userDetail.password} required/>
                </div>
                {error && <p className='error'>* Email or Password is wrong</p>}
                <button className='signin-signup-btn'>Signin</button>

                <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
            </form>
        </section>
        </>
    )
}