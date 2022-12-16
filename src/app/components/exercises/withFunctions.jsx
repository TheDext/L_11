import React from "react";
import Card from "../common/Card";

const withFunctions = (Component) => () => {
    const isAuth = localStorage.getItem("isAuth");

    const onLogin = () => localStorage.setItem("isAuth", "token");
    const onLogOut = () => localStorage.removeItem("isAuth");

    return (
        <Card>
            <Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} />
        </Card>
    );
};

export default withFunctions;
