import React from "react";
import { Condition } from "../../state/data/data";
import ConditionsUI, { ConditionsUIProps } from "./ConditionsUI";
import { ConditionProvider } from "./hooks/ConditionContext";

interface Props extends ConditionsUIProps {
    initialCondition: Condition;
}

const ConditionsWrapper = (props: Props) => {
    return (
        <ConditionProvider initialCondition={props.initialCondition}>
            <ConditionsUI {...props} />
        </ConditionProvider>
    );
};

export default React.memo(ConditionsWrapper);
