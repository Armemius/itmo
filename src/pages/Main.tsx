import React from 'react';
import getMessage from "../util/GreetMessages";
import Section from "../components/Section";
import LinkGridElement from "../components/LinkGridElement";
import {Pages} from "../components/ParamsRouter";

import ProgrammingImg1 from "../resources/programming_1.jpg";
import OPDImg1 from "../resources/OPD_1.jpg";
import InformaticsImg from "../resources/informatics.jpg";
import MathImg1 from "../resources/math_1.jpg";
import DiskraImg1 from "../resources/diskra_1.jpg";
import FillerImg from "../resources/filler.jpg";
import TextGridElement from "../components/TextGridElement";

const Main = () => {
    return (
        <>
            <div className="w-fill h-fill ricardo-background"/>
            <div className="w-fill h-fill ricardo-background-filter"/>
            <div className="w-fill h-fill flex-container">
                <div className="w-fill main-header">
                    <div>
                        <h1>Welc♂me to ITM♂</h1>
                        <h6>{getMessage()}</h6>
                    </div>
                </div>
            </div>
            <div className="main-content-header">СППО // ВТ ИТМО</div>
            <div className="main-content">
                <Section header="I Семестр" anchor="sem1">
                    <LinkGridElement header="Программирование" link={Pages.PROGRAMMING} img={ProgrammingImg1} />
                    <LinkGridElement header="Информатика" link={Pages.INFORMATICS} img={InformaticsImg} />
                    <LinkGridElement header="ОПД" link={Pages.OPD} img={OPDImg1} />
                    <LinkGridElement header="Математика" link={Pages.MATHS} img={MathImg1} />
                    <LinkGridElement header="Дискретная математика" link={Pages.DISCRETE_MATHS} img={DiskraImg1} />
                </Section>
                <Section header="II Семестр" anchor="sem2">
                    <LinkGridElement header="Программирование" link={Pages.PROGRAMMING} img={FillerImg} />
                    <LinkGridElement header="ОПД" link={Pages.OPD} img={FillerImg} />
                    <LinkGridElement header="Математика" link={Pages.MATHS} img={FillerImg} />
                    <LinkGridElement header="Дискретная математика" link={Pages.DISCRETE_MATHS} img={FillerImg} />
                    <LinkGridElement header="Базы данных" link={Pages.DATABASES} img={FillerImg} />
                    <LinkGridElement header="КиК" link={Pages.KIK} img={FillerImg} />
                    <LinkGridElement header="БЖД" link={Pages.BZD} img={FillerImg} />
                </Section>
                <Section header="III Семестр" anchor="sem3">
                    <TextGridElement header="Будет позже" text="Осталось только дожить до следующего семестра"/>
                </Section>
            </div>
        </>
    );
};

export default Main;