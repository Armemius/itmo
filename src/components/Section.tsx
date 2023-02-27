import React from 'react';

interface SubsectionProps {
    header: string;
    anchor?: string;
    children: JSX.Element | JSX.Element[];
}

const Section = (props: SubsectionProps) => {
    return (
        <>
            <div className="w-fill section">
                <div className="section-header">
                    <h1 id={props.anchor}>{props.header}</h1>
                </div>
                <div className="section-grid">
                    {props.children}
                </div>
            </div>
        </>

    );
};

export default Section;