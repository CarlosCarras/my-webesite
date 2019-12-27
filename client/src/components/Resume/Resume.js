import React from 'react';
import ResumeContent from './ResumeContent';
import Draggable from './../Draggable/Draggable';
import Resume from './../../assets/resume.pdf';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import './Resume.css';

class Gallery extends React.Component {

    render() {
        return(
          <div className="resume-page-container parallax">

              <h1>R&eacute;sum&eacute;</h1>
              <div className="button-group">
                  <a href={Resume} target="_blank" rel="noopener noreferrer" >
                      <Button type="submit" shape="round" icon="download" size="large" ghost="true">
                          Download
                      </Button>
                  </a>
              </div>
              <div className="paper">
                  <ResumeContent/>
              </div>
              <Draggable x={20} y={450}>
                  {/*Note: The 'sticky' class CSS is located in '~/assets/Theme.css'*/}
                  <div className="sticky">
                      <div className="sticky-text"  /*contentEditable="true" spellCheck="false"*/>
                          Last Update: <br/>
                          December 26, 2019 <br/><br/>
                          Upcoming: <br/>
                          Summer Internship with
                          <a href="https://www.pw.utc.com" target="_blank" rel="noopener noreferrer">
                              Pratt and Whitney
                          </a><br/><br/>
                      </div>
                  </div>
              </Draggable>
          </div>
        )
    }
}

export default Gallery
