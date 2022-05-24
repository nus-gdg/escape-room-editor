import { Button, Flex, Text } from "@chakra-ui/react";
import { useRoot } from "../../../hooks/useRoot";
import { ContentData } from "../Data/RoomData";

interface Props {
    title: string;
    contents: ContentData[];
    onPressButton: (id: number) => void;
    onAdd: () => void;
    onRemove: (id: number) => void;
}

export const ContentNavigationComponent = (props: Props) => {
    const ctx = useRoot();

    function renderPropButton() {
        return (
            <Flex direction={"column"} shrink={"0"}>
                {props.contents.map((content, index) => {
                    return (
                        <Flex direction="row" key={index}>
                            <button
                                onClick={() => props.onPressButton(content.id)}
                            >
                                {content.title}
                            </button>
                            <Button onClick={() => props.onRemove(content.id)}>
                                -
                            </Button>
                        </Flex>
                    );
                })}
            </Flex>
        );
    }

    return (
        <Flex
            shrink={"0"}
            direction={"column"}
            bg={"gray"}
            style={{
                overflowY: "scroll",
            }}
        >
            <Text fontSize="2xl"> {props.title} </Text>
            <Button onClick={() => props.onAdd()}>+</Button>
            {renderPropButton()}
        </Flex>
    );
};

export default ContentNavigationComponent;
