import {useDispatch, useSelector} from "../app";
import {NodeId} from "../components/common";
import {Flow, FlowData} from "../components/flow";
import {defaultGlobalOptionNodeData, GlobalOptionNode} from "../components/global-option";
import {defaultItemNodeData, ItemNode} from "../components/item";
import {defaultPassageNodeData, PassageNode} from "../components/passage";
import {defaultReactionOptionNodeData, ReactionOptionNode} from "../components/reaction-option";
import {defaultRoomNodeData, RoomFlowData, RoomNode} from "../components/room";
import {defaultTextOptionNodeData, TextOptionNode} from "../components/text-option";
import {selectFlow, updateRoom} from "../slices";
import {useCallback} from "react";

export const nodeTypes = {
    [NodeId.Room]: RoomNode,
    [NodeId.Item]: ItemNode,
    [NodeId.GlobalOption]: GlobalOptionNode,
    [NodeId.ReactionOption]: ReactionOptionNode,
    [NodeId.TextOption]: TextOptionNode,
    [NodeId.Passage]: PassageNode,
}

export const nodeDefaults = {
    [NodeId.Room]: defaultRoomNodeData,
    [NodeId.Item]: defaultItemNodeData,
    [NodeId.GlobalOption]: defaultGlobalOptionNodeData,
    [NodeId.ReactionOption]: defaultReactionOptionNodeData,
    [NodeId.TextOption]: defaultTextOptionNodeData,
    [NodeId.Passage]: defaultPassageNodeData,

}

const Canvas = () => {
    const dispatch = useDispatch();
    const flow = useSelector(selectFlow);

    const handleSave = useCallback((data: FlowData) => {
        const roomFlowData = data as RoomFlowData;
        if (roomFlowData) {
            dispatch(updateRoom({ name: data.name, data: roomFlowData }));
        }
    }, []);
    return (
        <Flow data={flow} nodeTypes={nodeTypes} nodeDefaults={nodeDefaults} onSave={handleSave}/>
    )
};

export default Canvas;
