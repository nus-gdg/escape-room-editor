// const data: FlowProps = {
//     nodes: [{id: "0", type: NodeType.Root, data: {}, position: {x: 0, y: 0}, deletable: false, draggable: false}],
//     edges: [],
// }
//
// interface FlowData {
//     name: string,
//     nodes: Node[],
//     edges: Edge[],
// }
//
// interface ItemData extends FlowData { }
// interface GlobalCommandData extends FlowData { }
//
// interface FlagData {
//     name: string,
//     value: number,
// }
//
// const defaultId = "0";
// const origin: XYPosition = {x: 0, y: 0};
//
// function createFlowData<T>(name: string, type: string, data: T): FlowData {
//     return {
//         name: name,
//         nodes: [
//             {
//                 id: defaultId,
//                 type: type,
//                 data: data,
//                 position: origin,
//                 deletable: false,
//                 draggable: false,
//             }
//         ],
//         edges: [],
//     }
// }
//
// function createRoomData(name: string): RoomData2 {
//     return createFlowData(name, "room",{});
// }
//
// function createItemData(name: string): ItemData {
//     return createFlowData(name, "item", {});
// }
//
// function createGlobalCommandData(name: string): GlobalCommandData {
//     return createFlowData(name, "command", {});
// }
//
// function createFlagData(name: string, value: number): FlagData {
//     return {
//         name: name,
//         value: value,
//     };
// }
//
// interface r {
//     info: string,
//     rooms: Record<string, RoomData2>,
//     items: Record<string, ItemData>,
//     globals: Record<string, GlobalCommandData>,
//     flags: Record<string, FlagData>,
//     flow: FlowData,
// }
export const template = 5;