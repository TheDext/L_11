import React, { useState, useRef, useEffect, useCallback } from "react";
import Divider from "../../common/divider";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);
    const [data, setData] = useState({});

    const validateWithoutCallback = (data) => {
        console.log("data_withCallback", data);
    };

    const validateWithCallback = useCallback((data) => {
        console.log("data_withOutCallback", data);
    }, []);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>render withoutCallback: {withoutCallback.current}</p>
            <p>render withCallback: {withCallback.current}</p>
            <label htmlFor="login">Login</label>
            <input
                type="text"
                id="login"
                name="login"
                className="form-control"
                value={data.login || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
