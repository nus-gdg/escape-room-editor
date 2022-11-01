import {memo} from "react";
import {NodeId} from "../common";
import {createSourceHandle, CustomNodeProps, NodeLayout} from "../flow";
import "./RoomNode.css";

const handles = [createSourceHandle(NodeId.Passage)];

export interface RoomNodeData {}

export const defaultRoomNodeData: RoomNodeData = {};

export const RoomNode = memo(({data, onChange}: CustomNodeProps<RoomNodeData>) => {
    return (
        <NodeLayout
            className={"RoomNode-root"}
            title={"Room"}
            handles={handles}
        />
    );
})
