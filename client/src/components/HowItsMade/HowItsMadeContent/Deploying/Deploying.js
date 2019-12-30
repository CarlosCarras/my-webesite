import React from 'react';
import './Deploying.css'

function Deploying() {
    return (
      <div className="row section" style={{paddingBottom: "100px"}}>
          <div className="two-col-format-column deploying-left-col">
              <div className="deploy-button">
                  <span>DEPLOY</span>
              </div>
          </div>
          <div className="two-col-format-column deploying-right-col">
              <p>
                  The website was then deployed. Wait... actually not yet.
              </p>
          </div>
      </div>
    );
}

export default Deploying;
