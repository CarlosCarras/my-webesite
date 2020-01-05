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
                  The website was then deployed. Heroku was chosen as the hosting service due to its ability to
                  automatically deploy a project by pushing to a GitHub repo. A domain was then purchased from
                  Domains.com to make the website more accessible. The domain was applied to the Heroku project
                  to produce the site you see now. 
              </p>
          </div>
      </div>
    );
}

export default Deploying;
