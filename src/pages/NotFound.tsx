import React from 'react';
import getMessage from "../util/GreetMessages";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="w-fill h-fill ricardo-background"/>
            <div className="w-fill h-fill ricardo-background-filter"/>
            <div className="w-fill h-fill flex-container">
                <div className="w-fill main-header">
                    <div>
                        <h1>Стоп ошибка 000</h1>
                        <h6><a className="link-text" href="./">Вернуться на путь истинный</a></h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;