import React from 'react';
import {FaLink} from "react-icons/fa";

interface ReportLinkElementProps {
    text: string;
    to: string;
}

const ReportLinkElement = (props: ReportLinkElementProps) => {
    return (
        <li>
            <span className="file-element-logo">
                <FaLink/>
            </span>
            <a className="link-text" href={props.to}>
                {props.text}
            </a>
        </li>
    );
};

export default ReportLinkElement;