import {ChangeEvent, memo} from "react";
import {NodeId} from "../common";
import {createSourceHandle, createTargetHandle, CustomNodeProps, NodeLayout} from "../flow";
import {TextBox} from "../forms";
import "./TextOptionNode.css";

const handles = [
    createTargetHandle(NodeId.TextOption),
    createSourceHandle(NodeId.Passage),
];

export interface TextOptionNodeData {
    expanded: boolean,
    emoji: string,
    summary: string,
    condition: string,
    modifiers: string,
}

export const defaultTextOptionNodeData: TextOptionNodeData = {
    expanded: true,
    emoji: "",
    summary: "",
    condition: "",
    modifiers: "",
}

export const TextOptionNode = memo(({id, data, onChange}: CustomNodeProps<TextOptionNodeData>) => {
    const handleChangeExpanded = (isExpanded: boolean) => {
        onChange?.({id: id, data: { ...data, expanded: isExpanded }});
    }

    const handleChangeEmoji = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.({id: id, data: { ...data, emoji: event.currentTarget.value }});
    }

    return (
        <NodeLayout
            className={"TextOptionNode-root"}
            title={"Text Option"}
            handles={handles}
            expanded={data.expanded}
            onExpand={handleChangeExpanded}
        >
            <TextBox label={"Emoji"} id={"emoji"} value={data.emoji} onChange={handleChangeEmoji} />
            <TextBox label={"Summary"} id={"summary"} />
            <TextBox label={"Condition"} id={"condition"} />
            <TextBox label={"Modifiers"} id={"modifiers"} />
        </NodeLayout>
    );
})
