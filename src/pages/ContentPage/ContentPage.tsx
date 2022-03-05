import React, {useRef} from 'react'
import {
    ChakraProvider,
    Box,
    FormControl,
    FormLabel,
    Textarea,
    Image,
    Input,
    Flex,
    Stack,
    Text,
    Heading,
} from '@chakra-ui/react'
import {Toolbar} from "../Toolbar/Toolbar";
import {useRoot} from "../../hooks/useRoot";
import {ContentAction} from "../../state/content/contentActions";

import 'emoji-mart/css/emoji-mart.css';
import {BaseEmoji, EmojiData, Picker,} from 'emoji-mart';
import { EmojiMenu } from '../../common/components/EmojiMenu';

export const ContentPage = () => {
    const ctx = useRoot();
    const separator = "\n";
    const htmlSeparator = "<br/>";

    const titleForm = useRef<HTMLInputElement | null>(null);

    function handleEmojiSelected(emoji: BaseEmoji) {
        ctx.dispatch({
            type: ContentAction.SET_TITLE,
            payload: { title: ctx.state.title.concat(emoji.native) }
        });
    }

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        ctx.dispatch({type: ContentAction.SET_TITLE, payload: { title: e.target.value }})
    }

    function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const lines: string[] = e.target.value.length === 0 ? [] : e.target.value.split(separator);
        ctx.dispatch({
            type: ContentAction.SET_DESCRIPTION,
            payload: { description: lines }
        })
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        ctx.dispatch({type: ContentAction.SET_IMAGE, payload: { image: e.target.value }})
    }

    function handleFlagsChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        ctx.dispatch({
            type: ContentAction.SET_FLAGS,
            payload: { flags: e.target.value.split(separator) }
        })
    }

    function test(text: string) {
        const regex = /<b>(.*?)<\/b>/ig;
        let match;

        return text;
    }

    //Rich text

    function createParagraph(text: string, index: number) {
        return text ? <div key={index}>{text}</div> : <br/>;
    }

    return (
        <ChakraProvider resetCSS>
            <Stack spacing={2}>
                <Toolbar/>
                <Flex>
                    <Box width="50%">
                        <EmojiMenu onEmojiSelected={handleEmojiSelected} />
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input value={ctx.state.title}
                                   ref={titleForm}
                                   onChange={handleTitleChange} />
                            <FormLabel>Description</FormLabel>
                            <Textarea value={ctx.state.description.join(separator)}
                                      onChange={handleDescriptionChange}
                                      resize="vertical"/>
                            <FormLabel>Image</FormLabel>
                            <Input value={ctx.state.image}
                                   onChange={handleImageChange}
                                   type={"url"} />
                            <FormLabel>Flags</FormLabel>
                            <Textarea value={ctx.state.flags.join(separator)}
                                      onChange={handleFlagsChange}
                                      resize={"vertical"}/>
                        </FormControl>
                    </Box>
                    <Box width="50%" position="relative">
                        <Box backgroundColor={"#2F3136"} maxWidth="100%" borderRadius={"5px"} position="absolute">
                            <Box backgroundColor={"#bd7ef9"} width="5px" height="100%" borderLeftRadius={"5px"} position="absolute" />
                            <Box paddingLeft={"20px"} padding={"20px"} height="100%">
                                <Heading as='h1' color={"#FFFFFF"} width="50%" fontSize='md' font-family={"sans-serif"} >
                                    {ctx.state.title}
                                </Heading>
                                <Text color={"#FFFFFF"} marginTop={"20px"} marginBottom={"20px"} fontSize='sm' font-family={"sans-serif"} >
                                    {/*<div dangerouslySetInnerHTML={{__html: emoji.replace_colons(ctx.state.description[0])}} />*/}
                                </Text>
                                <Image src={ctx.state.image} maxHeight={"360px"} border-collapse={"separate"} borderRadius={"5px"} objectFit={"scale-down"}/>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Stack>
        </ChakraProvider>
    )
}
