import React from 'react';

interface ReportFileElementProps {
    text: string;
    icon: JSX.Element;
    filepath: string;
    filename: string;
}

const FileReportElement = (props: ReportFileElementProps) => {
    return (
        <li>
            <span className="ref-element-label">
                {props.icon}
            </span>
            <a className="link-text ref-element-text" href={props.filepath} download={props.filename}>
                {props.text}
            </a>
        </li>
    );
};

export default FileReportElement;