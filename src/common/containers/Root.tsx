import {initialState, State} from "../../state/state";
import React, {createContext, Dispatch, useReducer} from "react";
import {ActionType, userReducer} from "../../state/user/userReducer";

export interface RootContext {
    state: State;
    dispatch: Dispatch<ActionType>;
}

export const Root = createContext<RootContext>({} as RootContext);

export const RootProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<State, ActionType>>(
        userReducer,
        initialState
    );
    const value = { state, dispatch };
    return <Root.Provider value={value}>{children}</Root.Provider>;
}
