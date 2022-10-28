import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createItemFlowData, ItemFlowData} from "../components/item";

export type ItemsState = Record<string, ItemFlowData>;

const initialState: ItemsState = {
    box: createItemFlowData("box"),
    key: createItemFlowData("key"),
    battery: createItemFlowData("battery"),
}

export interface CreateItemPayload {
    name: string,
}

export interface UpdateItemPayload {
    name: string,
    data: ItemFlowData,
}

export interface DeleteItemsPayload {
    names: string[],
}

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        createItem: (state, action: PayloadAction<CreateItemPayload>) => {
            state[action.payload.name] = createItemFlowData(action.payload.name);
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
