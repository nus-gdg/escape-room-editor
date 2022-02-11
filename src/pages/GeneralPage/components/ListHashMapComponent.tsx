import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { RootContext } from "../../../common/containers/Root";
import { useRoot } from "../../../hooks/useRoot";

interface Props {
    hashmap: { [key: number]: string };
    title: string;
    onUpdateHashMap: (keyID: number, newName: string, ctx: RootContext) => void;
    onRemoveHashMap: (keyID: number, ctx: RootContext) => void;
}

export const ListHashMapComponent = (props: Props) => {
    const ctx = useRoot();

    return (
        <Flex direction={"column"}>
            <Flex direction={"row"}>
                <Text fontSize="20px">{props.title}</Text>
                <Button onClick={() => props.onUpdateHashMap(5, "New", ctx)}>
                    +
                </Button>
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
                                    event.currentTarget.value,
                                    ctx
                                )
                            }
                        />
                        <Button
                            onClick={() =>
                                props.onRemoveHashMap(keyNumber, ctx)
                            }
                        >
                            -
                        </Button>
                    </Flex>
                );
            })}
        </Flex>
    );
};
