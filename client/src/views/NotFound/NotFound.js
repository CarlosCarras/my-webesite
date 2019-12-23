import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './NotFound.css';

const NotFound = () => {
        return(
        <div>
            <div>
                <p id="page404-code" >
                    Oops!
                    <div id="page404-text">
                        It appears that the page you are looking for is not available.
                    </div>
                </p>
            </div>
            <div>
                <p id="page404-button" >
                    <Button variant="info" onClick={(event) =>
                          {window.history.back();}}> Go Back
                    </Button>
                </p>
            </div>
        </div>
        )
}

export default NotFound;
