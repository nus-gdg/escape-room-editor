import React, {useReducer, useState} from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {RootProvider} from "../common/containers/Root";
import {ContentData} from "./GeneralPage/Data/RoomData";
import {GeneralPage} from "./GeneralPage/GeneralPage";
import ContentEditor from "./GeneralPage/components/ContentEditor";
import './App.css';

export const App = () => {

    //Answer 5: https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
    const initialState: ContentData = {
        description: "",
        id: 0,
        imageLink: "",
        title: ""
    }

    const [state, updateState] = useReducer(
        (state: ContentData, updates: Partial<ContentData>) => ({
            ...state,
            ...updates,
        }),
        initialState
    )

    const [ta, updateTA] = useState("potato\npotato\npotato\n");
    const [tb, updateTB] = useState("carrot");
    const [show, updateShow] = useState(false);

    return (
        <div id={"root"} >
            <ChakraProvider resetCSS>
                <RootProvider>
                        {/*<Toolbar />*/}
                        {/*<GeneralPage />*/}
                        <ContentEditor content={state}
                                       onContentChanged={updateState} />
                </RootProvider>
            </ChakraProvider>
        </div>
    )
}
