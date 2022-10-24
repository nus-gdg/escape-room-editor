import {memo} from "react";
import {Handle} from "reactflow";
import {Position} from "@reactflow/core";
import {useDispatch, useSelector} from "../app/hooks";
import {Flow, openFlow, selectFlow, withHandles} from "../flow";
import {RoomNode} from "../rooms";

const Canvas = () => {
    const dispatch = useDispatch();
    const flow = useSelector(selectFlow);

    // useEffect(() => {
    //     dispatch(openFlow({name: "potato", type: "room", nodes: [], edges: []}))
    // }, []);

    return (
        <Flow data={flow} nodeTypes={nodeTypes}/>
    )
}

export default memo(Canvas);

export const nodeTypes = {
    // [roomType]: RoomNode,
    // [NodeType.Passage]: PassageNode,
    // [NodeType.ReactionOption]: ReactionOptionNode,
    // [NodeType.TextOption]: TextOptionNode,
}

const BaseRoomNode = withHandles(
    <Handle id={"passage"} type={"source"} position={Position.Right}/>
)(RoomNode);

// const ItemNode = withHandles([
//     {id: "passage", type: "source", position: Position.Right}
// ])(BaseItemNode);

// const GlobalOptionNode = withHandles([
//     {id: "passage", type: "source", position: Position.Right}
// ])(BaseTextOptionNode);

// const TextOptionNode = withHandles([
//     {id: "textOption", type: "target", position: Position.Left},
//     {id: "passage", type: "source", position: Position.Right},
// ])(BaseTextOptionNode);

const TextOptionNode = withHandles(
    <Handle id={"textOption"} type={"target"} position={Position.Left}/>,
    <Handle id={"passage"} type={"source"} position={Position.Right}/>,
)(RoomNode);

// const ReactionOptionNode = withHandles([
//     {id: "reactionOption", type: "target", position: Position.Left},
//     {id: "passage", type: "source", position: Position.Right},
// ])(BaseTextOptionNode);
