import './Footer.css';
import sitelogo from '../../assets/site-logo.jpg'
import { Link } from 'react-router-dom';

export default function Footer(){

    return(
        <footer className='footer-container'>
            <img className='footer-img' src={sitelogo} alt="" />

            <ul className='footer-links align-strt'>
                <h2>Quick Links</h2>
                <li>Home</li>
                <li>FAQs</li>
                <li>Products</li>
                <li>Blog</li>
                <li>Privacy Policy</li>
                <li>Careers</li>
            </ul>

            <div className='align-strt'>
                <h1>Address</h1>
                <p>Mayur Vihar, Phase-3,</p>
                <p>Delhi-110096</p>
                <p className='mt'>Founder : Varun Kulasari</p>
                <p>Co-Founder : Hitesh Kulasari</p>

                <p className='mt'><span className='contact-title'>Email : </span> <a href='mailto:business@conceptconsultant.asia'>business@conceptconsultant.asia</a></p>

                <p className='mt'><span className='contact-title'>Phone : </span> <a href='tel:+918800101994'>+918800101994, +919667664754</a></p>

                <div>
                    
                </div>
            </div>
        </footer>
    )
}