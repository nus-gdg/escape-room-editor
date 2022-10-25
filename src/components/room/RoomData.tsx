import {createRootNode, FlowData} from "../flow";

export const roomType = "room";

export interface RoomData extends FlowData {
    type: typeof roomType,
}

export function createRoomData(name: string): RoomData {
    return {
        name: name,
        type: roomType,
        nodes: [createRootNode(roomType, {})],
        edges: [],
    }
}
