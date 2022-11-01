import {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {createSourceHandle, NodeLayout} from "../flow";
import "./ItemNode.css";

const handles = [createSourceHandle(NodeId.Passage)];

export interface ItemNodeData {}

export const defaultItemNodeData = {};

export const ItemNode = memo(({data}: NodeProps<ItemNodeData>) => {
    return (
        <NodeLayout
            className={"ItemNode-root"}
            title={"Item"}
            handles={handles}
        />
    );
})
