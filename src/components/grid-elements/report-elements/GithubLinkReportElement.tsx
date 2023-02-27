import React from 'react';
import {FaGithub} from "react-icons/fa";

interface ReportGithubRepoElementProps {
    text: string;
    to: string;
}

const GithubLinkReportElement = (props: ReportGithubRepoElementProps) => {
    return (
        <li>
            <span className="ref-element-label">
                <FaGithub/>
            </span>
            <a className="link-text ref-element-text" href={props.to}>
                {props.text}
            </a>
        </li>
    );
};

export default GithubLinkReportElement;