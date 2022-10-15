import React, {createContext, Dispatch, useReducer} from 'react'
import {GeneralPage} from "../pages";
import {initialStore, reducers, Store} from "./store";
import './App.css';
import {Action, createUuid} from "../constants";

export const AppStore = createContext<Store>({} as Store);
export const AppDispatch = createContext<Dispatch<Action>>(() => {});

AppStore.displayName = "AppStore";
AppDispatch.displayName = "AppDispatch";

export const App = () => {
    const [state, dispatch] = useReducer<React.Reducer<Store, Action>>(
        reducers,
        initialStore,
    );

    function testUuids() {
        for (let i = 0; i < 10; i++) {
            console.log(createUuid());
        }
    }

    return (
        <div id={"app"} >
            {/*<ChakraProvider resetCSS>*/}
            <AppDispatch.Provider value={dispatch}>
                <AppStore.Provider value={state}>
                    <GeneralPage />
                </AppStore.Provider>
            </AppDispatch.Provider>
            {/*</ChakraProvider>*/}
        </div>
    )
}
