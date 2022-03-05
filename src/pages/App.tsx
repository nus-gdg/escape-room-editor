import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {RootProvider} from "../common/containers/Root";
import {GeneralPage} from "./GeneralPage/GeneralPage";
import {ContentPage} from "./ContentPage/ContentPage";
import {Toolbar} from "./Toolbar/Toolbar";

export const App = () => (
    <ChakraProvider resetCSS>
        <RootProvider>
            <Toolbar />
            <GeneralPage />
        </RootProvider>
    </ChakraProvider>
)
