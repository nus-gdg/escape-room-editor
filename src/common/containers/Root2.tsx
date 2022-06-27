import React, {createContext, Dispatch, useReducer} from "react";
import Action from "../../state/~actions";
import {reducer} from "../../state/~reducer";
import Store from "../../state/store";

export const RootStore = createContext<Store>(new Store());
export const RootDispatch = createContext<Dispatch<Action<Store>>>(() => {});

export const RootProvider: React.FC = ({ children }) => {
    const [store, dispatch] = useReducer<React.Reducer<Store, Action<Store>>>(
        reducer,
        new Store()
    );
    return (
        <RootDispatch.Provider value={dispatch}>
            <RootStore.Provider value={store}>
                {children}
            </RootStore.Provider>
        </RootDispatch.Provider>
    );
}
