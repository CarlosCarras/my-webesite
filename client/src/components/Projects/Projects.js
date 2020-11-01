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
                    <li><a href="/Projects/ComingSoon">MAX: A Quadruped Robot</a></li>
                    <li><a href="/Projects/ComingSoone">MIPS Processor</a></li>
                    <li><a href="/Projects/ComingSoon">EML2322L Robot</a></li>
                    <li><a href="/Projects/ComingSoon">Benchtop Lathe CAD</a></li>
                    <li><a href="/Projects/ComingSoon">Robot Toy Dinosau CAD</a></li>
                    <li><a href="/Projects/ComingSoon">Using Machine Learning to Classify Clothing</a></li>
                </ol>
                <Draggable x={20} y={350}>
                    {/*Note: The 'sticky' class CSS is located in '~/assets/Theme.css'*/}
                    <div className="sticky">
                        <div className="sticky-text"  /*contentEditable="true" spellCheck="false"*/>
                            This page is still a work in progress! Not all projects are listed, and some projects are missing documentation.
                        </div>
                    </div>
                </Draggable>
            </div>
        )
    }
}

export default Projects
