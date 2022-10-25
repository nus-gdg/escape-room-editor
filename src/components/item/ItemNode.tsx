import {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {CustomNode, SourceHandle} from "../flow";
import "./ItemNode.css";

export const ItemNode = memo(({data}: NodeProps<{}>) => {
    return (
        <CustomNode
            className={"ItemNode-root"}
            title={"Item"}
            handles={<SourceHandle id={NodeId.Passage}/>}
        />
    );
})
