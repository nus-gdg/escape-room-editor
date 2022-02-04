import React, { Component } from 'react';
import { Text, Textarea, Box, Container } from '@chakra-ui/react'
import TextInput from './TextInput';

interface Props {
}
 
interface State {
    
}

class ContentInfo extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <Text fontSize='20px'>
                    Contents
                </Text>
                <Container bg={'grey'} centerContent>
                    <TextInput title = "Room title:"/>
                    <TextInput title = "Image url:"/>
                    <TextInput title = "Room description:"/>
                </Container>
            </div>
        );
    }
}

export default ContentInfo;