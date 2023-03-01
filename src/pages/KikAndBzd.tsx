import React from 'react';
import InfoPageTemplate from "../components/InfoPageTemplate";
import ProjectGridElement from "../components/grid-elements/ProjectGridElement";

import KikTest1 from "../resources/shared/kik/KIK_TEST_1.docx";
import KikTest2 from "../resources/shared/kik/KIK_TEST_2.docx";
import KikTest3 from "../resources/shared/kik/KIK_TEST_3.docx";
import KikTest4 from "../resources/shared/kik/KIK_TEST_4.docx";
import KikTest5 from "../resources/shared/kik/KIK_TEST_5.docx";
import KikTest6 from "../resources/shared/kik/KIK_TEST_6.docx";
import KikTest7 from "../resources/shared/kik/KIK_TEST_7.docx";
import FileReportElement from "../components/grid-elements/report-elements/FileReportElement";
import {FaFileAlt, FaFilePdf} from "react-icons/fa";

import BzdTest1 from "../resources/shared/bzd/Active_tourism.pdf";
import BzdTest2 from "../resources/shared/bzd/Travel_safety.pdf";
import BzdTest3 from "../resources/shared/bzd/Healthy_diet.pdf";
import BzdTest4 from "../resources/shared/bzd/Healthy_sleep.pdf";
import BzdTest5 from "../resources/shared/bzd/Conflict-free_communication.pdf";
import BzdTest6 from "../resources/shared/bzd/Conscious_consumption.pdf";
import BzdTest7 from "../resources/shared/bzd/First_aid.pdf";
import BzdTest8 from "../resources/shared/bzd/Manipulation_prevention.pdf";
import BzdTest9 from "../resources/shared/bzd/Prevention_of_addictive_behaviour.pdf";
import BzdTest10 from "../resources/shared/bzd/Psycho_safety.pdf";
import BzdTest11 from "../resources/shared/bzd/Self_defence.pdf";
import BzdTest12 from "../resources/shared/bzd/Reproductive_health.pdf";
import BzdTest13 from "../resources/shared/bzd/Overcoming_fear.pdf";
import BzdTest14 from "../resources/shared/bzd/Finance_management.pdf";
import BzdTest15 from "../resources/shared/bzd/Financial_fraud.pdf";
import BzdTest16 from "../resources/shared/bzd/Jurisprudential_security.pdf";
import Section from "../components/Section";

const bzdTests = [
    {
        file: BzdTest1,
        name: "Активный туризм",
        filename: "Active_tourism"
    },
    {
        file: BzdTest2,
        name: "Безопасность в путешествиях",
        filename: "Travel_safety"
    },
    {
        file: BzdTest3,
        name: "Здоровое питание",
        filename: "Healthy_diet"
    },
    {
        file: BzdTest4,
        name: "Здоровый сон",
        filename: "Healthy_sleep"
    },
    {
        file: BzdTest5,
        name: "Бесконфликтное общение",
        filename: "Conflict-free_communication.pdf"
    },
    {
        file: BzdTest6,
        name: "Осознанное потребление",
        filename: "Conscious_consumption"
    },
    {
        file: BzdTest7,
        name: "Первая медицинская помощь",
        filename: "First_aid"
    },
    {
        file: BzdTest8,
        name: "Противодействие манипуляциям",
        filename: "Manipulation_prevention"
    },
    {
        file: BzdTest9,
        // Курить люблю пиздец
        name: "Зависимое поведение",
        filename: "Prevention_of_addictive_behaviour"
    },
    {
        file: BzdTest10,
        name: "Психологическая безопасность",
        filename: "Psycho_safety"
    },
    {
        file: BzdTest11,
        name: "Самооборона",
        filename: "Self-defence"
    },
    {
        file: BzdTest12,
        // Хд
        name: "Репродуктивное здоровье",
        filename: "Reproductive_health"
    },
    {
        file: BzdTest13,
        name: "Преодоление страха",
        filename: "Overcoming_fear"
    },
    {
        file: BzdTest14,
        name: "Управление личными финансами",
        filename: "Finance_management"
    },
    {
        file: BzdTest15,
        name: "Финансовое мошенничество",
        filename: "Financial_fraud"
    },
    {
        file: BzdTest16,
        name: "Юридическая безопасность",
        filename: "Jurisprudential_security"
    },
];

const kikTests = [
    KikTest1,
    KikTest2,
    KikTest3,
    KikTest4,
    KikTest5,
    KikTest6,
    KikTest7
]

const KikAndBzd = () => {
    return (
        <InfoPageTemplate header="БЖД и КиК">
            <Section header="КиК">
                <ProjectGridElement header="Тесты по КиКу">
                    {
                        kikTests.map((value, index) => <FileReportElement text={`Тест №${index + 1}`} icon={<FaFileAlt/>} filepath={value} filename={`Kik_test_1`}/>)
                    }
                </ProjectGridElement>
            </Section>
            <Section header="БЖД">
                <ProjectGridElement header="Тесты по БЖД">
                    {
                        bzdTests.map((value, index) => <FileReportElement text={value.name} icon={<FaFilePdf/>} filepath={value.file} filename={value.filename}/>)
                    }
                </ProjectGridElement>
            </Section>
        </InfoPageTemplate>
    );
};

export default KikAndBzd;