import { Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useRoot } from "../../../hooks/useRoot";
import { RoomData, TextCommandData } from "../Data/RoomData";
import { updateCurrRoom } from "../GeneralHelperFuncs";

interface Props {
    roomData: RoomData;
    onAddTextCommand?: Function;
}

export const TextCommandsComponent = (props: Props) => {
    const ctx = useRoot();

    function renderFlagChoice(
        modifyFlags: {
            flagName: number;
            flagState: boolean;
        }[],
        index: number
    ) {
        return <Flex></Flex>;
    }

    function renderInventoryChoice(
        modifyInventory: {
            itemName: number;
            itemState: boolean;
        }[],
        index: number
    ) {
        return <Flex></Flex>;
    }

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

    function renderRecipeChoices(recipe: string[], recipeIndex: number) {
        return (
            <Flex direction={"column"} key={recipeIndex}>
                {recipe.map((ingredient, index) => {
                    return (
                        <Input
                            value={ingredient}
                            placeholder="ingredient"
                            size="xs"
                            key={index}
                            onChange={(event) =>
                                handleUpdateRecipe(event, recipeIndex, index)
                            }
                        />
                    );
                })}
            </Flex>
        );
    }

    function renderCommandChoice(commandKey: number, index: number) {
        return (
            <Select
                placeholder="Command"
                size="xs"
                errorBorderColor="tomato"
                value={commandKey}
                onChange={(event) => handleUpdateCommand(event, index)}
            >
                {Object.keys(ctx.state.commands).map((mapKey, index) => {
                    return (
                        <option value={mapKey} key={index}>
                            {ctx.state.commands[Number(mapKey)]}
                        </option>
                    );
                })}
            </Select>
        );
    }

    function renderTextCommandData(
        textCommandData: TextCommandData,
        index: number
    ) {
        return (
            <Flex direction={"row"} key={index}>
                ewfjewijfj
                {renderCommandChoice(textCommandData.command.commandKey, index)}
                {renderRecipeChoices(textCommandData.command.recipe, index)}
                {renderFlagChoice(textCommandData.modifyFlags, index)}
                {renderInventoryChoice(textCommandData.modifyInventory, index)}
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
