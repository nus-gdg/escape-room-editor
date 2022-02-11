import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useRoot } from "../../../hooks/useRoot";
import { RoomData, TextCommandData } from "../Data/RoomData";

interface Props {
    roomData: RoomData;
    onAddTextCommand?: Function;
}

export const TextCommandsComponent = (props: Props) => {
    const ctx = useRoot();

    function renderFlagChoice(
        modifyFlags: {
            flagName: string;
            flagState: boolean;
        }[]
    ) {
        return <Flex></Flex>;
    }

    function renderInventoryChoice(
        modifyInventory: {
            itemName: string;
            itemState: boolean;
        }[]
    ) {
        return <Flex></Flex>;
    }

    function renderCommandChoice(command: {
        commandKey: string;
        recipe: string[];
    }) {
        return <Flex></Flex>;
    }

    function renderTextCommandData(
        textCommandData: TextCommandData,
        index: number
    ) {
        return (
            <Flex key={index}>
                ewfjewijfj
                {renderFlagChoice(textCommandData.modifyFlags)}
                {renderInventoryChoice(textCommandData.modifyInventory)}
                {renderCommandChoice(textCommandData.command)}
            </Flex>
        );
    }

    return (
        <Flex direction={"column"}>
            <Flex direction={"row"}>
                <Text fontSize="20px">TexCommands</Text>
                <Button onClick={() => props.onAddTextCommand}>+</Button>
            </Flex>

            <Flex direction={"column"}>
                {props.roomData.textCmds.map((textCmd, index) => {
                    return renderTextCommandData(textCmd, index);
                })}
            </Flex>
        </Flex>
    );
};
