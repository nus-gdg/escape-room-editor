import {createRootNode, FlowData} from "../flow";
import {FlowId, NodeId} from "../common";
import {TextOptionData} from "../text-option";

export interface GlobalOptionData extends FlowData {
    type: FlowId.GlobalOption,
}

export function createGlobalOptionData(name: string): GlobalOptionData {
    return {
        name: name,
        type: FlowId.GlobalOption,
        nodes: [createRootNode(NodeId.GlobalOption, defaultData)],
        edges: [],
    }
}

const defaultData: TextOptionData = {
    emoji: "",
    summary: "",
    condition: "",
    modifiers: "",
}
