import React from 'react';
import {FaLink} from "react-icons/fa";

interface ReportLinkElementProps {
    text: string;
    to: string;
}

const LinkReportElement = (props: ReportLinkElementProps) => {
    return (
        <li>
            <span className="ref-element-label">
                <FaLink/>
            </span>
            <a className="link-text ref-element-text" href={props.to}>
                {props.text}
            </a>
        </li>
    );
};

export default LinkReportElement;