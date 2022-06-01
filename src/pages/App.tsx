import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {RootProvider} from "../common/containers/Root";
import {GeneralPage} from "./GeneralPage/GeneralPage";
import './App.css';

export const App = () => {
    return (
        <div id={"root"} >
            <ChakraProvider resetCSS>
                <RootProvider>
                        {/*<Toolbar />*/}
                        <GeneralPage />
                        {/*<ContentPage />*/}
                </RootProvider>
            </ChakraProvider>
        </div>
    )
}
