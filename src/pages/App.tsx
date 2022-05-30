import React, {CSSProperties} from 'react'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import {RootProvider} from "../common/containers/Root";
import {ContentObject} from "../common/components/ContentObject";

export const App = () => {
    const title = "Carrots GET!"

    const hamsterImg = "https://i.pinimg.com/originals/40/87/a6/4087a632b7855c85c66294e76e1ed81d.jpg";
    const birdImg = "https://i.pinimg.com/736x/5e/2b/74/5e2b74b9ba6e196d5837ef586eb70794.jpg";
    const missingImg = "https://ir.pinimg.com/736x/5e/2b/74/5e2b74b9ba6e196d5837ef586eb70794.jpg";

    const d1 = "Potatoes :potato: <b>hello</b> ***are*** **very** *delicious* ~~right?~~ `Agreed!` __yes__ _i_ do <#30333>";
    const d2 = "hello <b>hello</b> <:carrot:881406221654044682> hello";
    const d3 = "why is this ```working```";
    const d4 = "yummy :carrot: :third_place_medal: :woman-swimming: carrots";
    const d5 = "yummy";

    const paddingStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        padding: "30px",
    }

    return (
        <div style={{
            display: "flex",
            height: "100vh",
        }}>
            <ChakraProvider resetCSS>
                <RootProvider>
                    {/*<Toolbar />*/}
                    <div style={paddingStyle} >
                        <ContentObject title={title}
                                       description={d1}
                                       imageUrl={hamsterImg} />
                    </div>
                    {/*<EmojiMenu />*/}
                    {/*<GeneralPage />*/}
                    {/*<ContentPage />*/}
                </RootProvider>
            </ChakraProvider>
        </div>
    )
}
