import './Footer.css';
import sitelogo from '../../assets/site-logo.jpg'

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
                <p>D1 75A Ground-Floor,</p>
                <p> Kondli, Mayur Vihar, Phase-3,</p>
                <p>Delhi-110096</p>

                <p className='mt'><span className='contact-title'>Email : </span> <span>business@conceptconsultant.asia</span></p>

                <p className='mt'><span className='contact-title'>Phone : </span> <span>+918800101994, +919667664754</span></p>

                <div>
                    
                </div>
            </div>
        </footer>
    )
}