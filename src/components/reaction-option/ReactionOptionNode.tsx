import {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {createSourceHandle, createTargetHandle, NodeLayout} from "../flow";
import {TextBox} from "../forms";
import "./ReactionOptionNode.css";

const handles = [
    createTargetHandle(NodeId.ReactionOption),
    createSourceHandle(NodeId.Passage),
];

export interface ReactionOptionNodeData {
    emoji: string,
    summary: string,
    condition: string,
    modifiers: string,
}

export const defaultReactionOptionNodeData: ReactionOptionNodeData = {
    emoji: "",
    summary: "",
    condition: "",
    modifiers: "",
}

export const ReactionOptionNode = memo(({data}: NodeProps<ReactionOptionNodeData>) => {
    return (
        <NodeLayout
            className={"ReactionOptionNode-root"}
            title={"Reaction Option"}
            handles={handles}
        >
            <TextBox label={"Emoji"} id={"emoji"} />
            <TextBox label={"Summary"} id={"summary"} />
            <TextBox label={"Condition"} id={"condition"} />
            <TextBox label={"Modifiers"} id={"modifiers"} />
        </NodeLayout>
    );
})
