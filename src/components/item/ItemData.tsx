import {createRootNode, FlowData} from "../flow";
import {FlowId, NodeId} from "../common";

export interface ItemData extends FlowData {
    type: FlowId.Item,
}

export function createItemData(name: string): ItemData {
    return {
        name: name,
        type: FlowId.Item,
        nodes: [createRootNode(NodeId.Item, {})],
        edges: [],
    }
}
