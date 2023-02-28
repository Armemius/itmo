import React from 'react';

interface ProjectPageProps {
    header: string;
    children: JSX.Element | JSX.Element[];
}

const InfoPageTemplate = (props: ProjectPageProps) => {
    return (
        <>
            <div className="info-page-top-section">
                <h1>{props.header} | <a className="link-text" href="./">Назад</a></h1>
            </div>
            <div className="info-page-content">
                {props.children}
            </div>
        </>
    );
};

export default InfoPageTemplate;