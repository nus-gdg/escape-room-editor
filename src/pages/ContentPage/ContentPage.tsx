import React from 'react'
import {
    ChakraProvider,
    Box,
    FormControl,
    FormLabel,
    Textarea,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Flex,
    Center,
    Stack,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import {Toolbar} from "../Toolbar/Toolbar";
import {useRoot} from "../../hooks/useRoot";
import {ContentAction} from "../../state/content/contentActions";

export const ContentPage = () => {
    const ctx = useRoot();
    const separator = "\n";

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        ctx.dispatch({type: ContentAction.SET_TITLE, payload: { title: e.target.value }})
    }

    function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        ctx.dispatch({
            type: ContentAction.SET_DESCRIPTION,
            payload: { description: e.target.value.split(separator) }
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

    return (
        <ChakraProvider resetCSS>
            <Stack spacing={2}>
                <Toolbar/>
                <Flex>
                    <Box width="50%">
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input value={ctx.state.title}
                                   onChange={handleTitleChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Textarea value={ctx.state.description.join(separator)}
                                      onChange={handleDescriptionChange}
                                      resize="vertical"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Image</FormLabel>
                            <Input value={ctx.state.image}
                                   onChange={handleImageChange}
                                   type={"url"} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Flags</FormLabel>
                            <Textarea value={ctx.state.flags.join(separator)}
                                      onChange={handleFlagsChange}
                                      resize={"vertical"}/>
                        </FormControl>
                    </Box>
                    <Box width="50%">
                        <Center backgroundColor="gray.500" width="100%" height="100%">
                            <Image height="100%" width="100%" src={ctx.state.image} objectFit={"cover"}/>
                        </Center>
                    </Box>
                </Flex>
            </Stack>
        </ChakraProvider>
    )
}
