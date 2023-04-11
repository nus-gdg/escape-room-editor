import {memo, useCallback} from "react";
import {NodeId} from "../common";
import {createSourceHandle, createTargetHandle, CustomNodeProps, NodeLayout} from "../flow";
import {EmojiField, TextField} from "../forms";
import "./ReactionOptionNode.css";

const handles = [
    createTargetHandle(NodeId.ReactionOption),
    createSourceHandle(NodeId.Passage),
];

export interface ReactionOptionNodeData {
    expanded: boolean,
    emoji: string,
    summary: string,
    condition: string,
    modifiers: string,
}

export const defaultReactionOptionNodeData: ReactionOptionNodeData = {
    expanded: true,
    emoji: "",
    summary: "",
    condition: "",
    modifiers: "",
}

const ReactionOptionNode = (
    {
        id,
        data,
        onChange
    }: CustomNodeProps<ReactionOptionNodeData>) => {
    const handleChange = useCallback((payload: Partial<ReactionOptionNodeData>) => {
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
            className={"ReactionOptionNode-root"}
            title={"Reaction Option"}
            handles={handles}
            expanded={data.expanded}
            onExpand={handleChangeExpanded}
        >
            <EmojiField value={data.emoji} onChange={handleChangeEmoji}/>
            <TextField value={data.summary} onChange={handleChangeSummary} label={"Summary"}/>
            <TextField value={data.condition} onChange={handleChangeCondition} label={"Condition"}/>
            <TextField value={data.modifiers} onChange={handleChangeModifiers} label={"Modifiers"}/>
        </NodeLayout>
    );
}

export default memo(ReactionOptionNode);
