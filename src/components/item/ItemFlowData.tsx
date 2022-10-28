import {FlowId, NodeId} from "../common";
import {createRootNode, FlowData} from "../flow";
import {defaultItemNodeData} from "./ItemNode";

export interface ItemFlowData extends FlowData {
    type: FlowId.Item,
}

export function createItemFlowData(name: string): ItemFlowData {
    return {
        name: name,
        type: FlowId.Item,
        nodes: [createRootNode(NodeId.Item, defaultItemNodeData)],
        edges: [],
    }
}
