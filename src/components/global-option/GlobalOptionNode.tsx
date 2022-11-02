import {memo, useCallback} from "react";
import {NodeId} from "../common";
import {createSourceHandle, CustomNodeProps, NodeLayout} from "../flow";
import {EmojiField, TextField} from "../forms";
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

const GlobalOptionNode = (
    {
        id,
        data,
        onChange
    }: CustomNodeProps<GlobalOptionNodeData>) => {
    const handleChange = useCallback((payload: Partial<GlobalOptionNodeData>) => {
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
            className={"GlobalOptionNode-root"}
            title={"Global Option"}
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

export default memo(GlobalOptionNode);
