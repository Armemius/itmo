import React from 'react';
import InfoPageTemplate from "../components/InfoPageTemplate";
import ProjectGridElement from "../components/grid-elements/ProjectGridElement";
import ReportFileElement from "../components/grid-elements/ReportFileElement";
import {FaFileAlt} from "react-icons/fa";

import ReportLab1 from "../resources/shared/programming/PROG_LAB_1.docx";
import ReportLab2 from "../resources/shared/programming/PROG_LAB_2.docx";
import ReportLab3 from "../resources/shared/programming/PROG_LAB_3.docx";
import ReportLab4 from "../resources/shared/programming/PROG_LAB_4.docx";

const Programming = () => {
    return (
        <InfoPageTemplate header="Программирование">
            <ProjectGridElement header={"Лабораторная №1"} text={"Sample text"}>
                <ReportFileElement text={"Отчёт"} icon={<FaFileAlt/>} filepath={ReportLab1}/>
            </ProjectGridElement>
            <ProjectGridElement header={"Лабораторная №2"} text={"Sample text"}>
                <ReportFileElement text={"Отчёт"} icon={<FaFileAlt/>} filepath={ReportLab2}/>
            </ProjectGridElement>
            <ProjectGridElement header={"Лабораторная №3"} text={"Sample text"}>
                <ReportFileElement text={"Отчёт"} icon={<FaFileAlt/>} filepath={ReportLab3}/>
            </ProjectGridElement>
            <ProjectGridElement header={"Лабораторная №4"} text={"Sample text"}>
                <ReportFileElement text={"Отчёт"} icon={<FaFileAlt/>} filepath={ReportLab4}/>
            </ProjectGridElement>
        </InfoPageTemplate>
    );
};

export default Programming;