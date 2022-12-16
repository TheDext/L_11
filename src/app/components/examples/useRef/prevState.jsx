import React, { useState, useRef, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [currentState, setCurrentState] = useState("false");
    const toggleOtherState = () => {
        setCurrentState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = currentState;
    });

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prevState: {prevState.current}</p>
            <p>currentState: {currentState}</p>
            <button onClick={toggleOtherState} className="btn btn-primary">
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
