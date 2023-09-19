import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Home.css'
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';


export default function Home(){


    return(
        <main className='main-container'>
            <div className='main-first-div'>
                <p>
                    <span className='heading'>
                        Concept consultant service
                    </span> <br /> 
                    <span className='heading-about m-l-5rem'>
                        is a global management and technology consulting firm
                    </span>  <br />
                    <span className='heading-about m-l-10rem'>
                        specializing in strategic profitability improvement, digital transformation, and advisory services.
                    </span>
                </p>
            </div>

            <div className='goals-div'> 
                <div>
                    <h1>Mission</h1>
                    <p>
                    Increase client profitability with a priority of not reducing people.
                    </p>
                </div>

                <div>
                    <h1>Vision</h1>
                    <p>
                        To be a premier management and technology consulting firm that Global 1000 companies rely on to solve their most complex business performance issues.
                    </p>
                </div>

                <div>
                    <h1>Purpose</h1>
                    <p>
                    We believe in the value of people. We believe company success is truly realized through the enrichment and empowerment of its people.
                    </p>
                </div>
            </div>

            <div className='difference-div'>
                <h1>How are we different ?</h1>
                <div>
                    <span className='difference-span-heading'>Market Intelligence</span>
                    <p className='difference-ctnt'>Our proprietary Knowledge Management Center is a repository of intellectual property covering thousands of projects.</p>
                </div>

                <div className='difference-flex'>
                    <div>
                        <span className='difference-span-heading'>Data-Driven Strategies</span>
                        <p className='difference-ctnt'>The data scientists at our Center of Data Excellence (CODE) reside at the heart of our company. We use big data to drive measurable results.</p>
                    </div>

                    <div>
                        <span className='difference-span-heading'>We Implement</span>
                        <p className='difference-ctnt'>We devise and implement strategies, start to finish. Then, we work alongside your team for a smooth transition and sustainable future.</p>
                    </div>
                </div>
                <div>
                        <p className="difference-span-heading">Guarateed Results</p>
                        <p className='difference-ctnt'>
                            Guaranteed minimum ROI on savings offers zero financial risk.  We have never missed a guarantee.
                        </p>
                    </div>
            </div>

            <div className="we-work-on">
                <p className="we-work-heading">Our Guiding Principles</p>
                <p className="we-work-ctnt">
                    In Greek, signifies excellence, goodness, and virtue. "Concept consultant service" embodies these values and is guided by the following principles:
                </p>

                <div className='main-card-container'>
                    <div className='card-container'>
                        <div className='card'>
                            <div className='front'>
                                <p className="we-work-ctn-heading">
                                    Excellence
                                </p>
                            </div>

                            <div className="back">
                                <p>
                                    We expect excellence, goodness, and virtue from each other and for our clients.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container'>
                        <div className='card'>
                            <div className='front'>
                                <p className="we-work-ctn-heading">
                                Passion
                                </p>
                            </div>

                            <div className="back">
                                <p>
                                We are fueled by enthusiasm, determination, ambition, and strength to find unique solutions to complex problems.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container'>
                        <div className='card'>
                            <div className='front'>
                                <p className="we-work-ctn-heading">
                                Loyalty to Clients
                                </p>
                            </div>

                            <div className="back">
                                <p>
                                We believe our clients are partners for life, so we prioritize collaboration and ensure that our performance leaves lasting impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container'>
                        <div className='card'>
                            <div className='front'>
                                <p className="we-work-ctn-heading">
                                Stewardship
                                </p>
                            </div>

                            <div className="back">
                                <p>
                                We align individual career goals and corporate objectives for the betterment of current and future team members.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container'>
                        <div className='card'>
                            <div className='front'>
                                <p className="we-work-ctn-heading">
                                Family
                                </p>
                            </div>

                            <div className="back">
                                <p>
                                We understand the importance of family. We enable our team to enjoy personal time while also pursuing a career.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container'>
                        <div className='card'>
                            <div className='front'>
                                <p className="we-work-ctn-heading">
                                Community
                                </p>
                            </div>

                            <div className="back">
                                <p>
                                We make a positive, measurable impact on our communities through collective volunteer opportunities and individual contributions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container'>
                        <div className='card'>
                            <div className='front'>
                                <p className="we-work-ctn-heading">
                                Sustainability
                                </p>
                            </div>

                            <div className="back">
                                <p>
                                We are committed to safeguarding our environment and conserving natural resources to preserve the world for future generations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card-container'>
                        <div className='card'>
                            <div className='front'>
                                <p className="we-work-ctn-heading">
                                Inclusion
                                </p>
                            </div>

                            <div className="back">
                                <p>
                                We encourage and empower diverse voices to cultivate an environment of belonging for all.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

            <Footer/>
        </main>
    )
}