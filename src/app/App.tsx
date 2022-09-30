import React from 'react'
import { GeneralPage } from "./pages";
import { StoreProvider } from "./store";
import './App.css';

export const App = () => {
    return (
        <div id={"app"} >
            {/*<ChakraProvider resetCSS>*/}
                <StoreProvider>
                    <GeneralPage />
                </StoreProvider>
            {/*</ChakraProvider>*/}
        </div>
    )
}
