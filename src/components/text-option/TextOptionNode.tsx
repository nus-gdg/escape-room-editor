import {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {CustomNode, SourceHandle, TargetHandle} from "../flow";
import {TextBox} from "../forms";
import {TextOptionData} from "./TextOptionData";
import "./TextOptionNode.css";

export const TextOptionNode = memo(({data}: NodeProps<TextOptionData>) => {
    return (
        <CustomNode
            className={"TextOptionNode-root"}
            title={"Text Option"}
            handles={[
                <TargetHandle id={NodeId.TextOption}/>,
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
