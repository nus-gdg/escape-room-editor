import {memo} from "react";
import {NodeProps} from "reactflow";
import {NodeId} from "../common";
import {createSourceHandle, NodeLayout} from "../flow";
import {TextBox} from "../forms";
import {TextOptionNodeData} from "../text-option";
import "./GlobalOptionNode.css";

const handles = [createSourceHandle(NodeId.Passage)];

export interface GlobalOptionNodeData extends TextOptionNodeData {}

export const defaultGlobalOptionNodeData: GlobalOptionNodeData = {
    expanded: true,
    emoji: "",
    summary: "",
    condition: "",
    modifiers: "",
}

export const GlobalOptionNode = memo(({data}: NodeProps<GlobalOptionNodeData>) => {
    return (
        <NodeLayout
            className={"GlobalOptionNode-root"}
            title={"Global Option"}
            handles={handles}
        >
            <TextBox label={"Emoji"} id={"emoji"} />
            <TextBox label={"Summary"} id={"summary"} />
            <TextBox label={"Condition"} id={"condition"} />
            <TextBox label={"Modifiers"} id={"modifiers"} />
        </NodeLayout>
    );
})
