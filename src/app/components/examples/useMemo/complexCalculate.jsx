import React, { useState, useMemo, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

function fatorial(n) {
    return n ? n * fatorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("runFactorial");
    return fatorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherstate] = useState(false);
    const fact = useMemo(() => runFactorial(value), [value]);
    const buttonColor = useMemo(
        () => ({ value: otherState ? "primary" : "secondary" }),
        [otherState]
    );

    useEffect(() => {
        console.log("render");
    }, [buttonColor]);

    const handleIncrement = () => setValue((prevState) => prevState + 10);
    const handleDecrement = () => setValue((prevState) => prevState - 10);
    const handleOtherState = () => setOtherstate(!otherState);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <h1>Value: {value}</h1>
                <p>result fact: {fact}</p>
                <button className="btn btn-primary" onClick={handleIncrement}>
                    +
                </button>
                <button className="btn btn-secondary" onClick={handleDecrement}>
                    -
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider />
                <button
                    className={`btn btn-${buttonColor.value}`}
                    onClick={handleOtherState}
                >
                    changeColor
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
