import {memo} from "react";
import {Handle, Position} from "reactflow";
import {CustomNode, CustomNodeHeader, NodeType} from "./utils";
import "./RootNode.css";

const RootNode = () => {
    return (
        <div className="node-root__header">
            <strong>Root</strong>
            <Handle type="source" position={Position.Right} id={NodeType.Passage}/>
        </div>
    );
}

export default memo(RootNode);