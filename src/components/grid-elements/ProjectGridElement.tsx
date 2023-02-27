import React from 'react';

interface ProjectGridElementProps {
    header: string;
    text: string;
    children: JSX.Element | JSX.Element[];
}

const ProjectGridElement = (props: ProjectGridElementProps) => {
    return (
        <div className="section-grid-element-container">
            <div className="section-grid-element">
                <div className="section-grid-element-header">
                    <h2>{props.header}</h2>
                </div>
                <p className="section-grid-text-element">
                    {props.text}
                </p>
                <ul className="section-grid-files-element">
                    {props.children}
                </ul>
            </div>
        </div>
    );
};

export default ProjectGridElement;