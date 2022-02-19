import { Button, Flex, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useRoot } from "../../../../hooks/useRoot";
import { HashMapToSelectComponent } from "../HashMapToSelectComponent";

interface Props {
    commandInputData: { commandKey: number; recipe: string[] };
    onUpdateCommandInput: (updatedCommandInput: {
        commandKey: number;
        recipe: string[];
    }) => void;
}

export const CommandInputComponent = (props: Props) => {
    const ctx = useRoot();

    function handleUpdateRecipe(
        event: ChangeEvent<HTMLInputElement>,
        ingredientIndex: number
    ) {
        //create soft copy of recipe list
        let updatedRecipeList = [...props.commandInputData.recipe];
        updatedRecipeList[ingredientIndex] = event.target.value;

        updateRecipeList(updatedRecipeList);
    }

    function handleAddNewIngredient() {
        let updatedRecipeList = [...props.commandInputData.recipe];
        updatedRecipeList.push("");

        updateRecipeList(updatedRecipeList);
    }

    function handleDeleteIngredient(ingredientIndex: number) {
        let updatedRecipeList = [...props.commandInputData.recipe];

        updatedRecipeList.splice(ingredientIndex, 1);

        updateRecipeList(updatedRecipeList);
    }

    function updateRecipeList(updatedRecipeList: string[]) {
        let updatedCommandInput = {
            ...props.commandInputData,
            recipe: updatedRecipeList,
        };

        props.onUpdateCommandInput(updatedCommandInput);
    }

    function handleUpdateCommandChoice(event: ChangeEvent<HTMLSelectElement>) {
        let updatedCommandInput = {
            ...props.commandInputData,
            commandKey: Number(event.target.value),
        };

        props.onUpdateCommandInput(updatedCommandInput);
    }

    //render recipe inputs for command
    function renderRecipeInputs(recipe: string[]) {
        return (
            <Flex direction={"column"}>
                {recipe.map((ingredient, index) => {
                    return (
                        <Flex direction={"row"}>
                            <Input
                                value={ingredient}
                                placeholder="ingredient"
                                size="xs"
                                key={index}
                                onChange={(event) =>
                                    handleUpdateRecipe(event, index)
                                }
                            />
                            <Button
                                onClick={() => handleDeleteIngredient(index)}
                            >
                                -
                            </Button>
                        </Flex>
                    );
                })}
            </Flex>
        );
    }

    return (
        <Flex direction="column">
            <Button onClick={() => handleAddNewIngredient()}>
                Add ingredient
            </Button>
            <Flex direction="row">
                {
                    <HashMapToSelectComponent
                        hashmap={ctx.state.commands}
                        currValue={props.commandInputData.commandKey}
                        onSelected={(event) => handleUpdateCommandChoice(event)}
                    />
                }
                {
                    //render all the recipe input for this command
                    renderRecipeInputs(props.commandInputData.recipe)
                }
            </Flex>
        </Flex>
    );
};
