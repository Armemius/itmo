import React from 'react';

interface ProjectPageProps {
    header: string;
    children: JSX.Element | JSX.Element[];
}

const InfoPageTemplate = (props: ProjectPageProps) => {
    return (
        <>
            <div className="info-page-top-section">
                <h1>{props.header} | <a className="link-text" href="../pages">На главную</a></h1>
            </div>
            <div className="info-page-content">
                <div className="section-grid">
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default InfoPageTemplate;