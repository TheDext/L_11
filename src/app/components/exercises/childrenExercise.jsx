import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponentsList = ({ children }) =>
    React.Children.map(children, (child, index) =>
        React.cloneElement(child, { order: index + 1 })
    );

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};

const Component = ({ order }) => {
    return <div>{order} Компонент списка</div>;
};

Component.propTypes = {
    order: PropTypes.number
};
export default ChildrenExercise;
