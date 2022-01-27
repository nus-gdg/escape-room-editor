import {initialState, StateType} from "./StateType";
import React, {createContext, Dispatch, useReducer} from "react";
import {ActionType, reducer} from "./reducer";

export interface ContextType {
    state: StateType;
    dispatch: Dispatch<ActionType>;
}

export const RootStore = createContext({} as ContextType);

export const RootStoreProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(
        reducer,
        initialState
    );

    const value = { state, dispatch };

    return (
        <RootStore.Provider value={value}>
            {children}
        </RootStore.Provider>
    );
}
