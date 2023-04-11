import {FlowId, NodeId} from "../common";
import {createRootNode, FlowData} from "../flow";
import {defaultGlobalOptionNodeData} from "./GlobalOptionNode";

export interface GlobalOptionFlowData extends FlowData {
    type: FlowId.GlobalOption,
}

export function createGlobalOptionFlowData(name: string): GlobalOptionFlowData {
    return {
        name: name,
        type: FlowId.GlobalOption,
        nodes: [createRootNode(NodeId.GlobalOption, defaultGlobalOptionNodeData)],
        edges: [],
    }
}
