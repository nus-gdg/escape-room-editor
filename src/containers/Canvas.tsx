import {memo} from "react";
import {useDispatch, useSelector} from "../app";
import {NodeId} from "../components/common";
import {Flow} from "../components/flow";
import {GlobalOptionNode} from "../components/global-option";
import {ItemNode} from "../components/item";
import {PassageNode} from "../components/passage";
import {ReactionOptionNode} from "../components/reaction-option";
import {RoomNode} from "../components/room";
import {TextOptionNode} from "../components/text-option";
import {openFlow, selectFlow} from "../slices";

const Canvas = () => {
    const dispatch = useDispatch();
    const flow = useSelector(selectFlow);

    return (
        <Flow data={flow} nodeTypes={nodeTypes}/>
    )
};

export default Canvas;

export const nodeTypes = {
    [NodeId.Room]: RoomNode,
    [NodeId.Item]: ItemNode,
    [NodeId.GlobalOption]: GlobalOptionNode,
    [NodeId.ReactionOption]: ReactionOptionNode,
    [NodeId.TextOption]: TextOptionNode,
    [NodeId.Passage]: PassageNode,
}
