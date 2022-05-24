import {initialState, State} from "../../state/state";
import React, {createContext, Dispatch, useReducer} from "react";
import {reducer} from "../../state/reducer";
import {ActionType} from "../../state/actions";

export interface RootContext {
    state: State;
    dispatch: Dispatch<ActionType>;
}

export const Root = createContext<RootContext>({} as RootContext);

export const RootProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<State, ActionType>>(
        reducer,
        initialState
    );

    const value = { state, dispatch };
    return <Root.Provider value={value}>{children}</Root.Provider>;
}
