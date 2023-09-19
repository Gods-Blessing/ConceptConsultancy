import './Nav.css'
import {Link, useNavigate} from 'react-router-dom'

// images
import avatar from '../../assets/user.png';
import hamburger from '../../assets/hamburger.png'
import sitelogo from '../../assets/site-logo.jpg';
// 
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';



export default function Nav(){
    const {user, setUser} = useContext(UserContext);
    const [visible, setVisible] = useState(false);
    const [ulVisibilty, setulVisibilty] = useState(false);

    const HandleulVis = ()=>{
        setulVisibilty(!ulVisibilty);
    }

    const Signout = ()=>{
        setUser(null);
        localStorage.removeItem('info_cc');
    }


    return (
        <nav className='nav-container'>
            <div className='site-info'>
                <Link to='/'>
                    <img className='site-logo' src={sitelogo} alt="sitelogo" />
                </Link>
                <h1>CCS</h1>
            </div>

            <ul className='other-links'>
                <Link to='/'><li>Home</li></Link>
                {/* <Link to='/'><li>About Us</li></Link> */}
                {
                    (user && user.info.desc === 'hiree')
                    &&
                    <Link to='/hire'><li>Hire</li></Link>
                }
                {/* <Link to='/'><li>Services</li></Link> */}

                {
                    (user && !user.info.desc)
                    &&
                    <Link to='/jobs'><li>Jobs</li></Link>
                }

                {
                    (user && user.info.desc === 'hiree')
                    &&
                    <Link to='/jobs/posted'><li>Jobs Posted</li></Link>
                }
            </ul>

            {/* <input className='search-input' type="text" /> */}

            <div>
                {!user ? <Link className='a-tag' to='./signin'>
                    <div className='login-div'>
                            <img src={avatar} alt="" />
                            <h1>Login</h1>
                    </div>
                </Link> 
                :
                    <div onClick={HandleulVis} className='profile-div'>
                            <img src={avatar} alt="" />
                            <h1 className='user-name'>{user.info.name}</h1>
                        {ulVisibilty && <ul className='hamburger-ul'>
                            <Link to='/user/profile'><li>Profile</li></Link>
                            <Link to='' onClick={Signout}><li>Signout</li></Link>
                        </ul>}
                    </div>
                }

                <div className='hamburger-container'>
                    <img className='hamburger-icon' src={hamburger} alt="" onClick={()=>setVisible(!visible)}/>


                    {visible && <ul className='hamburger-ul'>
                        <Link to='/home'><li>Home</li></Link>
                        <Link to='/home'><li>About Us</li></Link>
                        <Link to='/home'><li>Portfolio</li></Link>
                        <Link to='/home'><li>Page</li></Link>
                        <Link to='/home'><li>Services</li></Link>
                        <Link to='/home'><li>Blog</li></Link>
                    </ul>}
                </div>
            </div>


        </nav>
    )
}