import {Toolbar} from "../Toolbar/Toolbar";
import TextInput from "./components/TextInputComponent";
import RoomInfo from "./components/RoomComponent";
import ContentInfo from "./components/ContentComponent";
import React, { Component } from 'react';

interface Props {
}
 
interface State {
    
}

class GeneralPage extends React.Component<Props, State> {
    render() {
        return (
            <>
                <RoomInfo/>
            </>
        );
    }
}

export default GeneralPage;