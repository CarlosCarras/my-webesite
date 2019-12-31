import React from 'react';
import './Projects.css';

class Projects extends React.Component {
    render() {
        return(
            <div className="projects-container">
                <h1>Personal Projects</h1>
                <ol className="project-list-wrapper gradient-list">
                    <li><a href="/Projects/PCBuild">PC Build</a></li>
                    <li><a href="/Projects/MountingBracket">Pump Mounting Bracket</a></li>
                </ol>
            </div>
        )
    }
}

export default Projects
