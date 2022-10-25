import {createRootNode, FlowData} from "../flow";

export const itemType = "item";

export interface RoomData extends FlowData {
    type: typeof item,
}

export function createRoomData(name: string): RoomData {
    return {
        name: name,
        type: roomType,
        nodes: [createRootNode(roomType, {})],
        edges: [],
    }
}
