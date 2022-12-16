import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const someRef = useRef();

    const handleFocus = () => {
        someRef.current.focus();
    };
    const handleWidthChange = () => {
        someRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <input
                ref={someRef}
                type="text"
                id="text"
                className="form-control"
            />

            <button onClick={handleFocus} className="btn btn-primary">
                Фокус input
            </button>
            <button onClick={handleWidthChange} className="btn btn-secondary">
                Изменить ширину объекта
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
