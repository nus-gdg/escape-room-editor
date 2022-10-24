import React, {memo, useCallback, useRef, useState} from "react";
import ReactFlow, {addEdge, Background, Connection, Edge, Node, ReactFlowInstance, useEdgesState, useNodesState, XYPosition} from "reactflow";
import {NodeTypes} from "@reactflow/core/dist/esm/types";
import {OnConnectStartParams} from "@reactflow/core/dist/esm/types/general";
import "reactflow/dist/base.css";
import {FlowData} from "./FlowData";
import "./Flow.css";

export interface FlowProps {
    nodeTypes: NodeTypes,
    data?: FlowData,
}

export const Flow = memo((
    {
        nodeTypes,
        data,
    } : FlowProps) => {
    const connectionRef = useRef<OnConnectStartParams | null>(null);
    const flowViewportRef = useRef<HTMLDivElement>(null);
    const [flow, setFlow] = useState<ReactFlowInstance | null>(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(data ? data.nodes : []);
    const [edges, setEdges, onEdgesChange] = useEdgesState(data ? data.edges : []);

    const isCreatingNode = useCallback((event: MouseEvent): boolean => {
        // Check if mouse is clicking on empty canvas space
        const element = event.target as Element;
        return element && element.classList.contains('react-flow__pane');
    }, []);

    const getMousePosition = useCallback((event: MouseEvent): XYPosition => {
        const flowViewport = flowViewportRef.current;
        if (!flow || !flowViewport) {
            return { x: 0, y: 0 };
        }
        // we need to remove the wrapper bounds, in order to get the correct position
        const { top, left } = flowViewport.getBoundingClientRect();
        return flow.project({ x: event.clientX - left, y: event.clientY - top });
    }, [flow]);

    const createNodeId = useCallback((): string => {
        let id = 0;
        for (let node of nodes) {
            const nodeId = parseInt(node.id);
            if (id < nodeId) {
                id = nodeId;
            }
        }
        return `${id + 1}`;
    }, [nodes]);

    const createNode = useCallback((connection: OnConnectStartParams, position: XYPosition): Node => {
        return {
            id: createNodeId(),
            position: position,
            type: connection.handleId ?? "",
            data: {}
        };
    }, [createNodeId]);

    const createEdgeId = useCallback((sourceId: string, targetId: string): string => {
        return `${sourceId}-${targetId}`;
    }, []);

    const createEdge = useCallback((connection: OnConnectStartParams, node: Node): Edge => {
        const connectionNodeId = connection.nodeId ?? "";
        switch (connection.handleType) {
            case "target":
                return {
                    id: createEdgeId(node.id, connectionNodeId),
                    source: node.id,
                    sourceHandle: connection.handleId,
                    target: connectionNodeId,
                    targetHandle: connection.handleId,
                };
            case "source":
            default:
                return {
                    id: createEdgeId(connectionNodeId, node.id),
                    source: connectionNodeId,
                    sourceHandle: connection.handleId,
                    target: node.id,
                    targetHandle: connection.handleId,
                };
        }
    }, [createEdgeId]);

    const onConnect = useCallback((params: Edge | Connection) => {
        setEdges((eds) => addEdge(params, eds))
    }, [setEdges]);

    const onConnectStart = useCallback((_: any, params: OnConnectStartParams) => {
        connectionRef.current = params;
    },[]);

    const onConnectEnd = useCallback((event: MouseEvent) => {
            if (!isCreatingNode(event)) {
                return;
            }
            const connection = connectionRef.current;
            if (!connection) {
                return;
            }
            const newNode = createNode(connection, getMousePosition(event));
            const newEdge = createEdge(connection, newNode);

            setNodes((nds) => nds.concat(newNode));
            setEdges((eds) => eds.concat(newEdge));
        }, [isCreatingNode, getMousePosition, createNode, createEdge, setNodes, setEdges]);

    return (
        <div className={"viewport"} ref={flowViewportRef}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onInit={setFlow}
                onConnect={onConnect}
                onConnectStart={onConnectStart}
                onConnectEnd={onConnectEnd}
                fitView
                minZoom={0.1}
                nodeTypes={nodeTypes}
            >
                <div className="controls">
                    <button onClick={() => console.log(nodes)}>debug</button>
                </div>
                <Background />
            </ReactFlow>
        </div>
    )
});
