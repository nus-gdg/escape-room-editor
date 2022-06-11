import React, {createContext, Dispatch, useReducer} from "react";
import Action from "../../state/~actions";
import {reducer} from "../../state/~reducer";
import Store from "../../state/store";

export interface RootContext2 {
    store: Store,
    dispatch: Dispatch<Action>;
}

const Root2 = createContext<RootContext2>({} as RootContext2);
export default Root2;

export const RootProvider: React.FC = ({ children }) => {
    const [store, dispatch] = useReducer<React.Reducer<Store, Action>>(
        reducer,
        new Store()
    );

    const context = { store, dispatch };
    return <Root2.Provider value={context}>{children}</Root2.Provider>;
}
