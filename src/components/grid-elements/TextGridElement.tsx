import React from 'react';

interface TextGridElementProps {
    header: string;
    children: string;
}

const TextGridElement = (props: TextGridElementProps) => {
    return (
        <div className="section-grid-element-container">
            <div className="section-grid-element">
                <div className="section-grid-element-header">
                    <h2>{props.header}</h2>
                </div>
                <p className="section-grid-text-element">
                    {props.children}
                </p>
            </div>
        </div>
    );
};

export default TextGridElement;