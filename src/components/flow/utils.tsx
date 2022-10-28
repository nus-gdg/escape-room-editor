import {Edge, Node, ReactFlowInstance, XYPosition} from "reactflow";

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
