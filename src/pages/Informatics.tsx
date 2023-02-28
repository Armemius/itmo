import React from 'react';
import InfoPageTemplate from "../components/InfoPageTemplate";
import Section from "../components/Section";
import ProjectGridElement from "../components/grid-elements/ProjectGridElement";
import FileReportElement from "../components/grid-elements/report-elements/FileReportElement";
import {FaFileAlt, FaFileArchive, FaFileCsv, FaFilePdf, FaPython} from "react-icons/fa";
import LinkReportElement from "../components/grid-elements/report-elements/LinkReportElement";
import TextGridElement from "../components/grid-elements/TextGridElement";

import InfTask1 from "../resources/shared/informatics/tasks/TASK_1.pdf";
import InfTask2 from "../resources/shared/informatics/tasks/TASK_2.pdf";
import InfTask3 from "../resources/shared/informatics/tasks/TASK_3.pdf";
import InfTask4 from "../resources/shared/informatics/tasks/TASK_4.pdf";
import InfTask5 from "../resources/shared/informatics/tasks/TASK_5.pdf";
import InfTask5Data from "../resources/shared/informatics/tasks/TASK_5_DATA.csv"
import InfTask6Extra from "../resources/shared/informatics/tasks/TASK_6_EXTRA.pdf";
import InfTask6Data from "../resources/shared/informatics/tasks/Euclid.pdf";

import ReportLab1 from "../resources/shared/informatics/labs/INF_LAB_1.docx";
import ReportLab2 from "../resources/shared/informatics/labs/INF_LAB_2.docx";
import ReportLab3 from "../resources/shared/informatics/labs/INF_LAB_3.py";
import ReportLab4 from "../resources/shared/informatics/labs/INF_LAB_4.docx";
import ReportLab5 from "../resources/shared/informatics/labs/INF_LAB_5.zip";
import ReportLab6 from "../resources/shared/informatics/labs/INF_LAB_6.zip";

import Annotation1Pdf from "../resources/shared/informatics/annotations/ANNOTATION_1.pdf";
import Annotation2Pdf from "../resources/shared/informatics/annotations/ANNOTATION_2.pdf";
import Annotation3Pdf from "../resources/shared/informatics/annotations/ANNOTATION_3.pdf";
import Annotation4Pdf from "../resources/shared/informatics/annotations/ANNOTATION_4.pdf";
import Annotation5Pdf from "../resources/shared/informatics/annotations/ANNOTATION_5.pdf";
import Annotation6Pdf from "../resources/shared/informatics/annotations/ANNOTATION_6.pdf";
import Annotation7Pdf from "../resources/shared/informatics/annotations/ANNOTATION_7.pdf";
import Annotation8Pdf from "../resources/shared/informatics/annotations/ANNOTATION_8.pdf";

import Annotation1Docx from "../resources/shared/informatics/annotations/ANNOTATION_1.docx";
import Annotation2Docx from "../resources/shared/informatics/annotations/ANNOTATION_2.docx";
import Annotation3Docx from "../resources/shared/informatics/annotations/ANNOTATION_3.docx";
import Annotation4Docx from "../resources/shared/informatics/annotations/ANNOTATION_4.docx";
import Annotation5Docx from "../resources/shared/informatics/annotations/ANNOTATION_5.docx";
import Annotation6Docx from "../resources/shared/informatics/annotations/ANNOTATION_6.docx";
import Annotation7Docx from "../resources/shared/informatics/annotations/ANNOTATION_7.docx";
import Annotation8Docx from "../resources/shared/informatics/annotations/ANNOTATION_8.docx";

import Test1 from "../resources/shared/informatics/tests/TEST_1.zip";
import Test2 from "../resources/shared/informatics/tests/TEST_2.zip";

const pdfAnnotations = [
    Annotation1Pdf,
    Annotation2Pdf,
    Annotation3Pdf,
    Annotation4Pdf,
    Annotation5Pdf,
    Annotation6Pdf,
    Annotation7Pdf,
    Annotation8Pdf
];

const docxAnnotations = [
    Annotation1Docx,
    Annotation2Docx,
    Annotation3Docx,
    Annotation4Docx,
    Annotation5Docx,
    Annotation6Docx,
    Annotation7Docx,
    Annotation8Docx
]

const Informatics = () => {
    return (
        <InfoPageTemplate header="Информатика">
            <Section header="Лабораторные">
                <ProjectGridElement header="Лабораторная №1" text="Небольшая лабораторная на системы счисления и величины для представления информации">
                    <FileReportElement text="Задание" icon={<FaFilePdf/>} filepath={InfTask1} filename="Task_lab_1"/>
                    <FileReportElement text="Отчёт" icon={<FaFileAlt/>} filepath={ReportLab1} filename="Informatics_report_1"/>
                </ProjectGridElement>
                <ProjectGridElement header="Лабораторная №2" text="Синтез помехоустойчивого кода: задание и вопросы на работу с кодом Хэмминга">
                    <FileReportElement text="Задание" icon={<FaFilePdf/>} filepath={InfTask2} filename="Task_lab_2"/>
                    <FileReportElement text="Отчёт" icon={<FaFileAlt/>} filepath={ReportLab2} filename="Informatics_report_2"/>
                </ProjectGridElement>
                <ProjectGridElement header="Лабораторная №3" text="Регулярные выражения, функции для работы с ними в питухоне и всё что с ними связано">
                    <FileReportElement text="Задание" icon={<FaFilePdf/>} filepath={InfTask3} filename="Task_lab_3"/>
                    <FileReportElement text="Отчёт" icon={<FaPython/>} filepath={ReportLab3} filename="Informatics_report_3"/>
                </ProjectGridElement>
                <ProjectGridElement header="Лабораторная №4" text="Различные форматы сериализации данных, надо написать парсер который конвертирует один формат в другой (например JSON в YAML)">
                    <FileReportElement text="Задание" icon={<FaFilePdf/>} filepath={InfTask4} filename="Task_lab_4"/>
                    <FileReportElement text="Отчёт" icon={<FaFileAlt/>} filepath={ReportLab4} filename="Informatics_report_4"/>
                </ProjectGridElement>
                <ProjectGridElement header="Лабораторная №5" text="Ох уж этот старый добрый Exel">
                    <FileReportElement text="Задание" icon={<FaFilePdf/>} filepath={InfTask5} filename="Task_lab_5"/>
                    <FileReportElement text="Отчёт" icon={<FaFileArchive/>} filepath={ReportLab5} filename="Informatics_report_5"/>
                    <FileReportElement text="Приложение" icon={<FaFileCsv/>} filepath={InfTask5Data} filename="Task_lab_5_data"/>
                </ProjectGridElement>
                <ProjectGridElement header="Лабораторная №6" text="Добро пожаловать в LaTex, задание находится в книге по ссылке, 7-ая работа, 1-ое обязательное и необязательное задание">
                    <LinkReportElement text="Задание" to="https://books.ifmo.ru/file/pdf/2464.pdf"/>
                    <FileReportElement text="Отчёт" icon={<FaFileArchive/>} filepath={ReportLab6} filename="Informatics_report_6"/>
                    <FileReportElement text="Доп. задание" icon={<FaFilePdf/>} filepath={InfTask6Extra} filename="Task_lab_6_extra"/>
                    <FileReportElement text="Приложение" icon={<FaFilePdf/>} filepath={InfTask6Data} filename="Task_lab_6_data"/>
                </ProjectGridElement>
            </Section>
            <Section header="Аннотации">
                <TextGridElement header="Ахтунг">
                    Балакшин лично проверяет каждую аннотацию, поэтому крайне не рекомендуется катать их друг у друга, чтобы потом вам не сделали бим-бим-бом-бом.
                    То же самое касается и прошлогодних аннотаций.
                </TextGridElement>
                <ProjectGridElement header="Aннотации в PDF">
                    {
                        pdfAnnotations.map((value, index) =>
                        <FileReportElement text={`Аннотация №${index + 1}`} icon={<FaFilePdf/>} filepath={value} filename={`Annotation_${index + 1}`}/>)
                    }
                </ProjectGridElement>
                <ProjectGridElement header="Aннотации в DOCX">
                    {
                        docxAnnotations.map((value, index) =>
                            <FileReportElement text={`Аннотация №${index + 1}`} icon={<FaFileAlt/>} filepath={value} filename={`Annotation_${index + 1}`}/>)
                    }
                </ProjectGridElement>
            </Section>
            <Section header="Тесты">
                <TextGridElement header="Ахтунг">
                    Тесты актуальны для 2022 года, но в будущем их актуальность будет постепенно снижаться, т.к. Балакшин говорил что хитрые студенты собирают свою базу ответов)))
                    и поэтому он постепенно обновляет и добавляет новые вопросы
                </TextGridElement>
                <ProjectGridElement header="Тест №1" text="Тест на тему 'Теоретические основы информатики'">
                    <FileReportElement text="Вопросы" icon={<FaFileArchive/>} filepath={Test1} filename="Test_1"/>
                </ProjectGridElement>
                <ProjectGridElement header="Тест №2" text="Тест на тему 'Современные методы и средства обработки информации'">
                    <FileReportElement text="Вопросы" icon={<FaFileArchive/>} filepath={Test2} filename="Test_2"/>
                </ProjectGridElement>
            </Section>
        </InfoPageTemplate>
    );
};

export default Informatics;