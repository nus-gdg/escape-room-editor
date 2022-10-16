import React, {memo, useCallback, useState} from "react";
import ReactFlow, {addEdge, Background, Connection, Edge, Node, ReactFlowInstance, useEdgesState, useNodesState} from "reactflow";
import PassageNode from "./PassageNode";
import ReactionOptionNode from "./ReactionOptionNode";
import TextOptionNode from "./TextOptionNode";
import {NodeType} from "./utils";
import "reactflow/dist/base.css";
import "./Flow.css";

const nodeTypes = {
    [NodeType.Passage]: PassageNode,
    [NodeType.ReactionOption]: ReactionOptionNode,
    [NodeType.TextOption]: TextOptionNode,
}

const getNodeId = () => `${new Date()}`;

const Flow = () => {
    const initialNodes: Node[] = [
        {
            id: "1",
            type: "input",
            data: {label: "Node 1"},
            position: {x: 250, y: 5}
        },
        {id: "2", data: {label: "Node 2"}, position: {x: 100, y: 100}},
        {id: "3", data: {label: "Node 3"}, position: {x: 400, y: 100}},
        {id: "4", type: NodeType.Passage, data: {label: "Node 4"}, position: {x: 400, y: 200}},
        {id: "5", type: NodeType.ReactionOption, data: {label: "Node 5"}, position: {x: 500, y: 200}},
        {id: "6", type: NodeType.TextOption, data: {label: "Node 6"}, position: {x: 600, y: 200}}
    ];

    const initialEdges: Edge[] = [
        {id: "e1-2", source: "1", target: "2", animated: true},
        {id: "e1-3", source: "1", target: "3"}
    ];

    const [flow, setFlow] = useState<ReactFlowInstance | null>(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((savedEdges) => addEdge(params, savedEdges)),
        [setEdges]
    );

    const onAdd = useCallback(() => {
        const newNode = {
            id: getNodeId(),
            data: { label: 'Added node' },
            position: {
                x: Math.random() * window.innerWidth - 100,
                y: Math.random() * window.innerHeight,
            },
        };
        setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setFlow}
            fitView
            minZoom={0.1}
            nodeTypes={nodeTypes}
        >
            <div className="controls">
                <button onClick={() => console.log(flow?.toObject())}>debug</button>
                <button onClick={onAdd}>add</button>
            </div>
            <Background />
        </ReactFlow>
    )
}

export default memo(Flow);
