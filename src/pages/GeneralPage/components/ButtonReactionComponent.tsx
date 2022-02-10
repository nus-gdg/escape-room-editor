import { Button, Flex, Text, Select, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useRoot } from "../../../hooks/useRoot";
import { ButtonData, RoomData } from "../Data/RoomData";
import { updateCurrRoom } from "../GeneralHelperFuncs";

interface Props {
    roomData: RoomData;
}

export const ButtonReactionComponent = (props: Props) => {
    const ctx = useRoot();

    function handleUpdateReaction(
        event: ChangeEvent<HTMLInputElement>,
        varName: keyof ButtonData,
        index: number
    ) {
        let updatedRoom = { ...props.roomData };
        let updatedButton = props.roomData.buttonReactions[index];
        updatedButton[varName] = event.target.value as never;

        updateCurrRoom(updatedRoom, ctx);

        console.log(ctx.state.currRoom === updatedRoom);
    }

    //add new reaction and update room content
    function handleAddReaction() {
        let updatedRoom = props.roomData;
        updatedRoom.buttonReactions.push(
            new ButtonData(updatedRoom.buttonReactions.length)
        );

        updateCurrRoom(updatedRoom, ctx);
    }

    function handleDelReaction(id: number) {
        let newButtonReaction = props.roomData.buttonReactions.filter(
            (reaction) => reaction.id != id
        );

        let updatedRoom = props.roomData;
        updatedRoom.buttonReactions = newButtonReaction;

        updateCurrRoom(updatedRoom, ctx);
    }

    function renderButtonData(buttonData: ButtonData, index: number) {
        return (
            <Flex direction="row" key={index}>
                <Input
                    value={buttonData.buttonText}
                    placeholder="Button input"
                    size="xs"
                    onChange={(event) =>
                        handleUpdateReaction(event, "buttonText", index)
                    }
                />

                <Select placeholder="Select Destination" size="xs"></Select>
                <Button onClick={() => handleDelReaction(buttonData.id)}>
                    -
                </Button>
            </Flex>
        );
    }

    return (
        <div>
            <Flex direction="row">
                <Text>Button Reactions</Text>
                <Button onClick={() => handleAddReaction()}>+</Button>
            </Flex>

            <Flex direction="column" bg="gray">
                {props.roomData.buttonReactions.map((button, index) => {
                    return renderButtonData(button, index);
                })}
            </Flex>
        </div>
    );
};
