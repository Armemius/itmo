import React, {useState} from 'react';
import getMessage from "../util/GreetMessages";
import Section from "../components/Section";
import LinkGridElement from "../components/grid-elements/LinkGridElement";
import {Pages} from "../components/ParamsRouter";
import TextGridElement from "../components/grid-elements/TextGridElement";

// Semester 1
import ProgrammingImg1 from "../resources/images/programming_1.jpg";
import OPDImg1 from "../resources/images/OPD_1.jpg";
import InformaticsImg from "../resources/images/informatics.jpg";
import MathImg1 from "../resources/images/math_1.jpg";
import DiskraImg1 from "../resources/images/diskra_1.jpg";
import FillerImg from "../resources/images/filler.jpg";
// Semester 2
import ProgrammingImg2 from "../resources/images/programming_2.jpg";
import OPDImg2 from "../resources/images/opd_2.jpg";
import MathImg2 from "../resources/images/math_2.jpg";
import DiskraImg2 from "../resources/images/diskra_2.jpg";
import DatabasesImg from "../resources/images/databases.jpg";

const Main = () => {
    const [input, setInput] = useState('');
    const [message] = useState(getMessage());

    return (
        <>
            <div className="w-fill h-fill ricardo-background"/>
            <div className="w-fill h-fill ricardo-background-filter"/>
            <div className="w-fill h-fill flex-container">
                <div className="w-fill main-header">
                    <div>
                        <h1>Welc♂me to ITM♂</h1>
                        <h6>{message}</h6>
                    </div>
                </div>
            </div>
            <div className="main-content-header">СППО // ВТ ИТМО</div>
            <div className="main-content">
                <div className="main-content-description">
                    <p>
                        Здесь я буду стараться собирать как можно больше полезной информации по лабораторным, тестам и
                        предметам в целом. Если я пропустил что-то важное или вы просто хотите что-то добавить то можете либо написать мне в тг (@armemius),
                        либо прислать pull request в <a className="link-text" href="https://github.com/Armemius/itmo">репозиторий</a>.
                    </p>
                </div>
                <div className="main-content-search-container">
                    <form>
                        <b>Поиск по предмету:</b> <input type="search" className="main-content-searchbar" onChange={(event) => setInput(event.target.value)}/>
                    </form>
                </div>
                {input.toLowerCase().includes("амогус") ? <img src="https://media.tenor.com/gQV5VzHLWQIAAAAd/among-us-sus.gif" alt=""/> : null}
                <Section header="I Семестр" anchor="sem1" search={input} lined>
                    <LinkGridElement header="Программирование" link={Pages.PROGRAMMING} img={ProgrammingImg1} />
                    <LinkGridElement header="Информатика" link={Pages.INFORMATICS} img={InformaticsImg} />
                    <LinkGridElement header="ОПД" link={Pages.OPD} img={OPDImg1} />
                    <LinkGridElement header="Математика" link={Pages.MATHS} img={MathImg1} />
                    <LinkGridElement header="Дискретная математика" link={Pages.DISCRETE_MATHS} img={DiskraImg1} />
                </Section>
                <Section header="II Семестр" anchor="sem2" search={input} lined>
                    <LinkGridElement header="Программирование" link={Pages.PROGRAMMING} img={ProgrammingImg2} />
                    <LinkGridElement header="ОПД" link={Pages.OPD} img={OPDImg2} />
                    <LinkGridElement header="Математика" link={Pages.MATHS} img={MathImg2} />
                    <LinkGridElement header="Дискретная математика" link={Pages.DISCRETE_MATHS} img={DiskraImg2} />
                    <LinkGridElement header="Базы данных" link={Pages.DATABASES} img={DatabasesImg} />
                    <LinkGridElement header="БЖД и КиК" link={Pages.KIK_AND_BZD} img={FillerImg} />
                </Section>
                <Section header="III Семестр" anchor="sem3" search={input} lined>
                    <TextGridElement header="Будет позже">
                        Осталось только дожить до следующего семестра
                    </TextGridElement>
                </Section>
            </div>
        </>
    );
};

export default Main;