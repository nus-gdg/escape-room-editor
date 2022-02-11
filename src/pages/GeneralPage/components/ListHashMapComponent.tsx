import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useRoot } from "../../../hooks/useRoot";

interface Props {
    hashmap: { [key: number]: string };
    title: string;
    onUpdateHashMap: (keyID: number, newName: string) => void;
    onRemoveHashMap: (keyID: number) => void;
}

export const ListHashMapComponent = (props: Props) => {
    const ctx = useRoot();
    const [uniqueIDs, setUniqueIDs] = useState(
        Object.keys(props.hashmap).length
    );

    function onAddHashmapValue() {
        props.onUpdateHashMap(uniqueIDs, "New");

        setUniqueIDs(uniqueIDs + 1);
    }

    return (
        <Flex direction={"column"}>
            <Flex direction={"row"}>
                <Text fontSize="20px">{props.title}</Text>
                <Button onClick={() => onAddHashmapValue()}>+</Button>
            </Flex>

            {Object.keys(props.hashmap).map((key, index) => {
                let statement = props.hashmap[Number(key)];
                let keyNumber = Number(key);
                return (
                    <Flex direction={"row"} key={index}>
                        <Input
                            size="sm"
                            //variant="unstyled"
                            errorBorderColor="crimson"
                            isInvalid={statement.length === 0}
                            placeholder={props.title + "input"}
                            value={props.hashmap[keyNumber]}
                            onChange={(event) =>
                                props.onUpdateHashMap(
                                    keyNumber,
                                    event.currentTarget.value
                                )
                            }
                        />
                        <Button
                            onClick={() => props.onRemoveHashMap(keyNumber)}
                        >
                            -
                        </Button>
                    </Flex>
                );
            })}
        </Flex>
    );
};
