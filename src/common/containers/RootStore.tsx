import {initialState, State} from "../../state/state";
import React, {createContext, Dispatch, useReducer} from "react";
import {ActionType, userReducer} from "../../state/user/userReducer";

export interface RootStoreContext {
    state: State;
    dispatch: Dispatch<ActionType>;
}

export const RootStore = createContext<RootStoreContext>({} as RootStoreContext);

export const RootStoreProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<State, ActionType>>(
        userReducer,
        initialState
    );
    const value = { state, dispatch };
    return <RootStore.Provider value={value}>{children}</RootStore.Provider>;
}
