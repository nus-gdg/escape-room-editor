import {FlowId, NodeId} from "../common";
import {createRootNode, FlowData} from "../flow";
import {defaultRoomNodeData} from "./RoomNode";

export interface RoomFlowData extends FlowData {
    type: FlowId.Room,
}

export function createRoomFlowData(name: string): RoomFlowData {
    return {
        name: name,
        type: FlowId.Room,
        nodes: [createRootNode(NodeId.Room, defaultRoomNodeData)],
        edges: [],
    }
}
