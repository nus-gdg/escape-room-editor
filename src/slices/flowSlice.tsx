import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {State} from "../app";
import {FlowData} from "../components/flow";
import {createRoomData} from "../components/room";
import {createItemData} from "../components/item";
import {createGlobalOptionData} from "../components/global-option";

export type FlowState = FlowData;

// const initialState: FlowState = {
//     name: "",
//     type: "",
//     nodes: [],
//     edges: [],
// };

const initialState: FlowData = createGlobalOptionData("peanut");

export const flowSlice = createSlice({
    name: "flow",
    initialState,
    reducers: {
        openFlow: (state, action: PayloadAction<FlowData>) => {
            return action.payload;
        },
        closeFlow: state => {
            return initialState;
        },
    }
});

export const { openFlow, closeFlow } = flowSlice.actions;
export const selectFlow = (state: State) => state.flow;
export const flowReducer = flowSlice.reducer;