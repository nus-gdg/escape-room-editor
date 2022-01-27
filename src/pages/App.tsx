import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {RootStoreProvider} from "../common/containers/RootStore";
import {GeneralPage} from "./GeneralPage/GeneralPage";

export const App = () => (
    <ChakraProvider resetCSS>
        <RootStoreProvider>
            <GeneralPage />
        </RootStoreProvider>
    </ChakraProvider>
)
