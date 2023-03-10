import React from 'react';
import NotFound from "../pages/NotFound";
import Programming from "../pages/Programming";
import Informatics from "../pages/Informatics";
import OPD from "../pages/OPD";
import Maths from "../pages/Maths";
import DiscreteMaths from "../pages/DiscreteMaths";
import Main from "../pages/Main";
import Databases from "../pages/Databases";
import KikAndBzd from "../pages/KikAndBzd";

export enum Pages {
    MAIN = "main",
    PROGRAMMING = "programming",
    INFORMATICS = "informatics",
    OPD = "opd",
    MATHS = "maths",
    DISCRETE_MATHS = "discrete_maths",
    HISTORY = "history",
    DATABASES = "databases",
    KIK_AND_BZD = "kik_and_bzd"
}

const ParamsRouter = () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    switch (page) {
        case null:
            return (
                <Main/>
            )
        case Pages.PROGRAMMING:
            return (
                <Programming/>
            )
        case Pages.INFORMATICS:
            return (
                <Informatics/>
            )
        case Pages.OPD:
            return (
                <OPD/>
            )
        case Pages.MATHS:
            return (
                <Maths/>
            )
        case Pages.DISCRETE_MATHS:
            return (
                <DiscreteMaths/>
            )
        case Pages.DATABASES:
            return (
                <Databases/>
            )
        case Pages.KIK_AND_BZD:
            return (
                <KikAndBzd/>
            )
        default:
            return (
                <NotFound/>
            )
    }
};

export default ParamsRouter;