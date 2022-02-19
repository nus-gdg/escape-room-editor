import { Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useRoot } from "../../../../hooks/useRoot";
import {
    InventoryAction,
    RoomData,
    TextCommandData,
} from "../../Data/RoomData";
import { updateCurrRoom } from "../../GeneralHelperFuncs";
import { HashMapToSelectComponent } from "../HashMapToSelectComponent";
import { CommandInputComponent } from "./CommandInputComponent";
import { ModifyFlagsCmdComponent } from "./ModifyFlagCmdComponent";
import { ModifyInventoryComponent } from "./ModifyInventoryComponent";

interface Props {
    roomData: RoomData;
}

export const TextCommandsComponent = (props: Props) => {
    const ctx = useRoot();

    //add new textcommand data into command list
    function handleAddTextCommand() {
        //create soft copy and modify the list
        let updatedTextCmdList = [
            ...props.roomData.textCmds,
        ] as TextCommandData[];

        updatedTextCmdList.push(new TextCommandData());

        //create soft copy of room and update the list
        let updatedRoom = {
            ...props.roomData,
            textCmds: updatedTextCmdList,
        };

        updateCurrRoom(updatedRoom, ctx);
    }

    function handleDeleteCommand() {}

    function handleUpdateCommandInputData(
        txtCommandIndex: number,
        updatedCommandInput: {
            commandKey: number;
            recipe: string[];
        }
    ) {
        let updatedTextCommand = {
            ...props.roomData.textCmds[txtCommandIndex],
            commandInput: updatedCommandInput,
        };

        updateRoomTextCommandList(updatedTextCommand, txtCommandIndex);
    }

    function handleUpdateModifiedInventory(
        txtCommandIndex: number,
        updatedInventory: {
            itemKey: number;
            itemState: number;
        }[]
    ) {
        let updatedTextCmd = {
            ...props.roomData.textCmds[txtCommandIndex],
            modifyInventory: updatedInventory,
        };

        updateRoomTextCommandList(updatedTextCmd, txtCommandIndex);
    }

    function handleUpdateFlagList(
        txtCommandIndex: number,
        updatedFlagList: {
            flagKey: number;
            flagState: boolean;
        }[]
    ) {
        let updatedTextCmd = {
            ...props.roomData.textCmds[txtCommandIndex],
            modifyFlags: updatedFlagList,
        };
        updateRoomTextCommandList(updatedTextCmd, txtCommandIndex);
    }

    //update room's textCommandData List with an update textCommandData obj
    function updateRoomTextCommandList(
        updatedTextCommand: TextCommandData,
        txtCommandIndex: number
    ) {
        //create soft copy and modify the list
        let updatedTextCmdList = [
            ...props.roomData.textCmds,
        ] as TextCommandData[];
        updatedTextCmdList[txtCommandIndex] = updatedTextCommand;

        //create soft copy of room and update the list
        let updatedRoom = {
            ...props.roomData,
            textCmds: updatedTextCmdList,
        };

        updateCurrRoom(updatedRoom, ctx);
    }

    function renderTextCommandData(
        textCommandData: TextCommandData,
        index: number
    ) {
        return (
            <Flex direction={"row"} key={index}>
                <CommandInputComponent
                    commandInputData={textCommandData.commandInput}
                    onUpdateCommandInput={(updatedCommandInput: {
                        commandKey: number;
                        recipe: string[];
                    }) =>
                        handleUpdateCommandInputData(index, updatedCommandInput)
                    }
                />
                <ModifyInventoryComponent
                    modifyInventoryData={textCommandData.modifyInventory}
                    onUpdateInventoryInput={(
                        updatedInventory: {
                            itemKey: number;
                            itemState: number;
                        }[]
                    ) => handleUpdateModifiedInventory(index, updatedInventory)}
                />
                <ModifyFlagsCmdComponent
                    modifyFlags={textCommandData.modifyFlags}
                    onUpdateFlagList={(
                        updatedFlags: {
                            flagKey: number;
                            flagState: boolean;
                        }[]
                    ) => handleUpdateFlagList(index, updatedFlags)}
                />
            </Flex>
        );
    }

    return (
        <Flex direction={"column"}>
            <Flex direction={"row"}>
                <Text fontSize="20px">TexCommands</Text>
                <Button onClick={handleAddTextCommand}>+</Button>
            </Flex>

            <Flex direction={"column"}>
                {props.roomData.textCmds.map((textCmd, index) => {
                    return renderTextCommandData(textCmd, index);
                })}
            </Flex>
        </Flex>
    );
};
