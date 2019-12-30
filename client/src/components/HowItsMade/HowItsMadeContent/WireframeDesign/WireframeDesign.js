import React from 'react';
import './WireframeDesign.css';

const HomescreenWireframe    = require('./../../../../assets/homescreen_wireframe.png'),
      ResumeWireframe        = require('./../../../../assets/resume_wireframe.png');

function WireframeDesign() {
    return (
        <div className="row" style={{paddingBottom: "100px"}}>
            <div className="two-col-format-column wireframe-design-col-left">
                <p>
                    Next, to imagine what the end result might look like, I drew up a couple of wireframes using Microsoft PowerPoint and Notability.
                    These wireframes were medium-fidelity, which means that, while better than a hand-drawn concept, all dimensions were not final.
                    The wireframes served as a blueprint from which to base the later HTML and CSS design off of.
                </p>
            </div>
            <div className="two-col-format-column" style={{padding: "auto"}}>
                <div className="wireframe-design-container">
                    <div className="wireframe">
                        <img src={HomescreenWireframe} alt="Homescreen Wireframe"/>
                    </div>
                    <div className="wireframe">
                        <img src={ResumeWireframe} alt="Resume Wireframe"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WireframeDesign;
