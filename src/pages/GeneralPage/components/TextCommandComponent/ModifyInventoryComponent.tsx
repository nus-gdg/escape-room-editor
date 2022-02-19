import { Button, Flex, Input, Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useRoot } from "../../../../hooks/useRoot";
import { InventoryAction, TextCommandData } from "../../Data/RoomData";
import { HashMapToSelectComponent } from "../HashMapToSelectComponent";

interface Props {
    modifyInventoryData: {
        itemKey: number;
        itemState: number;
    }[];
    onUpdateInventoryInput: (
        updatedInventory: {
            itemKey: number;
            itemState: number;
        }[]
    ) => void;
}

export const ModifyInventoryComponent = (props: Props) => {
    const ctx = useRoot();

    //add new item to inventory
    function handleAddItemOption() {
        let updatedInventory = [...props.modifyInventoryData];
        updatedInventory.push(TextCommandData.getDefaultItemData());

        props.onUpdateInventoryInput(updatedInventory);
    }

    //delete the item option
    function handleDeleteItemOption(itemIndex: number) {
        let updatedInventory = [...props.modifyInventoryData];
        updatedInventory.splice(itemIndex, 1);
        props.onUpdateInventoryInput(updatedInventory);
    }

    //update which item the user selected to modify
    function handleUpdateInventoryItemChoice(
        event: ChangeEvent<HTMLSelectElement>,
        itemIndex: number
    ) {
        if (typeof itemIndex === "undefined") {
            console.log("Inventory item index is undefined, there's an issue.");
            return;
        }

        let updatedItem = {
            ...props.modifyInventoryData[itemIndex],
            itemKey: Number(event.target.value),
        };

        updateItemInInventory(updatedItem, itemIndex);
    }

    //update the state of the item the user selected
    function handleUpdateInventoryItemState(
        event: ChangeEvent<HTMLSelectElement>,
        itemIndex: number
    ) {
        if (typeof itemIndex === "undefined") {
            console.log(
                "Inventory item index is undefined, there's an issue updating flag."
            );
            return;
        }

        let updatedItem = {
            ...props.modifyInventoryData[itemIndex],
            itemState: Number(event.target.value),
        };

        updateItemInInventory(updatedItem, itemIndex);
    }

    //update the inventory list with the updatedItem
    function updateItemInInventory(
        updatedItem: {
            itemKey: number;
            itemState: number;
        },
        itemIndex: number
    ) {
        let updatedInventory = [...props.modifyInventoryData];
        updatedInventory[itemIndex] = updatedItem;
        props.onUpdateInventoryInput(updatedInventory);
    }

    return (
        <Flex direction="column">
            <Button onClick={() => handleAddItemOption()}>Add item</Button>
            {props.modifyInventoryData.map((item, itemIndex) => {
                return (
                    <Flex direction="row">
                        {
                            <HashMapToSelectComponent
                                hashmap={ctx.state.objectNames}
                                currValue={item.itemKey}
                                onSelected={(event) =>
                                    handleUpdateInventoryItemChoice(
                                        event,
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
                                handleUpdateInventoryItemState(event, itemIndex)
                            }
                        >
                            <option
                                value={InventoryAction.REMOVE_ITEM}
                                key={itemIndex}
                            >
                                Remove
                            </option>
                            <option
                                value={InventoryAction.ADD_ITEM}
                                key={itemIndex}
                            >
                                Add
                            </option>
                        </Select>
                        <Button
                            onClick={() => handleDeleteItemOption(itemIndex)}
                        >
                            -
                        </Button>
                    </Flex>
                );
            })}
        </Flex>
    );
};
