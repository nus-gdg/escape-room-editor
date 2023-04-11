import {memo} from "react";
import {NodeId} from "../common";
import {createSourceHandle, CustomNodeProps, NodeLayout} from "../flow";
import "./ItemNode.css";

const handles = [createSourceHandle(NodeId.Passage)];

export interface ItemNodeData {}

export const defaultItemNodeData = {};

const ItemNode = (
    {
        data,
        onChange
    }: CustomNodeProps<ItemNodeData>) => {
    return (
        <NodeLayout
            className={"ItemNode-root"}
            title={"Item"}
            handles={handles}
        />
    );
}

export default memo(ItemNode);
