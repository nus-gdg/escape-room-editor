import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import ReactFlow, {addEdge, Background, Connection, Edge, Node, ReactFlowInstance, useEdgesState, useNodesState, XYPosition} from "reactflow";
import {NodeTypes} from "@reactflow/core/dist/esm/types";
import {OnConnectStartParams} from "@reactflow/core/dist/esm/types/general";
import "reactflow/dist/base.css";
import "./Flow.css";
import {
    createEdge,
    createNode,
    getMousePosition,
    getNodeId,
    isTouchingCanvas,
    mouseToViewportPosition,
    viewportToFlowPosition
} from "./utils";

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

export interface FlowProps {
    nodeTypes: NodeTypes,
    nodeDefaults: Record<string, any>,
    data?: FlowData,
}

export const Flow = memo((
    {
        nodeTypes,
        nodeDefaults,
        data,
    } : FlowProps) => {
    const connectionRef = useRef<OnConnectStartParams | null>(null);
    const flowViewportRef = useRef<HTMLDivElement>(null);
    const [flow, setFlow] = useState<ReactFlowInstance | null>(null);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    console.log({
        con: connectionRef,
        fv: flowViewportRef,
        f: flow,
        node: nodes,
        edges: edges,
    });

    useEffect(() => {
        console.log("effect");
        setNodes(data ? data.nodes : []);
        setEdges(data ? data.edges : []);
    }, [data, setNodes, setEdges]);

    const handleInit = useCallback((flow: ReactFlowInstance) => {
        console.log("init");
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
            console.log("set e");
            return eds.concat(newEdge);
        });
    };

    return (
        <div className={"viewport"} ref={flowViewportRef}>
            <ReactFlow
                nodeTypes={nodeTypes}
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
                    <button onClick={() => console.log(nodes)}>debug</button>
                </div>
                <Background />
            </ReactFlow>
        </div>
    )
});
