import {memo} from "react";
import {Handle, HandleProps, Position} from "reactflow";
// import {NodeType} from "../nodes/types";
import {NodeProps} from "../flow/utils";
// import "./RootNode.css";

interface RoomNodeProps extends NodeProps {
}

export const RoomNode = memo(({handles}: RoomNodeProps) => {
    return (
        <div className="node-room__header">
            <strong>Room</strong>
            {handles}
            {/*<Handle type="source" position={Position.Right} id={NodeType.Passage}/>*/}
        </div>
    );
});
