import {memo} from "react";
import {Handle, Position} from "reactflow";
import {NodeType} from "../nodes/types";
import "./RootNode.css";

const RoomNode = () => {
    return (
        <div className="node-room__header">
            <strong>Room</strong>
            <Handle type="source" position={Position.Right} id={NodeType.Passage}/>
        </div>
    );
}

export default memo(RoomNode);