import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Content } from "./Content"
// import {JsonFileReader} from "./JsonFileReader";
import {RootStoreProvider} from "./context";
import {Header} from "./Header";

export const App = () => (
    <ChakraProvider resetCSS>
        <RootStoreProvider>
            <Header />
        </RootStoreProvider>
    </ChakraProvider>
)
