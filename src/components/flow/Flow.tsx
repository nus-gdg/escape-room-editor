import {CSSProperties, useCallback, useEffect, useMemo, useRef, useState} from "react";
import useTheme from "@mui/material/styles/useTheme";
import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Connection,
    Controls,
    Edge,
    EdgeChange,
    MiniMap,
    MiniMapProps,
    Node,
    NodeChange,
    NodeTypes,
    OnConnectStartParams,
    ReactFlowInstance
} from "reactflow";
import "reactflow/dist/base.css";
import {
    applyNodeDataChange,
    createEdge,
    createNode,
    CustomNodeTypes,
    getMousePosition,
    getNodeId,
    isTouchingCanvas,
    mouseToViewportPosition,
    NodeDataChange,
    viewportToFlowPosition, withControlledData
} from "./utils";
import "./Flow.css";
import {ControlProps} from "@reactflow/controls/dist/esm/types";
import Typography from "@mui/material/Typography";

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
    const viewportRef = useRef<HTMLDivElement>(null);

    const [flow, setFlow] = useState<ReactFlowInstance | null>(null);
    const [localData, setLocalData] = useState<FlowData | null>(null);

    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    const onNodesChange = useCallback((changes: NodeChange[]) => {
        setNodes(nds => applyNodeChanges(changes, nds));
    }, [setNodes]);

    const onEdgesChange = useCallback((changes: EdgeChange[]) => {
        setEdges(eds => applyEdgeChanges(changes, eds))
    }, [setEdges]);

    const onNodeDataChange = useCallback((change: NodeDataChange) => {
        console.log(change);
        setNodes(nds => applyNodeDataChange(change, nds))
    }, [setNodes]);

    const controlledNodeTypes: NodeTypes = useMemo(() => {
        const types: NodeTypes = {};
        for (const [type, Component] of Object.entries(nodeTypes)) {
            types[type] = withControlledData(onNodeDataChange, Component);
        }
        return types;
    }, [nodeTypes, onNodeDataChange]);

    useEffect(() => {
        if (!data) {
            return;
        }
        if (localData) {
            onSave?.({
                ...localData,
                nodes: nodes,
                edges: edges,
            });
        }
        setLocalData(data);
        setNodes(data.nodes);
        setEdges(data.edges);
    }, [data, localData, setNodes, setEdges, setLocalData]);

    useEffect(() => {
        // Remove React Flow minimap tooltip
        document.getElementById("react-flow__minimap-desc-1")?.remove();
    }, [])

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
        const flowViewport = viewportRef.current
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

    const theme = useTheme();

    const labelProps: CSSProperties = useMemo(() => {
        return {
            position: "absolute",
            right: 0,
            bottom: 123,
            width: 226,
            marginRight: 15,
            zIndex: 5,
            backgroundColor: "rgb(48,78,78)",
        };
    }, [theme]);

    const minimapProps: MiniMapProps = useMemo(() => {
        return {
            style: {
                left: "auto",
                right: 26,
                width: 200,
                height: 108,
                backgroundColor: theme.palette.background.default,
            },
            maskColor: theme.palette.mode === "light"
                ? "rgba(240, 240, 240, 0.6)"
                : "rgba(50, 50, 50, 0.6)",
            pannable: true,
            zoomable: true,
        };
    }, [theme]);

    const controlProps: ControlProps = useMemo(() => {
        return {
            style: {
                left: "auto",
                right: 0,
                backgroundColor: theme.palette.background.default,
            },
        };
    }, [theme]);

    return (
        <div className={"viewport"} ref={viewportRef}>
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
                <div className="react-flow__label" style={labelProps}>
                    <Typography>
                        {data?.name}
                    </Typography>
                </div>
                <MiniMap {...minimapProps}/>
                <Controls {...controlProps}/>
                <Background/>
            </ReactFlow>
        </div>
    )
};
