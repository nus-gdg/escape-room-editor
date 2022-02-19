import { Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useRoot } from "../../../hooks/useRoot";
import { InventoryAction, RoomData, TextCommandData } from "../Data/RoomData";
import { updateCurrRoom } from "../GeneralHelperFuncs";

interface Props {
    roomData: RoomData;
    onAddTextCommand?: Function;
}

export const TextCommandsComponent = (props: Props) => {
    const ctx = useRoot();

    function handleUpdateRecipe(
        event: ChangeEvent<HTMLInputElement>,
        recipeIndex: number,
        ingredientIndex: number
    ) {
        //create soft copy of recipe list
        let updatedRecipe = [
            ...props.roomData.textCmds[recipeIndex].command.recipe,
        ];
        updatedRecipe[ingredientIndex] = event.target.value;

        //create soft copy and modify textcommand obj
        let updatedTextCmd = {
            ...props.roomData.textCmds[recipeIndex],
            command: {
                ...props.roomData.textCmds[recipeIndex].command,
                recipe: updatedRecipe,
            },
        } as TextCommandData;

        //create soft copy and modify the list
        let updatedTextCmdList = [
            ...props.roomData.textCmds,
        ] as TextCommandData[];
        updatedTextCmdList[recipeIndex] = updatedTextCmd;

        //create soft copy of room and update the list
        let updatedRoom = {
            ...props.roomData,
            textCmds: updatedTextCmdList,
        };

        updateCurrRoom(updatedRoom, ctx);
    }

    function handleUpdateCommand(
        event: ChangeEvent<HTMLSelectElement>,
        index: number
    ) {
        let updatedCommand = { ...props.roomData.textCmds[index].command };
        updatedCommand.commandKey = Number(event.target.value);

        //create soft copy and modify the list
        let updatedTextCmdList = [
            ...props.roomData.textCmds,
        ] as TextCommandData[];

        updatedTextCmdList[index] = {
            ...props.roomData.textCmds[index],
            command: updatedCommand,
        };

        //create soft copy of room and update the list
        let updatedRoom = {
            ...props.roomData,
            textCmds: updatedTextCmdList,
        };

        updateCurrRoom(updatedRoom, ctx);
    }

    function hashmapToSelectRender(
        hashmap: { [key: number]: string },
        keyValue: number,
        updateSelectOption: (
            event: ChangeEvent<HTMLSelectElement>,
            txtCmdIndex: number
        ) => void,
        txtCmdIndex: number
    ) {
        return (
            <Select
                placeholder="INPUT CHOICE"
                size="xs"
                errorBorderColor="tomato"
                value={keyValue}
                onChange={(event) => updateSelectOption(event, txtCmdIndex)}
            >
                {Object.keys(hashmap).map((mapKey, index) => {
                    return (
                        <option value={mapKey} key={index}>
                            {hashmap[Number(mapKey)]}
                        </option>
                    );
                })}
            </Select>
        );
    }

    //render command its choices, and the recipe inputs for the command
    function renderCommand(
        command: { commandKey: number; recipe: string[] },
        txtCmdIndex: number
    ) {
        return (
            <Flex direction="row">
                {
                    //render the command and the possible options for it
                    hashmapToSelectRender(
                        ctx.state.commands,
                        command.commandKey,
                        handleUpdateCommand,
                        txtCmdIndex
                    )
                }
                {
                    //render all the recipe input for this command
                    renderRecipeInputs(command.recipe, txtCmdIndex)
                }
            </Flex>
        );
    }

    //render recipe inputs for command
    function renderRecipeInputs(recipe: string[], txtCmdIndex: number) {
        return (
            <Flex direction={"column"} key={txtCmdIndex}>
                {recipe.map((ingredient, index) => {
                    return (
                        <Input
                            value={ingredient}
                            placeholder="ingredient"
                            size="xs"
                            key={index}
                            onChange={(event) =>
                                handleUpdateRecipe(event, txtCmdIndex, index)
                            }
                        />
                    );
                })}
            </Flex>
        );
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
                {modifyFlags.map((flag) => {
                    return (
                        <Flex direction="row">
                            {
                                //render the possible flag choices the user can use
                                hashmapToSelectRender(
                                    ctx.state.gameFlags,
                                    flag.flagKey,
                                    handleUpdateCommand,
                                    txtCmdIndex
                                )
                            }

                            {/* select to set the flag to be true or false */}
                            <Select
                                defaultValue={1}
                                size="xs"
                                errorBorderColor="tomato"
                                value={Number(flag.flagState)}
                                // onChange={(event) =>
                                //     handleUpdateCommand(event, index)
                                // }
                            >
                                <option value={1} key={txtCmdIndex}>
                                    True
                                </option>
                                <option value={0} key={txtCmdIndex}>
                                    False
                                </option>
                            </Select>
                        </Flex>
                    );
                })}
            </Flex>
        );
    }

    function renderInventoryChoice(
        modifyInventory: {
            itemKey: number;
            itemState: number;
        }[],
        txtCmdIndex: number
    ) {
        return (
            <Flex direction="column">
                {modifyInventory.map((item) => {
                    return (
                        <Flex direction="row">
                            {
                                //render the possible flag choices the user can use
                                hashmapToSelectRender(
                                    ctx.state.objectNames,
                                    item.itemKey,
                                    handleUpdateCommand,
                                    txtCmdIndex
                                )
                            }
                            <Select
                                defaultValue={-1}
                                size="xs"
                                errorBorderColor="tomato"
                                value={Number(item.itemState)}
                            >
                                <option
                                    value={InventoryAction.REMOVE_ITEM}
                                    key={txtCmdIndex}
                                >
                                    Remove
                                </option>
                                <option
                                    value={InventoryAction.ADD_ITEM}
                                    key={txtCmdIndex}
                                >
                                    Add
                                </option>
                            </Select>
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
                {renderCommand(textCommandData.command, index)}
                {renderInventoryChoice(textCommandData.modifyInventory, index)}
                {renderFlagChoice(textCommandData.modifyFlags, index)}
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
