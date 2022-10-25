import {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {CustomNode, SourceHandle} from "../flow";
import "./RoomNode.css";

export const RoomNode = memo(({data}: NodeProps<{}>) => {
    return (
        <CustomNode
            className={"RoomNode-root"}
            title={"Room"}
            handles={<SourceHandle id={NodeId.Passage}/>}
        />
    );
})
