import {memo, useCallback} from "react";
import {NodeId} from "../common";
import {createSourceHandle, createTargetHandle, CustomNodeProps, NodeLayout} from "../flow";
import {EmojiField, SimpleTextField} from "../forms";
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
    const handleChange = useCallback((payload: Partial<TextOptionNodeData>) => {
        onChange?.({id: id, data: payload});
    }, [onChange, id]);

    const handleChangeExpanded = useCallback((value: boolean) => {
        handleChange({ expanded: value });
    }, [handleChange]);

    const handleChangeEmoji = useCallback((value: string) => {
        handleChange({ emoji: value });
    }, [handleChange]);

    const handleChangeSummary = useCallback((value: string) => {
        handleChange({ summary: value });
    }, [handleChange]);

    const handleChangeCondition = useCallback((value: string) => {
        handleChange({ condition: value });
    }, [handleChange]);

    const handleChangeModifiers = useCallback((value: string) => {
        handleChange({ modifiers: value });
    }, [handleChange]);

    return (
        <NodeLayout
            className={"TextOptionNode-root"}
            title={"Text Option"}
            handles={handles}
            expanded={data.expanded}
            onExpand={handleChangeExpanded}
        >
            <EmojiField value={data.emoji} onChange={handleChangeEmoji}/>
            <SimpleTextField value={data.summary} onChange={handleChangeSummary} label={"Summary"}/>
            <SimpleTextField value={data.condition} onChange={handleChangeCondition} label={"Condition"}/>
            <SimpleTextField value={data.modifiers} onChange={handleChangeModifiers} label={"Modifiers"}/>
        </NodeLayout>
    );
}

export default memo(TextOptionNode);
