import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useRoot } from "../../../hooks/useRoot";

interface Props {
    hashmap: { [key: number]: string };
    title: string;
    onUpdateHashMap?: Function; //TODO: change this later on
}

export const ListHashMapComponent = (props: Props) => {
    const ctx = useRoot();

    return (
        <Flex direction={"column"}>
            <Text fontSize="20px">{props.title}</Text>

            {Object.keys(props.hashmap).map((key, index) => {
                let statement = props.hashmap[Number(key)];
                return (
                    <Input
                        size="sm"
                        variant="unstyled"
                        focusBorderColor="lime"
                        errorBorderColor="crimson"
                        isInvalid={statement.length === 0}
                        key={index}
                        placeholder={props.title + "input"}
                        value={props.hashmap[Number(key)]}
                    />
                );
            })}
        </Flex>
    );
};
