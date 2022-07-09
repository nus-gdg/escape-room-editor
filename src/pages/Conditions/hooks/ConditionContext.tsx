import React, { useContext, useReducer, useEffect } from "react";
import { Condition } from "../../../state/data/data";
import ConditionReducer, {
    ConditionAction,
    ConditionActionTypes,
    ConditionState,
} from "./ConditionReducer";

interface ConditionContextInfo extends ConditionState {
    dispatcher: React.Dispatch<ConditionAction>;
}

const ConditionContext = React.createContext<ConditionContextInfo | null>(null);

export const useConditionsContext = () => {
    return useContext(ConditionContext);
};

interface Props {
    initialCondition: Condition;
    children: React.ReactNode;
}

export const ConditionProvider = ({ initialCondition, children }: Props) => {
    const [state, dispatcher] = useReducer(ConditionReducer, {
        conditions: {},
        order: [],
        mainCondition: undefined,
    });

    useEffect(() => {
        dispatcher({
            type: ConditionActionTypes.INIT,
            payload: { initialCondition: initialCondition },
        });
    }, [initialCondition]);

    return (
        <ConditionContext.Provider
            value={{
                conditions: state.conditions,
                order: state.order,
                mainCondition: state.mainCondition,
                dispatcher,
            }}
        >
            {children}
        </ConditionContext.Provider>
    );
};
