import React from 'react'
import ImageGallery from 'react-image-gallery'
import './../ProjectTemplate.css'

const MAXImg0 = require('./../../../assets/project-MAX-print.jpg'),
      MAXImg1 = require('./../../../assets/project-MAX-cad.png'),
      MAXImg2 = require('./../../../assets/project-MAX-pcb.jpg');

const images = [
  {
    original: MAXImg0
  },
  {
    original: MAXImg1
  },
  {
    original: MAXImg2
  },
];

class MAX extends React.Component {
    render() {
        return(
          <div className="project-page-container">
              <h1>Multi-AXial robot</h1>
              <div className="project-body">
                  <div className="row">
                      <div className="three-col-format-column">
                          <div className="project-info-box">
                              <h2>MAX</h2>
                              <img src={MAXImg0} alt="finished mounting bracket"/>
                              <div className="project-summary">
                                  <span className="project-field">Timeframe:&nbsp;</span>
                                  <span className="project-text">2 months (so far)</span>
                                  <br/><br/>
                                  <span className="project-field">BOM: </span>
                                  <ul>
                                      <li>Coming Soon</li>
                                  </ul>
                                  <span className="project-field">Equipment: </span>
                                  <ul>
                                      <li>Coming Soon</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="three-col-format-column">
                          <div className="project-description">
                              <br/>
                              <p>
                                 This is a semester-long project for EEL4924C Electrical Engineering Capstone Design II. This page will be updated at the end of the semester.
                              </p>
                          </div>
                      </div>
                      <div className="three-col-format-column">
                          <ul class="project-timeline">
                              <li class="project-timeline-event" data-date="January 30, 2018">
                                  <h3>Coming Soon</h3>
                                  <p>The timeline will be updated at the end of the semester.</p>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="row">
                      <div className="project-gallery">
                          <ImageGallery items={images}/>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default MAX
