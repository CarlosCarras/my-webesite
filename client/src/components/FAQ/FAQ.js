import React from 'react';
import './FAQ.css';

class FAQ extends React.Component {
    render() {
        return(
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                <div className="accordion">
                    <div className="accordion-item" id="question1">
                        <a className="accordion-link" href="#question1">
                            Why did you decide to pursue a Mechanical Engineering and Computer Engineering dual degree?
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                The way I see it, there are three main components to a system. The mechanical component establishes how a device can physically interact other systems. The electrical component governs the logic behind how a
                                device can operate and interact with other systems, and the computer science component allows for specific control of a device's functions. All three are essential to maximize the potential of a system. So, why not expolore all three?
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item" id="question2">
                        <a className="accordion-link" href="#question2">
                            Outside of classes and extracuriculars, what do you do for fun?
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                I have been a drummer for all of my life, so I am very much into music. I also longboard, play basketball, and go to the gym regularly. I read irregularly, but my favorite book of all time is probably Ender's Game.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item" id="question3">
                        <a className="accordion-link" href="#question3">
                            What is your favorite programming language?
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                Easy. MATLAB. Fight me. Although C++ is a close second.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item" id="question4">
                        <a className="accordion-link" href="#question4">
                            Do you really think anyone is going to visit this website?
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                Well... you are here, aren't you?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQ
