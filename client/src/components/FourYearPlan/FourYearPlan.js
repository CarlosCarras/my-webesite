import React from 'react';
import FourYearPlanContent from './FourYearPlanContent';
import Draggable from './../Draggable/Draggable';
import Resume from './../../assets/resume.pdf';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import './FourYearPlan.css';

class Gallery extends React.Component {

    render() {
        return(
          <div className="four-year-plan-page-container parallax">
              <h1>Four Year Plan</h1>
              <div className="paper">
                  <FourYearPlanContent/>
              </div>
          </div>
        )
    }
}

export default Gallery
