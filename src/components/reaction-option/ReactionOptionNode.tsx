import {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {createSourceHandle, createTargetHandle, CustomNode} from "../flow";
import {TextBox} from "../forms";
import {ReactionOptionData} from "./ReactionOptionData";
import "./ReactionOptionNode.css";

const handles = [
    createTargetHandle(NodeId.ReactionOption),
    createSourceHandle(NodeId.Passage),
];

export const ReactionOptionNode = memo(({data}: NodeProps<ReactionOptionData>) => {
    return (
        <CustomNode
            className={"ReactionOptionNode-root"}
            title={"Reaction Option"}
            handles={handles}
        >
            <TextBox label={"Emoji"} id={"emoji"} />
            <TextBox label={"Summary"} id={"summary"} />
            <TextBox label={"Condition"} id={"condition"} />
            <TextBox label={"Modifiers"} id={"modifiers"} />
        </CustomNode>
    );
})
