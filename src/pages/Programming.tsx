import React from 'react';
import InfoPageTemplate from "../components/InfoPageTemplate";
import ProjectGridElement from "../components/grid-elements/ProjectGridElement";
import FileReportElement from "../components/grid-elements/report-elements/FileReportElement";
import GridSection from "../components/grid-elements/GridSection";
import GithubLinkReportElement from "../components/grid-elements/report-elements/GithubLinkReportElement";
import {FaArchive, FaFileAlt, FaFilePdf} from "react-icons/fa";

import ReportLab1 from "../resources/shared/programming/PROG_LAB_1.docx";
import ReportLab2 from "../resources/shared/programming/PROG_LAB_2.docx";
import ReportLab3 from "../resources/shared/programming/PROG_LAB_3.docx";
import ReportLab4 from "../resources/shared/programming/PROG_LAB_4.docx";
import Test1 from "../resources/shared/programming/PROG_TEST_1.pdf"
import Test2 from "../resources/shared/programming/PROG_TEST_2.pdf"

const Programming = () => {
    return (
        <InfoPageTemplate header="Программирование">
            <GridSection>
                <ProjectGridElement header="Лабораторная №1" text={"Требуется написать небольшую программу, выполняющую несложные математические операции"}>
                    <FileReportElement text={"Отчёт"} icon={<FaFileAlt/>} filepath={ReportLab1} filename="Programming_report_1.docx"/>
                    <GithubLinkReportElement text={"Ссылка на проект"} to="https://github.com/Armemius/ItmoProjects/tree/main/programming/lab1"/>
                </ProjectGridElement>
                <ProjectGridElement header="Лабораторная №2" text={"На основе имеющейся библиотеки написать программу, которая будет заставлять покемонов драться стенка на стенку"}>
                    <FileReportElement text="Отчёт" icon={<FaFileAlt/>} filepath={ReportLab2} filename="Programming_report_2.docx"/>
                    <GithubLinkReportElement text="Ссылка на проект" to="https://github.com/Armemius/ItmoProjects/tree/main/programming/lab2"/>
                </ProjectGridElement>
                <ProjectGridElement header={"Лабораторная №3"} text={"Дана объектная модель, по которой каким-то образом должна быть написана программа имитирующая ситуацию в ней"}>
                    <FileReportElement text={"Отчёт"} icon={<FaFileAlt/>} filepath={ReportLab3} filename="Programming_report_3.docx"/>
                    <GithubLinkReportElement text={"Ссылка на проект"} to={"https://github.com/Armemius/ItmoProjects/tree/main/programming/lab3"}/>
                </ProjectGridElement>
                <ProjectGridElement header={"Лабораторная №4"} text={"Допилить предыдущую лабу с раширенной моделью из прошлой лабы, запихнуть в неё исключения и разные виды классов"}>
                    <FileReportElement text={"Отчёт"} icon={<FaFileAlt/>} filepath={ReportLab4} filename="Programming_report_4.docx"/>
                    <GithubLinkReportElement text={"Ссылка на проект"} to={"https://github.com/Armemius/ItmoProjects/tree/main/programming/lab4"}/>
                </ProjectGridElement>
                <ProjectGridElement header={"Рубежка №1"} text={"Вопросы по материалу первой половины семестра: основы работы с Java, её устройство и всякие команды"}>
                    <FileReportElement text={"Примерные вопросы"} icon={<FaFilePdf/>} filepath={Test1} filename="Questions_test_1.zip"/>
                </ProjectGridElement>
                <ProjectGridElement header={"Рубежка №2"} text={"Вопросы по материалу второй половины семестра: SOLID, ООП, исключения и т.п."}>
                    <FileReportElement text={"Примерные вопросы"} icon={<FaArchive/>} filepath={Test2} filename="Questions_test_2.pdf"/>
                </ProjectGridElement>
            </GridSection>
        </InfoPageTemplate>
    );
};

export default Programming;