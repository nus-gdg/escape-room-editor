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

    function handleUpdateFlagChoice(
        event: ChangeEvent<HTMLSelectElement>,
        txtCommandIndex: number,
        flagIndex?: number
    ) {
        if (typeof flagIndex === "undefined") {
            console.log("Flag index is undefined, there's an issue.");
            return;
        }

        let originalFlag =
            props.roomData.textCmds[txtCommandIndex].modifyFlags[flagIndex];

        let updatedFlag = {
            ...originalFlag,
            flagKey: Number(event.target.value),
        };

        updateFlagList(updatedFlag, txtCommandIndex, flagIndex);
    }

    function handleUpdateFlagState(
        event: ChangeEvent<HTMLSelectElement>,
        txtCommandIndex: number,
        flagIndex?: number
    ) {
        if (typeof flagIndex === "undefined") {
            console.log("Flag index is undefined, there's an issue.");
            return;
        }

        let originalFlag =
            props.roomData.textCmds[txtCommandIndex].modifyFlags[flagIndex];

        let updatedFlag = {
            ...originalFlag,
            flagState: Boolean(+event.target.value), //convert to number than boolean
        };

        updateFlagList(updatedFlag, txtCommandIndex, flagIndex);
    }

    function handleAddFlagOption(txtCmdIndex: number) {
        let updatedFlagList = [
            ...props.roomData.textCmds[txtCmdIndex].modifyFlags,
        ];

        updatedFlagList.push(TextCommandData.getDefaultFlagData());

        let updatedTextCmd = {
            ...props.roomData.textCmds[txtCmdIndex],
            modifyFlags: updatedFlagList,
        };

        updateRoomTextCommandList(updatedTextCmd, txtCmdIndex);
    }

    function handleDelFlagOption(txtCmdIndex: number, flagIndex: number) {
        let updatedFlagList = [
            ...props.roomData.textCmds[txtCmdIndex].modifyFlags,
        ];

        updatedFlagList.splice(flagIndex, 1);

        let updatedTextCmd = {
            ...props.roomData.textCmds[txtCmdIndex],
            modifyFlags: updatedFlagList,
        };

        updateRoomTextCommandList(updatedTextCmd, txtCmdIndex);
    }

    function updateFlagList(
        updatedFlag: { flagKey: number; flagState: boolean },
        txtCommandIndex: number,
        flagIndex: number
    ) {
        let updatedFlagList = [
            ...props.roomData.textCmds[txtCommandIndex].modifyFlags,
        ];

        updatedFlagList[flagIndex] = updatedFlag;

        let updatedTextCmd = {
            ...props.roomData.textCmds[txtCommandIndex],
            modifyFlags: updatedFlagList,
        };

        updateRoomTextCommandList(updatedTextCmd, txtCommandIndex);
    }

    //render choices for modifying flags
    function renderFlagChoice(
        modifyFlags: {
            flagKey: number;
            flagState: boolean;
        }[],
        txtCmdIndex: number
    ) {
        return (
            <Flex direction="column">
                <Button onClick={() => handleAddFlagOption(txtCmdIndex)}>
                    Add Flag
                </Button>
                {/* <Button onClick={}>Add Flag</Button> */}
                {modifyFlags.map((flag, flagIndex) => {
                    return (
                        <Flex direction="row">
                            {
                                <HashMapToSelectComponent
                                    hashmap={ctx.state.gameFlags}
                                    currValue={flag.flagKey}
                                    onSelected={(event) =>
                                        handleUpdateFlagChoice(
                                            event,
                                            txtCmdIndex,
                                            flagIndex
                                        )
                                    }
                                />
                            }

                            {/* select to set the flag to be true or false */}
                            <Select
                                defaultValue={0}
                                size="xs"
                                errorBorderColor="tomato"
                                value={Number(flag.flagState)}
                                onChange={(event) =>
                                    handleUpdateFlagState(
                                        event,
                                        txtCmdIndex,
                                        flagIndex
                                    )
                                }
                            >
                                <option value={0} key={txtCmdIndex}>
                                    False
                                </option>
                                <option value={1} key={txtCmdIndex}>
                                    True
                                </option>
                            </Select>
                            <Button
                                onClick={() =>
                                    handleDelFlagOption(txtCmdIndex, flagIndex)
                                }
                            >
                                -
                            </Button>
                        </Flex>
                    );
                })}
            </Flex>
        );
    }

    function renderTextCommandData(
        textCommandData: TextCommandData,
        index: number
    ) {
        return (
            <Flex direction={"row"} key={index}>
                <CommandInputComponent
                    key={index}
                    commandInputData={textCommandData.commandInput}
                    onUpdateCommandInput={(updatedCommandInput: {
                        commandKey: number;
                        recipe: string[];
                    }) =>
                        handleUpdateCommandInputData(index, updatedCommandInput)
                    }
                />
                <ModifyInventoryComponent
                    key={index}
                    modifyInventoryData={textCommandData.modifyInventory}
                    onUpdateInventoryInput={(
                        updatedInventory: {
                            itemKey: number;
                            itemState: number;
                        }[]
                    ) => handleUpdateModifiedInventory(index, updatedInventory)}
                />

                {renderFlagChoice(textCommandData.modifyFlags, index)}
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
