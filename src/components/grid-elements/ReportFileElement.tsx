import React from 'react';

interface ReportFileElementProps {
    text: string;
    icon: JSX.Element;
    filepath: string;
}

const ReportFileElement = (props: ReportFileElementProps) => {
    return (
        <li>
            <span className="file-element-logo">
                {props.icon}
            </span>
            <a className="link-text" href={props.filepath} download>
                {props.text}
            </a>
        </li>
    );
};

export default ReportFileElement;