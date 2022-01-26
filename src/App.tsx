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
  Center
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const App = () => (
    <ChakraProvider resetCSS>
      <Flex>
        <Box width="50%">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea size="sm" resize="vertical" />
          </FormControl>
          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Flags</FormLabel>
            <InputGroup>
              <Input />
              <InputRightElement>
                <SearchIcon />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Box>
        <Box width="50%">
          <Center backgroundColor="gray.500" width="100%" height="100%">
            <Box
                backgroundColor="facebook.500"
                minWidth="75%"
                minHeight="50%"
                borderRadius={10}
            />
          </Center>
        </Box>
      </Flex>
    </ChakraProvider>
)
