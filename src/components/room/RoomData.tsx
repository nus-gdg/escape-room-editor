import {createRootNode, FlowData} from "../flow";
import {FlowId, NodeId} from "../common";

export interface RoomData extends FlowData {
    type: FlowId.Room,
}

export function createRoomData(name: string): RoomData {
    return {
        name: name,
        type: FlowId.Room,
        nodes: [createRootNode(NodeId.Room, {})],
        edges: [],
    }
}
