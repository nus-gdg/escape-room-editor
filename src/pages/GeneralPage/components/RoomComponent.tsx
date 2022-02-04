import React, { Component } from 'react';
import { Text, Textarea, Box } from '@chakra-ui/react'
import TextInput from './TextInputComponent';
import ContentInfo from './ContentComponent';
import ContentComponent from './ContentComponent';

interface Props {

}
 
interface State {
    roomName: string;

    contents: {
        roomTitle: string;
        image: string;
        roomDescription: string;
    };

    /*
    * {commandName, recipe[]}, {inventoryItem, boolean option}, {flag, boolean option}
    */
    textCmds: [];

    /*
    * {button text, destination}
    */
    buttonReactions: [];
}

class RoomComponent extends React.Component<Props, State> {
    render() { 
        return (
            <div style = {{display: 'flex', flexDirection: 'column', padding: "1%"}}>
                <TextInput title = "Room Name:"></TextInput>
                
                <ContentComponent/>
            </div>
        );
    }
}

export default RoomComponent;