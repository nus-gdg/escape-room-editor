import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {State} from "../app/store";
import {FlowData} from "../components/flow/FlowData";

export type FlowState = FlowData;

const initialState: FlowState = {
    name: "",
    type: "",
    nodes: [],
    edges: [],
};

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
