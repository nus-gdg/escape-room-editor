import React, { Component } from 'react';
import { Text, Textarea, Box } from '@chakra-ui/react'
import TextInput from './TextInput';
import ContentInfo from './ContentInfo';

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

class RoomInfo extends React.Component<Props, State> {
    render() { 
        return (
            <div style = {{display: 'flex', flexDirection: 'column', padding: "1%"}}>
                <TextInput title = "Room Name:"></TextInput>
                
                <ContentInfo/>
            </div>
        );
    }
}

export default RoomInfo;