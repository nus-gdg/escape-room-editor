import React, { useContext, useState, useReducer } from "react";
import ConditionReducer, {
    ConditionAction,
    ConditionState,
} from "./ConditionReducer";

interface ConditionContextInfo extends ConditionState {
    dispatcher: React.Dispatch<ConditionAction>;
}

const ConditionContext = React.createContext<ConditionContextInfo | null>(null);

export const useConditions = () => {
    return useContext(ConditionContext);
};

export const ConditionProvider = (children: React.ReactNode) => {
    const [state, dispatcher] = useReducer(ConditionReducer, {
        conditions: {},
        conditionNames: {},
        mainCondition: undefined,
    });

    return (
        <ConditionContext.Provider
            value={{
                conditions: state.conditions,
                conditionNames: state.conditionNames,
                mainCondition: state.mainCondition,
                dispatcher,
            }}
        >
            {children}
        </ConditionContext.Provider>
    );
};
