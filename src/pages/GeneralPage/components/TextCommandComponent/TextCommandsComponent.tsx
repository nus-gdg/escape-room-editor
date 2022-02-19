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

    //update a recipe list in a room's textCommandData command list
    function handleUpdateRecipe(
        event: ChangeEvent<HTMLInputElement>,
        txtCommandIndex: number,
        ingredientIndex: number
    ) {
        //create soft copy of recipe list
        let updatedRecipeList = [
            ...props.roomData.textCmds[txtCommandIndex].commandInput.recipe,
        ];
        updatedRecipeList[ingredientIndex] = event.target.value;

        updateRecipeList(updatedRecipeList, txtCommandIndex);
    }

    function updateRecipeList(
        updatedRecipeList: string[],
        txtCommandIndex: number
    ) {
        //create soft copy and modify textcommand obj
        let updatedTextCmd = {
            ...props.roomData.textCmds[txtCommandIndex],
            commandInput: {
                ...props.roomData.textCmds[txtCommandIndex].commandInput,
                recipe: updatedRecipeList,
            },
        } as TextCommandData;

        updateRoomTextCommandList(updatedTextCmd, txtCommandIndex);
    }

    function handleAddNewIngredient(txtCommandIndex: number) {
        let updatedRecipeList = [
            ...props.roomData.textCmds[txtCommandIndex].commandInput.recipe,
        ];
        updatedRecipeList.push("");

        updateRecipeList(updatedRecipeList, txtCommandIndex);
    }

    function handleDeleteIngredient(
        txtCommandIndex: number,
        ingredientIndex: number
    ) {
        let updatedRecipeList = [
            ...props.roomData.textCmds[txtCommandIndex].commandInput.recipe,
        ];

        updatedRecipeList.splice(ingredientIndex, 1);

        updateRecipeList(updatedRecipeList, txtCommandIndex);
    }

    //update command hashkey
    function handleUpdateCommandChoice(
        event: ChangeEvent<HTMLSelectElement>,
        txtCommandIndex: number
    ) {
        let updatedCommand = {
            ...props.roomData.textCmds[txtCommandIndex].commandInput,
        };
        updatedCommand.commandKey = Number(event.target.value);

        let updatedTextCmd = {
            ...props.roomData.textCmds[txtCommandIndex],
            commandInput: updatedCommand,
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

    //Update inventory item choice
    function handleUpdateInventoryItemChoice(
        event: ChangeEvent<HTMLSelectElement>,
        txtCommandIndex: number,
        itemIndex?: number
    ) {
        if (typeof itemIndex === "undefined") {
            console.log("Inventory item index is undefined, there's an issue.");
            return;
        }

        let originalItem =
            props.roomData.textCmds[txtCommandIndex].modifyInventory[itemIndex];

        let updatedItem = {
            ...originalItem,
            itemKey: Number(event.target.value),
        };

        updateItemInInventory(updatedItem, txtCommandIndex, itemIndex);
    }

    //update inventory item state
    function handleUpdateInventoryItemState(
        event: ChangeEvent<HTMLSelectElement>,
        txtCommandIndex: number,
        itemIndex?: number
    ) {
        if (typeof itemIndex === "undefined") {
            console.log(
                "Inventory item index is undefined, there's an issue updating flag."
            );
            return;
        }

        let originalItem =
            props.roomData.textCmds[txtCommandIndex].modifyInventory[itemIndex];

        let updatedItem = {
            ...originalItem,
            itemState: Number(event.target.value),
        };

        updateItemInInventory(updatedItem, txtCommandIndex, itemIndex);
    }

    //add new item to inventory
    function handleAddItemOption(txtCommandIndex: number) {
        let updatedInventory = [
            ...props.roomData.textCmds[txtCommandIndex].modifyInventory,
        ];

        updatedInventory.push(TextCommandData.getDefaultItemData());

        let updatedTextCmd = {
            ...props.roomData.textCmds[txtCommandIndex],
            modifyInventory: updatedInventory,
        };

        updateRoomTextCommandList(updatedTextCmd, txtCommandIndex);
    }

    function handleDeleteItemOption(
        txtCommandIndex: number,
        itemIndex: number
    ) {
        let updatedInventory = [
            ...props.roomData.textCmds[txtCommandIndex].modifyInventory,
        ];

        updatedInventory.splice(itemIndex, 1);
        let updatedTextCmd = {
            ...props.roomData.textCmds[txtCommandIndex],
            modifyInventory: updatedInventory,
        };

        updateRoomTextCommandList(updatedTextCmd, txtCommandIndex);
    }

    //update item in inventory
    function updateItemInInventory(
        updatedItem: {
            itemKey: number;
            itemState: number;
        },
        txtCommandIndex: number,
        itemIndex: number
    ) {
        let updatedInventory = [
            ...props.roomData.textCmds[txtCommandIndex].modifyInventory,
        ];

        updatedInventory[itemIndex] = updatedItem;

        let updatedTextCmd = {
            ...props.roomData.textCmds[txtCommandIndex],
            modifyInventory: updatedInventory,
        };

        updateRoomTextCommandList(updatedTextCmd, txtCommandIndex);
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

    //render command its choices, and the recipe inputs for the command
    function renderCommand(
        commandInput: { commandKey: number; recipe: string[] },
        txtCmdIndex: number
    ) {
        return (
            <Flex direction="column">
                <Button onClick={() => handleAddNewIngredient(txtCmdIndex)}>
                    {" "}
                    Add ingredient
                </Button>
                <Flex direction="row">
                    {
                        <HashMapToSelectComponent
                            hashmap={ctx.state.commands}
                            currValue={commandInput.commandKey}
                            onSelected={(event) =>
                                handleUpdateCommandChoice(event, txtCmdIndex)
                            }
                        />
                    }
                    {
                        //render all the recipe input for this command
                        renderRecipeInputs(commandInput.recipe, txtCmdIndex)
                    }
                </Flex>
            </Flex>
        );
    }

    //render recipe inputs for command
    function renderRecipeInputs(recipe: string[], txtCmdIndex: number) {
        return (
            <Flex direction={"column"} key={txtCmdIndex}>
                {recipe.map((ingredient, index) => {
                    return (
                        <Flex direction={"row"}>
                            <Input
                                value={ingredient}
                                placeholder="ingredient"
                                size="xs"
                                key={index}
                                onChange={(event) =>
                                    handleUpdateRecipe(
                                        event,
                                        txtCmdIndex,
                                        index
                                    )
                                }
                            />
                            <Button
                                onClick={() =>
                                    handleDeleteIngredient(txtCmdIndex, index)
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

    function renderInventoryChoice(
        modifyInventory: {
            itemKey: number;
            itemState: number;
        }[],
        txtCmdIndex: number
    ) {
        return (
            <Flex direction="column">
                <Button onClick={() => handleAddItemOption(txtCmdIndex)}>
                    Add item
                </Button>
                {modifyInventory.map((item, itemIndex) => {
                    return (
                        <Flex direction="row">
                            {
                                <HashMapToSelectComponent
                                    hashmap={ctx.state.objectNames}
                                    currValue={item.itemKey}
                                    onSelected={(event) =>
                                        handleUpdateInventoryItemChoice(
                                            event,
                                            txtCmdIndex,
                                            itemIndex
                                        )
                                    }
                                />
                            }
                            <Select
                                defaultValue={-1}
                                size="xs"
                                errorBorderColor="tomato"
                                value={Number(item.itemState)}
                                onChange={(event) =>
                                    handleUpdateInventoryItemState(
                                        event,
                                        txtCmdIndex,
                                        itemIndex
                                    )
                                }
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
                            <Button
                                onClick={() =>
                                    handleDeleteItemOption(
                                        txtCmdIndex,
                                        itemIndex
                                    )
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
                {renderCommand(textCommandData.commandInput, index)}
                {renderInventoryChoice(textCommandData.modifyInventory, index)}
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
