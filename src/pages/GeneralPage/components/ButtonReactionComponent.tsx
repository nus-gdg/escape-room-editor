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

    //update button reaction data
    function handleUpdateReaction(
        event: ChangeEvent<HTMLInputElement>,
        varName: keyof ButtonData,
        index: number
    ) {
        let updatedRoom = {
            ...props.roomData,
            buttonReactions: [...props.roomData.buttonReactions],
        };

        let updatedButton = updatedRoom.buttonReactions[index];
        updatedButton[varName] = event.target.value as never;

        updateCurrRoom(updatedRoom, ctx);
    }

    //add new reaction and update room content
    function handleAddReaction() {
        let updatedRoom = {
            ...props.roomData,
            buttonReactions: [...props.roomData.buttonReactions],
        };

        updatedRoom.buttonReactions.push(
            new ButtonData(updatedRoom.buttonReactions.length)
        );

        updateCurrRoom(updatedRoom, ctx);
    }

    //del reaction base on id number
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
