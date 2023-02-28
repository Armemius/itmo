import React from 'react';
import InfoPageTemplate from "../components/InfoPageTemplate";
import Section from "../components/Section";
import ProjectGridElement from "../components/grid-elements/ProjectGridElement";
import FileReportElement from "../components/grid-elements/report-elements/FileReportElement";
import {FaFileArchive, FaFileInvoiceDollar, FaFilePdf} from "react-icons/fa";

import Homework1Pdf from "../resources/shared/discrete_math/homework/HW_1.pdf"
import Homework2Pdf from "../resources/shared/discrete_math/homework/HW_2.pdf"
import Homework3Pdf from "../resources/shared/discrete_math/homework/HW_3.pdf"
import Homework4Pdf from "../resources/shared/discrete_math/homework/HW_4.pdf"
import Homework5Pdf from "../resources/shared/discrete_math/homework/HW_5.pdf"
import Homework6Pdf from "../resources/shared/discrete_math/homework/HW_6.pdf"
import Homework7Pdf from "../resources/shared/discrete_math/homework/HW_7.pdf"
import Homework8Pdf from "../resources/shared/discrete_math/homework/HW_8.pdf"
import Coursework1Pdf from "../resources/shared/discrete_math/homework/CW_1.pdf";
import Coursework2Pdf from "../resources/shared/discrete_math/homework/CW_2_1.pdf";

import Homework1Tex from "../resources/shared/discrete_math/homework/HW_1.tex"
import Homework2Tex from "../resources/shared/discrete_math/homework/HW_2.tex"
import Homework3Tex from "../resources/shared/discrete_math/homework/HW_3.tex"
import Homework4Tex from "../resources/shared/discrete_math/homework/HW_4.tex"
import Homework5Tex from "../resources/shared/discrete_math/homework/HW_5.tex"
import Homework6Tex from "../resources/shared/discrete_math/homework/HW_6.tex"
import Homework7Tex from "../resources/shared/discrete_math/homework/HW_7.tex"
import Homework8Tex from "../resources/shared/discrete_math/homework/HW_8.tex"
import Coursework1Tex from "../resources/shared/discrete_math/homework/CW_1.tex";
import Coursework2Tex from "../resources/shared/discrete_math/homework/CW_2_1.tex";

import Test1 from "../resources/shared/discrete_math/tests/TEST_1.pdf";
import Test2 from "../resources/shared/discrete_math/tests/TEST_2.zip";
import Test3 from "../resources/shared/discrete_math/tests/TEST_3.zip";
import Test4 from "../resources/shared/discrete_math/tests/TEST_4.zip";
import Test5 from "../resources/shared/discrete_math/tests/TEST_5.zip";

const DiscreteMaths = () => {
    return (
        <InfoPageTemplate header="Дискретная математика">
            <Section header="Домашние задания (1 семестр)">
                <ProjectGridElement header="ДЗ №1" text="Простой перевод чисел в различные форматы их представления">
                    <FileReportElement text={"Отчёт"} icon={<FaFilePdf/>} filepath={Homework1Pdf} filename="Discrete_math_hw_1"/>
                    <FileReportElement text={"Исходники"} icon={<FaFileInvoiceDollar/>} filepath={Homework1Tex} filename="Discrete_math_hw_1.tex"/>
                </ProjectGridElement>
                <ProjectGridElement header="ДЗ №2" text="Сложение знаковых и беззнаковых чисел с фиксированной запятой с выставлением флагов результата">
                    <FileReportElement text={"Отчёт"} icon={<FaFilePdf/>} filepath={Homework2Pdf} filename="Discrete_math_hw_2"/>
                    <FileReportElement text={"Исходники"} icon={<FaFileInvoiceDollar/>} filepath={Homework2Tex} filename="Discrete_math_hw_2.tex"/>
                </ProjectGridElement>
                <ProjectGridElement header="ДЗ №3" text="Вычитание знаковых и беззнаковых чисел с фиксированной выставлением флагов результата">
                    <FileReportElement text={"Отчёт"} icon={<FaFilePdf/>} filepath={Homework3Pdf} filename="Discrete_math_hw_3"/>
                    <FileReportElement text={"Исходники"} icon={<FaFileInvoiceDollar/>} filepath={Homework3Tex} filename="Discrete_math_hw_3.tex"/>
                </ProjectGridElement>
                <ProjectGridElement header="ДЗ №4" text="Умножение чисел с фиксированной запятой, начало конца">
                    <FileReportElement text={"Отчёт"} icon={<FaFilePdf/>} filepath={Homework4Pdf} filename="Discrete_math_hw_4"/>
                    <FileReportElement text={"Исходники"} icon={<FaFileInvoiceDollar/>} filepath={Homework4Tex} filename="Discrete_math_hw_4.tex"/>
                </ProjectGridElement>
                <ProjectGridElement header="ДЗ №5" text="Самое отвратительное задание из всех: деление чисел с фиксированной запятой">
                    <FileReportElement text={"Отчёт"} icon={<FaFilePdf/>} filepath={Homework5Pdf} filename="Discrete_math_hw_5"/>
                    <FileReportElement text={"Исходники"} icon={<FaFileInvoiceDollar/>} filepath={Homework5Tex} filename="Discrete_math_hw_5.tex"/>
                </ProjectGridElement>
                <ProjectGridElement header="ДЗ №6" text="Представление чисел с плавающей запятой в различных форматах, выполнение с ними операций сложения и вычитания и нахождение погрешности">
                    <FileReportElement text={"Отчёт"} icon={<FaFilePdf/>} filepath={Homework6Pdf} filename="Discrete_math_hw_6"/>
                    <FileReportElement text={"Исходники"} icon={<FaFileInvoiceDollar/>} filepath={Homework6Tex} filename="Discrete_math_hw_6.tex"/>
                </ProjectGridElement>
                <ProjectGridElement header="ДЗ №7" text="Умножение чисел с плавающей запятой в различных форматах и нахождение погрешности">
                    <FileReportElement text={"Отчёт"} icon={<FaFilePdf/>} filepath={Homework7Pdf} filename="Discrete_math_hw_7"/>
                    <FileReportElement text={"Исходники"} icon={<FaFileInvoiceDollar/>} filepath={Homework7Tex} filename="Discrete_math_hw_7.tex"/>
                </ProjectGridElement>
                <ProjectGridElement header="ДЗ №8" text="Деление чисел с плавающей запятой в различных форматах и нахождение погрешности">
                    <FileReportElement text={"Отчёт"} icon={<FaFilePdf/>} filepath={Homework8Pdf} filename="Discrete_math_hw_8"/>
                    <FileReportElement text={"Исходники"} icon={<FaFileInvoiceDollar/>} filepath={Homework8Tex} filename="Discrete_math_hw_8.tex"/>
                </ProjectGridElement>
                <ProjectGridElement header="Курсовая ч.1" text="Синтез одновыходной комбинационной схемы по заданной фунции">
                    <FileReportElement text={"Отчёт"} icon={<FaFilePdf/>} filepath={Coursework1Pdf} filename="Discrete_math_cw_1"/>
                    <FileReportElement text={"Исходники"} icon={<FaFileInvoiceDollar/>} filepath={Coursework1Tex} filename="Discrete_math_cw_1.tex"/>
                </ProjectGridElement>
                <ProjectGridElement header="Курсовая ч.2" text="Синтез многовыходной комбинационной схемы по заданным фунциям (ооо как же я ненавижу эту работу)">
                    <FileReportElement text={"Отчёт"} icon={<FaFilePdf/>} filepath={Coursework2Pdf} filename="Discrete_math_cw_2"/>
                    <FileReportElement text={"Исходники"} icon={<FaFileInvoiceDollar/>} filepath={Coursework2Tex} filename="Discrete_math_cw_2.tex"/>
                </ProjectGridElement>
            </Section>
            <Section header="Тесты">
                <ProjectGridElement header="Тест №1" text="Тест по теме 'Основы теории множеств'">
                    <FileReportElement text="Вопросы" icon={<FaFilePdf/>} filepath={Test1} filename="Discrete_math_test1"/>
                </ProjectGridElement>
                <ProjectGridElement header="Тест №2" text="Тест по теме 'Булева алгебра и её приложения'">
                    <FileReportElement text="Варианты" icon={<FaFileArchive/>} filepath={Test2} filename="Discrete_math_test2"/>
                </ProjectGridElement>
                <ProjectGridElement header="Тест №3" text="Тест по теме 'Представление чисел в ЭВМ'">
                    <FileReportElement text="Варианты" icon={<FaFileArchive/>} filepath={Test3} filename="Discrete_math_test3"/>
                </ProjectGridElement>
                <ProjectGridElement header="Тест №4" text="Тест по теме 'Синтез комбинационных схем'">
                    <FileReportElement text="Варианты" icon={<FaFileArchive/>} filepath={Test4} filename="Discrete_math_test4"/>
                </ProjectGridElement>
                <ProjectGridElement header="Тест №5" text="Тест по теме 'Выполнение арифметических действий в ЭВМ'">
                    <FileReportElement text="Варианты" icon={<FaFileArchive/>} filepath={Test5} filename="Discrete_math_test5"/>
                </ProjectGridElement>
            </Section>
        </InfoPageTemplate>
    );
};

export default DiscreteMaths;