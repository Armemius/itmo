import React from 'react';
import GridSection from "./grid-elements/GridSection";

interface SubsectionProps {
    header: string;
    anchor?: string;
    lined?: boolean;
    search?: string;
    children: JSX.Element | JSX.Element[];
}

const Section = (props: SubsectionProps) => {
    let children = props.children instanceof Array ? props.children : Array.of(props.children);
    if (props.search) {
        children = children
            .filter(value => value.props.hasOwnProperty("header"))
            .filter(value => value.props.header.toLowerCase().includes(props.search!.trim().toLowerCase()));
        if (children.length === 0) {
            return null;
        }
    }
    return (
        <>
            <div className="w-fill section">
                <div className={props.lined ? "section-header lined-section-header" : "section-header"}>
                    <h1 id={props.anchor}>{props.header}</h1>
                </div>
                <GridSection>
                    {children}
                </GridSection>
            </div>
        </>

    );
};

export default Section;