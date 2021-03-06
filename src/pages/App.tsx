import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import {RootProvider} from "../common/containers/Root2";
import {GeneralPage} from "./GeneralPage/~GeneralPage";
import './App.css';

export const App = () => {
    return (
        <div id={"app"} >
            <ChakraProvider resetCSS>
                <RootProvider>
                    <GeneralPage />
                </RootProvider>
            </ChakraProvider>
        </div>
    )
}
