import {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {CustomNode, SourceHandle, TargetHandle} from "../flow";
import {TextBox} from "../forms";
import {ReactionOptionData} from "./ReactionOptionData";
import "./ReactionOptionNode.css";

export const ReactionOptionNode = memo(({data}: NodeProps<ReactionOptionData>) => {
    return (
        <CustomNode
            className={"ReactionOptionNode-root"}
            title={"Reaction Option"}
            handles={[
                <TargetHandle id={NodeId.ReactionOption}/>,
                <SourceHandle id={NodeId.Passage}/>,
            ]}
        >
            <TextBox label={"Emoji"} id={"emoji"} />
            <TextBox label={"Summary"} id={"summary"} />
            <TextBox label={"Condition"} id={"condition"} />
            <TextBox label={"Modifiers"} id={"modifiers"} />
        </CustomNode>
    );
})