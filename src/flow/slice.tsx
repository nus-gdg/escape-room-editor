import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Edge, Node} from "reactflow";

export function createRootNode<T>(type: string, data: T): Node {
    return {
        id: "0",
        type: type,
        data: data,
        position: {x: 0, y: 0},
        deletable: false,
        draggable: false,
    }
}

export interface FlowData {
    name: string,
    type: string,
    nodes: Node[],
    edges: Edge[],
}

export function createFlowData(name: string, type: string, rootNode: Node): FlowData {
    return {
        name: name,
        type: type,
        nodes: [rootNode],
        edges: [],
    }
}

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
// export const selectRooms = (state: State) => state.rooms;
export const flowReducer = flowSlice.reducer;
