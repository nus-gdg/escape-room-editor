import {Edge, Node, NodeProps, ReactFlowInstance, XYPosition} from "reactflow";
import React, {ComponentType} from "react";

export declare type NodeDataChange<NodeData = any> = {
    id: string;
    data: NodeData;
}

export function applyNodeDataChange<NodeData = any>(change: NodeDataChange, nodes: Node<NodeData>[]): Node<NodeData>[] {
    const newNodes: Node<NodeData>[] = [];
    for (const node of nodes) {
        if (node.id === change.id) {
            newNodes.push({
                ...node,
                data: change.data
            });
        } else {
            newNodes.push(node);
        }
    }
    return newNodes;
}

export declare type OnNodeDataChange<NodeData = any> = (change: NodeDataChange<NodeData>) => void;

export interface CustomNodeProps<NodeData = any> extends NodeProps<NodeData> {
    onChange?: OnNodeDataChange<NodeData>;
}

export function withControlledData<NodeData = any>(
    onNodeDataChange: OnNodeDataChange,
    CustomNode: ComponentType<CustomNodeProps<NodeData>>
) {
    return (props: NodeProps<NodeData>) => <CustomNode {...props} onChange={onNodeDataChange}/>;
}

export declare type CustomNodeTypes = {
    [key: string]: ComponentType<CustomNodeProps>;
};

export function createNode<T>(id: string, type: string, position: XYPosition, data: T): Node {
    return {
        id: id,
        type: type,
        data: data,
        position: position,
    }
}

export const rootNodeId = "0";

export function createRootNode<T>(type: string, data: T): Node {
    return {
        id: rootNodeId,
        type: type,
        data: data,
        position: { x: 0, y: 0 },
        deletable: false,
        draggable: false,
    }
}

export function createEdge(type: string, sourceId: string, targetId: string): Edge {
    return {
        id: `${sourceId}-${targetId}`,
        source: sourceId,
        sourceHandle: type,
        target: targetId,
        targetHandle: type,
    };
}

export function getNodeId(nodes: Node[]) {
    let maxId = 0;
    for (let node of nodes) {
        const id = parseInt(node.id);
        if (maxId < id) {
            maxId = id;
        }
    }
    return `${maxId + 1}`;
}

export function isTouchingCanvas(event: MouseEvent): boolean {
    // Check if mouse is clicking on empty canvas space
    const element = event.target as Element;
    return element && element.classList.contains('react-flow__pane');
}

export function getMousePosition(event: MouseEvent): XYPosition {
    return { x: event.clientX, y: event.clientY };
}

export function mouseToViewportPosition(mousePosition: XYPosition, viewport: HTMLDivElement): XYPosition {
    const { top, left } = viewport.getBoundingClientRect();
    return { x: mousePosition.x - left, y: mousePosition.y - top };
}

export function viewportToFlowPosition(viewportPosition: XYPosition, flow: ReactFlowInstance): XYPosition {
    return flow.project(viewportPosition);
}
