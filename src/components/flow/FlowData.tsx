import {Edge, Node} from "reactflow";

export interface FlowData {
    name: string,
    type: string,
    nodes: Node[],
    edges: Edge[],
}

export function createFlowData(name: string, type: string, rootNode: Node): FlowData {
    return {
        name: name,
        type: type,
        nodes: [rootNode],
        edges: [],
    }
}

export function createRootNode<T>(type: string, data: T): Node {
    return {
        id: "0",
        type: type,
        data: data,
        position: {x: 0, y: 0},
        deletable: false,
        draggable: false,
    }
}
