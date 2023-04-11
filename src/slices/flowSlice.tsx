import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {State} from "../app";
import {FlowData} from "../components/flow";
import {createGlobalOptionFlowData} from "../components/global-option";

export type FlowState = FlowData;

// const initialState: FlowState = {
//     name: "",
//     type: "",
//     nodes: [],
//     edges: [],
// };

let initialState: FlowState = createGlobalOptionFlowData("peanut");
// initialState.nodes.push(
//     createNode("1",
//         "passage",
//         { x: 100, y: 100 },
//         {}
//         )
// );
// initialState.edges.push(
//     createEdge("1",
//         "passage",
//         { x: 100, y: 100 },
//         {}
//     )
// );

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
