import {memo} from "react";
import {Handle, Node, Position} from "reactflow";
import "./RootNode.css";
import {CustomNodeProps} from "./utils";

export const RootNode = memo((props: CustomNodeProps<{}>) => {
    return (
        <div className="node-root__header">
            <strong>Root</strong>
            {/*<Handle type="source" position={Position.Right} id={NodeType.Passage}/>*/}
        </div>
    );
})
