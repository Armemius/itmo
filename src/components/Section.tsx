import React from 'react';
import GridSection from "./grid-elements/GridSection";

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
                <GridSection>
                    {props.children}
                </GridSection>
            </div>
        </>

    );
};

export default Section;