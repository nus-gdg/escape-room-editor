import {memo, ReactElement} from "react";
import {Handle, HandleProps, Node, NodeProps, Position} from "reactflow";
import "./RootNode.css";
import {createSourceHandle, CustomNodeProps} from "./utils";

// export const RootNode = memo((props: CustomNodeProps<{}>) => {
//     return (
//         <div className="node-root__header">
//             <strong>Root</strong>
//             {/*<Handle type="source" position={Position.Right} id={NodeType.Passage}/>*/}
//         </div>
//     );
// })
//
// export interface CustomNodeType<T> {
//     title: string,
//     handles?: ReactElement<HandleProps> | Array<ReactElement<HandleProps>>,
// }
//
// export const NodeTemplate = (
//     {
//         title,
//         handles,
//     }: CustomNodeType<{}>) => {
//     return (
//         <div className="node">
//             <strong>{title}</strong>
//             {handles}
//         </div>
//     );
// }
//
// export function createNodeTemplate<T>(title = "Node") {
//     return (handles?: ReactElement<HandleProps> | Array<ReactElement<HandleProps>>) => {
//         return (props: NodeProps<T>) => <NodeTemplate title={title} handles={handles}/>
//     }
// }
//
// const createRoomNode = createNodeTemplate<{}>("Rooms");
// const RoomNode = createRoomNode(
//     createSourceHandle("passage"),
// );
