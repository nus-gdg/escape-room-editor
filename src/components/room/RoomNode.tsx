import {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {createSourceHandle, CustomNode} from "../flow";
import "./RoomNode.css";

const handles = [createSourceHandle(NodeId.Passage)];

export const RoomNode = memo(({data}: NodeProps<{}>) => {
    return (
        <CustomNode
            className={"RoomNode-root"}
            title={"Room"}
            handles={handles}
        />
    );
})
