import {useSelector} from "../app";
import {NodeId} from "../components/common";
import {Flow} from "../components/flow";
import {defaultGlobalOptionNodeData, GlobalOptionNode} from "../components/global-option";
import {defaultItemNodeData, ItemNode} from "../components/item";
import {defaultPassageNodeData, PassageNode} from "../components/passage";
import {defaultReactionOptionNodeData, ReactionOptionNode} from "../components/reaction-option";
import {defaultRoomNodeData, RoomNode} from "../components/room";
import {defaultTextOptionNodeData, TextOptionNode} from "../components/text-option";
import {selectFlow} from "../slices";

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
    const flow = useSelector(selectFlow);
    return (
        <Flow data={flow} nodeTypes={nodeTypes} nodeDefaults={nodeDefaults}/>
    )
};

export default Canvas;
