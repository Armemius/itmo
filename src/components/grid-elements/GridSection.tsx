import React from 'react';

interface GridSectionProps {
    children?: JSX.Element | JSX.Element[];
}

const GridSection = (props: GridSectionProps) => {
    return (
        <div className="section-grid">
            {props.children}
        </div>
    );
};

export default GridSection;