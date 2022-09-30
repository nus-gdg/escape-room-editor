import React, {createContext, Dispatch, useReducer} from "react";
import {initialState, State} from "../state/state";
import {ActionType} from "../state/actions";
import {reducers} from "./reducers";

export interface AppStore {
    state: State;
    dispatch: Dispatch<ActionType>;
}

export const Store = createContext<AppStore>({} as AppStore);

export const StoreProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<State, ActionType>>(
        reducers,
        initialState
    );

    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}
