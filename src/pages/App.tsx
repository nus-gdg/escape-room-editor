import React from 'react'
import { extendTheme, ChakraProvider, Box } from '@chakra-ui/react'
import {RootProvider} from "../common/containers/Root";

export const App = () => {
    const hamsterImg = "https://i.pinimg.com/originals/40/87/a6/4087a632b7855c85c66294e76e1ed81d.jpg";
    const birdImg = "https://i.pinimg.com/736x/5e/2b/74/5e2b74b9ba6e196d5837ef586eb70794.jpg";

    return (
        <div style={{
            display: "flex",
            height: "100vh",
        }}>
            <ChakraProvider resetCSS>
                <RootProvider>
                    {/*<Toolbar />*/}
                    <Box width={"100%"} height={"100%"} padding={"30px"}>
                    </Box>
                    {/*<EmojiMenu />*/}
                    {/*<GeneralPage />*/}
                    {/*<ContentPage />*/}
                </RootProvider>
            </ChakraProvider>
        </div>
    )
}
