import React from 'react'
import {
    ChakraProvider,
    Box,
    FormControl,
    FormLabel,
    Textarea,
    Input,
    InputGroup,
    InputRightElement,
    Icon,
    Flex,
    Center,
    Stack,
    Button
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import {Toolbar} from "../Toolbar/Toolbar";
import {useRoot} from "../../hooks/useRoot";
import {FileAction} from "../../state/file/fileActions";

export const ContentPage = () => {
    const ctx = useRoot();

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        ctx.dispatch({type: FileAction.LOAD, payload: { title: e.target.value }})
    }

    function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        ctx.dispatch({type: FileAction.LOAD, payload: { description: e.target.value }})
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
                                   onChange={handleTitleChange}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Textarea value={ctx.state.description}
                                      onChange={handleDescriptionChange}
                                      resize="vertical"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Image</FormLabel>
                            <Input/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Flags</FormLabel>
                            <InputGroup>
                                <Input/>
                                <InputRightElement
                                    backgroundColor="whiteAlpha.500"
                                    overflow="visible"
                                >
                                    <SearchIcon/>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </Box>
                    <Box width="50%">
                        <Center backgroundColor="gray.500" width="100%" height="100%">
                            <Box
                                backgroundColor="facebook.500"
                                minWidth="75%"
                                minHeight="75%"
                                borderRadius={10}
                            />
                        </Center>
                    </Box>
                </Flex>
            </Stack>
        </ChakraProvider>
    )
}
