import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {State} from "../app/store";
import {createRootNode, FlowData} from "../components/flow";

export const itemType = "item";

export interface ItemData extends FlowData {
    type: typeof itemType,
}

export function createItemData(name: string): ItemData {
    return {
        name: name,
        type: itemType,
        nodes: [createRootNode(itemType, {})],
        edges: [],
    }
}

export type ItemsState = Record<string, ItemData>;

const initialState: ItemsState = {
    box: createItemData("box"),
    key: createItemData("key"),
    battery: createItemData("battery"),
}

export interface CreateItemPayload {
    name: string,
}

export interface UpdateItemPayload {
    name: string,
    data: ItemData,
}

export interface DeleteItemsPayload {
    names: string[],
}

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        createItem: (state, action: PayloadAction<CreateItemPayload>) => {
            state[action.payload.name] = createItemData(action.payload.name);
        },
        updateItem: (state, action: PayloadAction<UpdateItemPayload>) => {
            state[action.payload.name] = action.payload.data;
        },
        deleteItems: (state, action: PayloadAction<DeleteItemsPayload>) => {
            action.payload.names.forEach(name => {
                delete state[name];
            });
        }
    }
});

export const { createItem, updateItem, deleteItems } = itemsSlice.actions;
// export const selectItems = (state: State) => state.items;
export const itemsReducer = itemsSlice.reducer;
