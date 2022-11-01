import {ChangeEvent, memo, useCallback, useState} from "react";
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

const TextOptionNode = ({id, data, onChange}: CustomNodeProps<TextOptionNodeData>) => {
    const [emoji, setEmoji] = useState(data.emoji);

    const handleChangeExpanded = useCallback((isExpanded: boolean) => {
        onChange?.({id: id, data: { expanded: isExpanded }});
    }, [id, onChange]);

    const handleChangeEmoji = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmoji(value);
        onChange?.({id: id, data: { ...data, emoji: value }});
    }

    return (
        <NodeLayout
            className={"TextOptionNode-root"}
            title={"Text Option"}
            handles={handles}
            expanded={data.expanded}
            onExpand={handleChangeExpanded}
        >
            <TextBox label={"Emoji"} id={"emoji"} value={emoji} onChange={handleChangeEmoji} />
            <TextBox label={"Summary"} id={"summary"} />
            <TextBox label={"Condition"} id={"condition"} />
            <TextBox label={"Modifiers"} id={"modifiers"} />
        </NodeLayout>
    );
}

export default memo(TextOptionNode);
