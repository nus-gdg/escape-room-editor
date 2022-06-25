import React, {createContext, Dispatch, useContext, useReducer} from "react";
import Action from "../~actions";
import {reducer} from "../~reducer";
import Store from "../store";
import Data, {testData} from "./data";

export interface DataContext {
    store: Data,
    dispatch: Dispatch<Action<Data>>;
}

const DataStore = createContext<DataContext>({} as DataContext);
export default DataStore;

export const DataStoreProvider: React.FC = ({ children }) => {
    const [store, dispatch] = useReducer<React.Reducer<Data, Action<Data>>>(
        reducer,
        // new Data()
        testData
    );

    const context = { store, dispatch };
    return <DataStore.Provider value={context}>{children}</DataStore.Provider>;
}
