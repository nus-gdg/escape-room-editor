import React, {ComponentType, memo, useCallback, useEffect, useMemo, useRef, useState} from "react";
import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges, Background, Connection, Edge, EdgeChange, Node,
    NodeChange, NodeProps, ReactFlowInstance, useEdgesState, useNodesState, XYPosition
} from "reactflow";
import {NodeTypes} from "@reactflow/core/dist/esm/types";
import {OnConnectStartParams} from "@reactflow/core/dist/esm/types/general";
import "reactflow/dist/base.css";
import "./Flow.css";
import {
    applyNodeDataChange,
    createEdge,
    createNode, CustomNodeProps, CustomNodeTypes,
    getMousePosition,
    getNodeId,
    isTouchingCanvas,
    mouseToViewportPosition,
    NodeDataChange, OnNodeDataChange,
    viewportToFlowPosition, withControlledData
} from "./utils";
import {NodeId} from "../common";
import {RoomNode} from "../room";
import {debounce} from "@mui/material";

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

const nodeTypesFactory = (onNodeDataChange: OnNodeDataChange) => {
    return {
        [NodeId.Room]: withControlledData(onNodeDataChange, RoomNode),
    }
};

export interface FlowProps {
    nodeTypes: CustomNodeTypes,
    nodeDefaults: Record<string, any>,
    data?: FlowData,
    onSave?: (data: FlowData) => void,
}

export const Flow = (
    {
        nodeTypes,
        nodeDefaults,
        data,
        onSave,
    } : FlowProps) => {
    const connectionRef = useRef<OnConnectStartParams | null>(null);
    const flowViewportRef = useRef<HTMLDivElement>(null);
    const [flow, setFlow] = useState<ReactFlowInstance | null>(null);

    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    const onNodesChange = useCallback((changes: NodeChange[]) => {
        setNodes(nds => applyNodeChanges(changes, nds));
    }, [setNodes]);

    const onEdgesChange = useCallback((changes: EdgeChange[]) => {
        setEdges(eds => applyEdgeChanges(changes, eds))
    }, [setEdges]);

    const onNodeDataChange = useCallback(debounce((change: NodeDataChange) => {
        console.log(change);
        setNodes(nds => applyNodeDataChange(change, nds))
    }, 250), [setNodes]);

    const controlledNodeTypes: NodeTypes = useMemo(() => {
        const types: NodeTypes = {};
        for (const [type, Component] of Object.entries(nodeTypes)) {
            types[type] = withControlledData(onNodeDataChange, Component);
        }
        return types;
    }, [nodeTypes, onNodeDataChange]);

    useEffect(() => {
        setNodes(data ? data.nodes : []);
        setEdges(data ? data.edges : []);
    }, [data, setNodes, setEdges]);

    const handleInit = useCallback((flow: ReactFlowInstance) => {
        setFlow(flow);
    }, [setFlow]);

    const handleConnect = useCallback((params: Edge | Connection) => {
        setEdges((eds) => addEdge(params, eds));
    }, [setEdges]);

    const handleConnectStart = useCallback((_: any, params: OnConnectStartParams) => {
        connectionRef.current = params;
    },[]);

    const handleConnectEnd = (event: MouseEvent) => {
        if (!isTouchingCanvas(event)) {
            return;
        }
        if (!flow) {
            return;
        }
        const flowViewport = flowViewportRef.current
        if (!flowViewport) {
            return;
        }
        const connection = connectionRef.current;
        if (!connection) {
            return;
        }
        if (connection.handleType === "target") {
            return;
        }

        // Get position in flow space
        const mousePosition = getMousePosition(event);
        const viewportPosition = mouseToViewportPosition(mousePosition, flowViewport);
        const nodePosition = viewportToFlowPosition(viewportPosition, flow);

        const nodeType = connection.handleId ?? "";
        const nodeData = nodeDefaults[nodeType];
        const nodeId = getNodeId(nodes);
        const sourceNodeId = connection.nodeId ?? "";

        const newNode = createNode(nodeId, nodeType, nodePosition, nodeData);
        const newEdge = createEdge(nodeType, sourceNodeId, nodeId);

        // Create new node
        setNodes((nds) => {
            return nds.concat(newNode);
        });

        // Create new edge
        setEdges((eds) => {
            return eds.concat(newEdge);
        });
    };

    const handleSave =  () => {
        if (!data) {
            return;
        }
        onSave?.({
            ...data,
            nodes: nodes,
            edges: edges,
        })
    };

    return (
        <div className={"viewport"} ref={flowViewportRef}>
            <ReactFlow
                nodeTypes={controlledNodeTypes}
                nodes={nodes}
                edges={edges}
                minZoom={0.1}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onInit={handleInit}
                onConnect={handleConnect}
                onConnectStart={handleConnectStart}
                onConnectEnd={handleConnectEnd}
                fitView
            >
                <div className="controls">
                    <p>{data?.name}</p>
                    <button onClick={handleSave}>debug</button>
                </div>
                <Background />
            </ReactFlow>
        </div>
    )
};
