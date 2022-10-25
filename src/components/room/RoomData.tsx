import {createRootNode, FlowData} from "../flow";

export const nodeType = "room";

export interface RoomData extends FlowData {
    type: typeof nodeType,
}

export function createRoomData(name: string): RoomData {
    return {
        name: name,
        type: nodeType,
        nodes: [createRootNode(nodeType, {})],
        edges: [],
    }
}
