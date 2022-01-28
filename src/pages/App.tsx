import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {RootProvider} from "../common/containers/Root";
import {GeneralPage} from "./GeneralPage/GeneralPage";

export const App = () => (
    <ChakraProvider resetCSS>
        <RootProvider>
            <GeneralPage />
        </RootProvider>
    </ChakraProvider>
)
