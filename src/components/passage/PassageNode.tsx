import {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {CustomNode, SourceHandle, TargetHandle} from "../flow";
import {TextBox} from "../forms";
import {PassageData} from "./PassageData";
import "./PassageNode.css";

export const PassageNode = memo(({data}: NodeProps<PassageData>) => {
    return (
        <CustomNode
            className={"PassageNode-root"}
            title={"Passage"}
            handles={[
                <TargetHandle id={NodeId.Passage}/>,
                <SourceHandle id={NodeId.TextOption}/>,
                <SourceHandle id={NodeId.ReactionOption}/>,
            ]}
        >
            <TextBox label={"Text"} id={"text"} />
            <TextBox label={"Images"} id={"images"} />
            <TextBox label={"Condition"} id={"condition"} />
            <TextBox label={"Modifiers"} id={"modifiers"} />
        </CustomNode>
    );
})
