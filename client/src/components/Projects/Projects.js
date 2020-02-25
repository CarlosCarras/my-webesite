import React from 'react';
import Draggable from './../Draggable/Draggable';
import './Projects.css';

class Projects extends React.Component {
    render() {
        return(
            <div className="projects-container">
                <h1>Personal Projects</h1>
                <ol className="project-list-wrapper gradient-list">
                    <li><a href="/Projects/PCBuild">PC Build</a></li>
                    <li><a href="/Projects/MountingBracket">Pump Mounting Bracket</a></li>
                    <li><a href="/Projects/SwampHacksWebsite">SwampHacks Website</a></li>
                </ol>
                <Draggable x={20} y={350}>
                    {/*Note: The 'sticky' class CSS is located in '~/assets/Theme.css'*/}
                    <div className="sticky">
                        <div className="sticky-text"  /*contentEditable="true" spellCheck="false"*/>
                            This page is still a work in progress! Many more coming soon.
                        </div>
                    </div>
                </Draggable>
            </div>
        )
    }
}

export default Projects
