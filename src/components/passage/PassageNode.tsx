import React, {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {createSourceHandle, createTargetHandle, CustomNode} from "../flow";
import {TextBox} from "../forms";
import "./PassageNode.css";

const handles = [
    createTargetHandle(NodeId.Passage),
    createSourceHandle(NodeId.TextOption),
    createSourceHandle(NodeId.ReactionOption),
];

export interface PassageNodeData {
    text: string,
    images: string,
    condition: string,
    modifiers: string,
}

export const defaultPassageNodeData: PassageNodeData = {
    text: "",
    images: "",
    condition: "",
    modifiers: "",
}

export const PassageNode = memo(({data}: NodeProps<PassageNodeData>) => {
    return (
        <CustomNode
            className={"PassageNode-root"}
            title={"Passage"}
            handles={handles}
        >
            <TextBox label={"Text"} id={"text"} />
            <TextBox label={"Images"} id={"images"} />
            <TextBox label={"Condition"} id={"condition"} />
            <TextBox label={"Modifiers"} id={"modifiers"} />
        </CustomNode>
    );
})
