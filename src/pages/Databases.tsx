import React from 'react';
import InfoPageTemplate from "../components/InfoPageTemplate";
import Section from "../components/Section";
import TextGridElement from "../components/grid-elements/TextGridElement";

const Databases = () => {
    return (
        <InfoPageTemplate header="Базы данных">
            <Section header="Лабораторные">
                <TextGridElement header="Лабораторная №1">
                    В процессе разработки...
                </TextGridElement>
            </Section>
        </InfoPageTemplate>
    );
};

export default Databases;