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
                    <span className='heading underline'>
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

            <div className='commitment-div'>
                <div>
                    <h2>
                        <u>
                            Concept consultant service provides skillful and experienced talent.
                        </u>
                    </h2>

                    <p className='line-ht-1rem'>
                        For Staffing new IT/Non-IT projects or for helping you during peak times, our information technology recruiters will quickly provide you with industry's best IT/Non-IT professionals-even an entire team-with the right expertise, skills and knowledge. 
                    </p>
                </div>

                <i>we are committed to helping capable and qualified candidates succeed in finding rewarding careers with reputable employers.</i>

                <div>
                    <p>IT Recruitment Services</p>
                    <p>IT Recruitment and Staffing refers to the engagement of a recruitment agency who specialises in the area of Information Technology and acts as a kind of intermediary between a company that’s looking to hire qualified and skilled IT professionals and individuals who are looking for employment. Its main function is to source for the most suitable IT staff according to the specifics and requirements given by the respected client. Perito is very proud to be the Top IT Staffing Companies in India.</p>
                </div>

                <div>
                    <p>IT Contract Staffing Services</p>
                    <p>IT contract staffing refers to the hiring of skilled IT staff on a contract basis, usually over a specified period of time.Many of the information technology and software development projects are carried out in phases, usually over a 6-month to 2-year project cycles.These projects require quality professionals who are well-trained with the requisite experience and they are generally expected to “hit the road running”.This means that they must have the technical skill-sets and relevant work experience in order to take on the contract assignment.Because of this, IT companies may offer higher salaries and compensation package to hire their talents and skills over the contract period.</p>
                </div>

                <div>
                    <p>IT Outsourcing Services</p>
                    <p>IT Outsourcing refers to the strategic engagement of external IT services providers like Perito to effectively and efficiently deliver Information Technology-enabled business processes with functions ranging from infrastructure to engineering, maintenance, and support.</p>
                </div>
            </div>

            <div className='padded talent-div'>
                <h1>If you have a talent requirement, then contact us today.</h1>

                <div>
                    <h3>Our core areas of IT recruitment expertise</h3>
                    <ul>
                        <li>Engineering (Front and Backend, DevOps and Fullstack)</li>
                        <li>Data Science, Big data and Analytics</li>
                        <li>Business Intelligence/Data warehousing
                        </li>
                        <li>Project Management / Product Manager / Product Owner / Product Designer</li>
                    </ul>
                    <p>Committed to helping people and companies realise their potential, our recruitment consultants create an exceptionalrecruitment experience for clients and candidates.</p>
                </div>

                <div>
                    <h3>Skillset</h3>
                    <p>We can provide your company with dedicated IT professionals who have expertise in the following areas: –</p>

                    <ul>
                        <li>Mobile Applications- Android – Native/ Hybrid, IOS, Windows</li>
                        <li>Microsoft Technologies-Dotnet – MVC (All Versions), Angular JS, Cloud Computing, Cloud Architecture, WPF,WCF</li>
                        <li>Azure- BLOB Storage, SQL Azure, App service, Web job, Azure Search, Redis Cache, Web App Bot (Chat Bot), Send Grid (for mail)</li>
                        <li>Database Administration-MySQL, MS SQL, Oracle</li>
                        <li>Software/Telecom Testing-Selenium, Cucumber, Test NG, Performance Testing, EBS Testing, Mobile Testing, Guidewire</li>
                        <li>Sun Technologies– Java – Microservices/Web Services, Apache, Angular Frameworks,FullStack, Guidewire,React/Node JS</li>
                        <li>Infra Services– Unix/Linux/Windows, Lotus Notes/Lotus Dominos,ExchangeServer,Networking,VOIP,,Cisco,Juniper, Avaya</li>
                        <li>BI Tools– SSIS, SSRS, SSAS, Cognos, Crystal, PowerBI, Nice Performance Manager</li>
                        <li>Open SourceTechnologies- Pearl,PHP,Python,UI, LAMP,Joomla,Apache,Tomcat</li>
                        <li>SAP– ABAP, BOBJ, APO DP, PIPO, BPM, HCI, CPI, MDG, FICO, HRMS, CRM, MDG, SD, Hybris,SAP Financial Accounting (FI), SAP Controlling (CO),SAP Sales and Distribution (SD),AP Production Planning (PP),SAP Materials Management (MM),SAP Quality Management (QM),SAP Human Capital Management (HCM)</li>
                        <li>Oracle- HCM, EBS, Oracle Apps Technical/Functional, ODI, CPQ, SecurityIBM Security, Application Security, GRC, Email Security,
                        Nook Skills Service Now, Salesforce, Data Scientist,MarkLogic, Blueprism, AWS, Tibco,Captivate,EndPoint, Ionic, SIEM Implementation, Juniper Firewall, Devops, Maximo, Bigdata, Tibco</li>
                    </ul>
                </div>
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
                        To be a premier management and technology consulting firm that Global companies rely on to solve their most complex business performance issues.
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