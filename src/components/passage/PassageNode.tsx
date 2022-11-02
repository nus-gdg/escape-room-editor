import React, {memo, useCallback} from "react";
import {NodeId} from "../common";
import {createSourceHandle, createTargetHandle, CustomNodeProps, NodeLayout} from "../flow";
import {SimpleTextField} from "../forms";
import "./PassageNode.css";

const handles = [
    createTargetHandle(NodeId.Passage),
    createSourceHandle(NodeId.TextOption),
    createSourceHandle(NodeId.ReactionOption),
];

export interface PassageNodeData {
    expanded: boolean,
    text: string,
    images: string,
    condition: string,
    modifiers: string,
}

export const defaultPassageNodeData: PassageNodeData = {
    expanded: true,
    text: "",
    images: "",
    condition: "",
    modifiers: "",
}

const PassageNode = (
    {
        id,
        data,
        onChange
    }: CustomNodeProps<PassageNodeData>) => {
    const handleChange = useCallback((payload: Partial<PassageNodeData>) => {
        onChange?.({id: id, data: payload});
    }, [onChange, id]);

    const handleChangeExpanded = useCallback((value: boolean) => {
        handleChange({ expanded: value });
    }, [handleChange]);

    const handleChangeText = useCallback((value: string) => {
        handleChange({ text: value });
    }, [handleChange]);

    const handleChangeImages = useCallback((value: string) => {
        handleChange({ images: value });
    }, [handleChange]);

    const handleChangeCondition = useCallback((value: string) => {
        handleChange({ condition: value });
    }, [handleChange]);

    const handleChangeModifiers = useCallback((value: string) => {
        handleChange({ modifiers: value });
    }, [handleChange]);

    return (
        <NodeLayout
            className={"PassageNode-root"}
            title={"Passage"}
            handles={handles}
            expanded={data.expanded}
            onExpand={handleChangeExpanded}
        >
            <SimpleTextField value={data.text} onChange={handleChangeText} label={"Text"}/>
            <SimpleTextField value={data.images} onChange={handleChangeImages} label={"Images"}/>
            <SimpleTextField value={data.condition} onChange={handleChangeCondition} label={"Condition"}/>
            <SimpleTextField value={data.modifiers} onChange={handleChangeModifiers} label={"Modifiers"}/>
        </NodeLayout>
    );
}

export default memo(PassageNode);
