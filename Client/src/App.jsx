import { useContext, useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'

import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Jobs from './components/Jobs/Jobs';
import Hire from './components/Hire/Hire';
import Signin from './components/Signin/Signin';
import HireSignup from './components/Signup/HireSignup/HireSignup';

// import context
import { UserContext, UserContextProvider } from './context/userContext';
import JobseekerProfile from './components/JobseekerProfile/JobseekerProfile';
import AllJobsbyhr from './components/AllJobsbyhr/AllJobsbyhr';

function App() {
  let user = useContext(UserContext);


  return (
    <>
    <UserContextProvider>
      {/* <BrowserRouter> */}
        <Nav/>
        <div className='spacer'></div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<HireSignup/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/hire' element={<Hire/>}/>
        <Route path='/user/profile' element={<JobseekerProfile/>}/>
        <Route path='/jobs/posted' element={<AllJobsbyhr/>}/>
      </Routes>
      {/* </BrowserRouter> */}
    </UserContextProvider>
    </>
  )
}

export default App
