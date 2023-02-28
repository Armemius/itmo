import React from 'react';
import InfoPageTemplate from "../components/InfoPageTemplate";
import Section from "../components/Section";
import FileReportElement from "../components/grid-elements/report-elements/FileReportElement";
import {FaFileAlt, FaFileArchive, FaFilePdf} from "react-icons/fa";
import ProjectGridElement from "../components/grid-elements/ProjectGridElement";
import LinkReportElement from "../components/grid-elements/report-elements/LinkReportElement";

import ReportLab1 from "../resources/shared/opd/OPD_LAB_1.docx"
import Lab1Questions from "../resources/shared/opd/OPD_LAB_1.docx"
import ReportLab2 from "../resources/shared/opd/OPD_LAB_2.pdf"
import OpdTickets from "../resources/shared/opd/OPD_TICKETS.pdf";

const OPD = () => {
    return (
        <InfoPageTemplate header="ОПД">
            <Section header="Лабораторные">
                <ProjectGridElement header="Лабораторная №1" text={"Основы Linux'а и работы с терминалом. Спасибо хорошему человеку, который собрал вопросы и довольно подробно расписал ответы на них. И кстати, это нормально что сдача этой лабораторной затянется надолго)"}>
                    <FileReportElement text={"Отчёт"} icon={<FaFileAlt/>} filepath={ReportLab1} filename="Opd_report_1"/>
                    <FileReportElement text={"Вопросы"} icon={<FaFileAlt/>} filepath={Lab1Questions} filename="Opd_lab_1_questions"/>
                </ProjectGridElement>
                <ProjectGridElement header="Лабораторная №2" text={"Начиная с этой лабы вы обречены возиться с шайтан-БЭВМ до конца первого курса, поздравляю"}>
                    <FileReportElement text={"Отчёт"} icon={<FaFilePdf/>} filepath={ReportLab2} filename="Opd_report_2"/>
                    <FileReportElement text={"Оригинальная БЭВМ"} icon={<FaFileArchive/>} filepath={ReportLab2} filename="Opd_report_2"/>
                    <FileReportElement text={"Крутая БЭВМ"} icon={<FaFileArchive/>} filepath={ReportLab2} filename="Opd_report_2"/>
                </ProjectGridElement>
            </Section>
            <Section header="Тесты">
                <ProjectGridElement header="Рубежка №1" text={"Рубежка затрагивает темы обоих лаб, спросить могут и Linux (всякие команды там и мб что-то ещё) и шайтан-БЭВМ (придётся делать трассировку ручками)."}>
                    <LinkReportElement text="Тренажёр для трассировки" to="https://se.ifmo.ru/~s263975/program-tracing/"/>
                </ProjectGridElement>
                <ProjectGridElement header="Зачёт" text={"В отличие от большинства остальных предметов в первом семестре, чтобы получить зачёт по ОПД, придётся на него сходить, если не повезло с автоматом. Спросить на нём могут что угодно по материалу семестра."}>
                    <FileReportElement text="Билеты у одной из групп" icon={<FaFilePdf/>} filepath={OpdTickets} filename="Opd_tickets"/>
                </ProjectGridElement>
            </Section>
        </InfoPageTemplate>
    );
};

export default OPD;