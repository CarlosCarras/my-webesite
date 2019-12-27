import React from 'react';
import ReactTooltip from 'react-tooltip';
import './ResumeContent.css'

function ResumeContent() {
    return (
        <div className="paper-content">
            <div className="header">
                <h1 className="name tnr">Carlos Carrasquillo</h1>
                <div className="entry">
                    <h2 className="info-content tnr">Phone: (787) 668-8096</h2>
                    <div className="resume-bullet"></div>
                    <h2 className="info-content tnr">Email: c.carrasquillo@ufl.edu</h2>
                    <div className="resume-bullet"></div>
                    <h2 className="info-content tnr">Domain: http://www.CarlosCarras.com</h2>
                </div>
            </div>

            <div className="section">
                <div className="section-header tnr">Education &nbsp;
                    <span data-tip data-for='education-info'>
                        <i className="fa fa-info-circle" style={{color: 'navy'}}></i>
                    </span>
                    <ReactTooltip id='education-info' type='info' effect='solid' place={'right'}>
                        <span>Highest level of education desired = PhD in Mechanical Engineering.</span>
                    </ReactTooltip>
                </div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            University of Florida
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            August 2017 - Present
                        </div>
                    </div>
                    <div className="support-text tnr">Current GPA: 3.7/4.0</div>
                    <br/>
                    <div className="entry resume-ul">
                        <li className="entry-name tnr">Bachelor of Science,&nbsp;
                            <span className="italic-text tnr">Mechanical Engineering</span>
                        </li>
                        <div className="entry-date bold-text tnr">Expected May 2021</div>
                    </div>
                    <div className="entry resume-ul">
                        <li className="entry-name tnr">Bachelor of Science,&nbsp;
                            <span className="italic-text tnr">Computer Engineering</span>
                        </li>
                        <div className="entry-date bold-text tnr">Expected May 2021</div>
                    </div>
                    <br/>
                    <div className="resume-text tnr">Honors Program</div>
                </div>
            </div>

            <div className="section">
                <div className="section-header tnr">Relevant Coursework &nbsp;
                    <span data-tip data-for='coursework-info'>
                        <i className="fa fa-info-circle" style={{color: 'navy'}}></i>
                    </span>
                    <ReactTooltip id='coursework-info' delayHide={500} type='info' effect='solid' place={'right'}>
                        <span>For a complete four-year plan, click <a href="./FourYearPlan" style={{color:"white"}}>here</a>.</span>
                    </ReactTooltip>
                </div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr"></div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            August 2017 - Present
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="column">
                            <div className="resume-ul entry">
                                <span className="resume-text">
                                    <li className="tnr">EML4312: Control of Mechanical Systems</li>
                                    <li className="tnr">EML3005:  Mechanical Design 1</li>
                                    <li className="tnr">EML3100:  Thermodynamics</li>
                                    <li className="tnr">EGM3401:  Dynamics</li>
                                    <li className="tnr">EGM3530:  Mechanics of Materials</li>
                                    <li className="tnr">EML2023:  Computer-Aided Design using SolidWorks</li>
                                    <li className="tnr">EGM2322L: Design and Manufacturing Laboratory</li>
                                    <li className="tnr">EGM3343:  Numerical Methods using MATLAB</li>
                                    <li className="tnr">EML3301C: Mechanics of Materials Laboratory</li>
                                </span>
                            </div>
                        </div>
                        <div className="column">
                            <div className="resume-ul">
                                <span className="resume-text">
                                    <li className="tnr">EEL3111C: Circuits 1</li>
                                    <li className="tnr">EEL3701C: Digital Logic and Computer Systems</li>
                                    <li className="tnr">CDA3101:  Computer Organization using ARM</li>
                                    <li className="tnr">COP3530:  Data Structures and Algorithms using C++</li>
                                    <li className="tnr">EEL3135:  Introduction to Signals and Systems</li>
                                    <li className="tnr">EEE4773:  Machine Learning using Python</li>
                                    <li className="tnr">EEL3744C: Microprocessor Applications using C</li>
                                    <li className="tnr">CEN3031:  Software Engineering</li>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header tnr">Experience &nbsp;
                    <span data-tip data-for='experience-info'>
                        <i className="fa fa-info-circle" style={{color: 'navy'}}></i>
                    </span>
                    <ReactTooltip id='experience-info' type='info' effect='solid' place={'right'}>
                        <span>For more specific project information, see the 'Gallery' tab.</span>
                    </ReactTooltip>
                </div>
                <div className="divider-line"></div>
                <div className="section-content">

                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            TA for EML2322L: Design and Manufacturing Laboratory
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            May 2019 - Present
                        </div>
                    </div>
                    <br/>
                    <div className="entry resume-ul">
                        <li className="entry-name tnr">
                            Supervising manufacturing process of design teams, providing design and manufacturing guidance to course students,
                            grading design reports, completing TA projects to enhance the lab. SolidWorks is heavily used for all design processes.
                        </li>
                        <li className="entry-name tnr">
                            Teaching groups of four to five students at a time about the safe and proper operation of shop eqiupment (e.g. milling
                            machines, lathes, sheetmetal eqiupment, etc.).
                        </li>
                    </div>
                    <br/>

                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            Undergraduate Research at ADAMUS Lab
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            January 2019 - Present
                        </div>
                    </div>
                    <br/>
                    <div className="entry resume-ul">
                        <li className="entry-name tnr">
                            Developing code for a Cube-Sat navigation loop using ROS, C++ and Python. Communicating with radios to transmit signals
                            from ground stations.
                        </li>
                        <li className="entry-name tnr">
                            Using command line to configure network settings on BeagleBone Black.
                        </li>
                    </div>
                    <br/>

                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            TA for EGM3344: Numerical Methods
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            May 2019 – August 2019
                        </div>
                    </div>
                    <br/>
                    <div className="entry resume-ul">
                        <li className="entry-name tnr">
                            Helped students write code for optimization, Fourier analysis, regression, interpolation, numerical
                            integration/derivation, etc.
                        </li>
                        <li className="entry-name tnr">
                            Gave lectures on Fourier analysis, graded MATLAB homework submissions.
                        </li>
                    </div>
                    <br/>

                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            Lowe’s Associate in the Paint Department
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            April 2018 – August 2018
                        </div>
                    </div>
                    <br/>
                    <div className="entry resume-ul">
                        <li className="entry-name tnr">
                            Handled inventory, gave DIY recommendations, mixed paint, assisted fellow associates in hardware.
                        </li>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header tnr">Student Organization Participation</div>
                <div className="divider-line"></div>
                <div className="section-content">

                    <div className="entry">
                        <div className="entry-name bold-text font-size-1pt1em tnr">
                            Students for the Exploration and Development of Space
                        </div>
                        <div className="entry-date bold-text font-size-1pt1em tnr">
                            June 2019 – Present
                        </div>
                    </div>
                    <br/>
                    <div className="entry resume-ul">
                        <li className="entry-name tnr">
                            Designing and manufacturing a reflector telescope utilizing Solidworks.
                        </li>
                        <li className="entry-name tnr">
                            Planning events and activities for the physics department.
                        </li>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="section-header tnr">Skills &nbsp;
                    <span data-tip data-for='skill-info'>
                        <i className="fa fa-info-circle" style={{color: 'navy'}}></i>
                    </span>
                    <ReactTooltip id='skill-info' type='info' effect='solid' place={'right'}>
                        <span>Hover over a skill to view the level of expertise.</span>
                    </ReactTooltip>
                </div>
                <div className="divider-line"></div>
                <div className="section-content">
                    <div className="resume-ul">
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Programming Languages</span>: &nbsp;
                                {/* Java */}
                                <span data-tip data-for='java-info'><span className="tnr">Java,&nbsp;</span></span>
                                <ReactTooltip id='java-info' type='info' effect='solid' place={'top'}>3 years</ReactTooltip>
                                {/* C++ */}
                                <span data-tip data-for='c++-info'><span className="tnr">C++,&nbsp;</span></span>
                                <ReactTooltip id='c++-info' type='info' effect='solid' place={'top'}>2 years</ReactTooltip>
                                {/* MATLAB */}
                                <span data-tip data-for='matlab-info'><span className="tnr">MATLAB,&nbsp;</span></span>
                                <ReactTooltip id='matlab-info' type='info' effect='solid' place={'top'}>2 years</ReactTooltip>
                                {/* Python */}
                                <span data-tip data-for='python-info'><span className="tnr">Python</span></span>
                                <ReactTooltip id='python-info' type='info' effect='solid' place={'top'}>1 year</ReactTooltip>
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Web Development</span>: &nbsp;
                                {/* Javascript using React and Node.js */}
                                <span data-tip data-for='javascript-info'><span className="tnr">Javascript using React and Node.js,&nbsp;</span></span>
                                <ReactTooltip id='javascript-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                                {/* CSS */}
                                <span data-tip data-for='css-info'><span className="tnr">CSS,&nbsp;</span></span>
                                <ReactTooltip id='css-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                                {/* HTML */}
                                <span data-tip data-for='html-info'><span className="tnr">HTML,&nbsp;</span></span>
                                <ReactTooltip id='html-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                                {/* MongoDB */}
                                <span data-tip data-for='mongodb-info'><span className="tnr">MongoDB,&nbsp;</span></span>
                                <ReactTooltip id='mongodb-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                                {/* Express */}
                                <span data-tip data-for='express-info'><span className="tnr">Express</span></span>
                                <ReactTooltip id='express-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Frameworks</span>: &nbsp;
                                {/* ROS */}
                                <span data-tip data-for='ros-info'><span className="tnr">ROS</span></span>
                                <ReactTooltip id='ros-info' type='info' effect='solid' place={'top'}>1 year</ReactTooltip>
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">CAD</span>: &nbsp;
                                {/* SolidWorks */}
                                <span data-tip data-for='solidworks-info'><span className="tnr">SolidWorks,&nbsp;</span></span>
                                <ReactTooltip id='solidworks-info' type='info' effect='solid' place={'top'}>2 years</ReactTooltip>
                                {/* Fusion 360 */}
                                <span data-tip data-for='fusion-360-info'><span className="tnr">Fusion 360,&nbsp;</span></span>
                                <ReactTooltip id='fusion-360-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                                {/* Inventor */}
                                <span data-tip data-for='inventor-info'><span className="tnr">Inventor</span></span>
                                <ReactTooltip id='inventor-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Certifications</span>: &nbsp;
                                {/* SolidWorks Certification */}
                                <span data-tip data-for='solidworks-certification-info'><span className="tnr">SolidWorks,&nbsp;</span></span>
                                <ReactTooltip id='solidworks-certification-info' type='info' effect='solid' place={'top'}>Associate</ReactTooltip>
                                {/* Amateur Radio Certification */}
                                <span data-tip data-for='amateur-radio-info'><span className="tnr">Amateur Radio</span></span>
                                <ReactTooltip id='amateur-radio-info' type='info' effect='solid' place={'top'}>Technician</ReactTooltip>
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Development Processes</span>: &nbsp;
                                {/* Agile */}
                                <span data-tip data-for='agile-info'><span className="tnr">Agile</span></span>
                                <ReactTooltip id='agile-info' type='info' effect='solid' place={'top'}>0.5 years</ReactTooltip>
                        </li>
                        <li className="entry-name tnr">
                            <span className="italic-text tnr">Languages</span>: &nbsp;
                                {/* English */}
                                <span data-tip data-for='english-info'><span className="tnr">English,&nbsp;</span></span>
                                <ReactTooltip id='english-info' type='info' effect='solid' place={'top'}>Fluent</ReactTooltip>
                                {/* Spanish */}
                                <span data-tip data-for='spanish-info'><span className="tnr">Spanish</span></span>
                                <ReactTooltip id='spanish-info' type='info' effect='solid' place={'top'}>Fluent</ReactTooltip>
                        </li>
                    </div>
                    <br/>
                </div>
            </div>

        </div>
    );
}

export default ResumeContent;
