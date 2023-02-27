import React from 'react';
import {Pages} from "../ParamsRouter";

interface LinkGridElementProps {
    header: string;
    link: Pages;
    img: string;
}

const LinkGridElement = (props: LinkGridElementProps) => {

    const redirect = () => {
        // Just because I can't use BrowserRouter for GH Pages :-(
        // eslint-disable-next-line no-restricted-globals
        location.href = `./?page=${props.link}`;
    }

    return (
        <div className="section-grid-element-container base-element-container">
            <div onClick={() => redirect()} className="section-grid-element">
                <div className="section-grid-element-header">
                    <span className="base-element-header">
                        <h2>{props.header}</h2>
                    </span>
                </div>
                <div className="section-grid-img-container anti-flick">
                    <img src={props.img} alt="err" className="section-grid-img anti-flick" />
                </div>
            </div>
        </div>
    );
};

export default LinkGridElement;