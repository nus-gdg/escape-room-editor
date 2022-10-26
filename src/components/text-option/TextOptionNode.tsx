import {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {createSourceHandle, createTargetHandle, CustomNode} from "../flow";
import {TextBox} from "../forms";
import {TextOptionData} from "./TextOptionData";
import "./TextOptionNode.css";

const handles = [
    createTargetHandle(NodeId.TextOption),
    createSourceHandle(NodeId.Passage),
];

export const TextOptionNode = memo(({data}: NodeProps<TextOptionData>) => {
    return (
        <CustomNode
            className={"TextOptionNode-root"}
            title={"Text Option"}
            handles={handles}
        >
            <TextBox label={"Emoji"} id={"emoji"} />
            <TextBox label={"Summary"} id={"summary"} />
            <TextBox label={"Condition"} id={"condition"} />
            <TextBox label={"Modifiers"} id={"modifiers"} />
        </CustomNode>
    );
})
