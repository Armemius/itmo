import React from 'react';
import GridSection from "./grid-elements/GridSection";

interface SubsectionProps {
    header: string;
    anchor?: string;
    line?: boolean;
    children: JSX.Element | JSX.Element[];
}

const Section = (props: SubsectionProps) => {
    return (
        <>
            <div className="w-fill section">
                <div className={props.line === true || props.line === undefined ? "section-header lined-section-header" : "section-header"}>
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