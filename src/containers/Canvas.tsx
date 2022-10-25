import {memo} from "react";
import {useDispatch, useSelector} from "../app";
import {createSourceHandle, createTargetHandle, Flow} from "../components/flow";
import {makePassageNode} from "../components/passage";
import {makeReactionOptionNode} from "../components/reaction-option";
import {makeRoomNode} from "../components/room";
import {makeTextOptionNode} from "../components/text-option";
import {openFlow, selectFlow} from "../slices";

const Canvas = () => {
    const dispatch = useDispatch();
    const flow = useSelector(selectFlow);

    // useEffect(() => {
    //     dispatch(openFlow({name: "potato", type: "room", nodes: [], edges: []}))
    // }, []);

    return (
        <Flow data={flow} nodeTypes={nodeTypes}/>
    )
};

export default memo(Canvas);

export enum NodeId {
    Room = "room",
    Item = "item",
    GlobalOption = "global-option",
    TextOption = "text-option",
    ReactionOption = "reaction-option",
    Passage = "passage",
}

const RoomNode = makeRoomNode(
    "Room",
    createSourceHandle(NodeId.Passage),
);

// const ItemNode = withHandles(
//     BaseRootNode,
//     createSourceHandle(NodeId.Passage),
// );

const GlobalOptionNode = makeTextOptionNode(
    "Global Option",
    createSourceHandle(NodeId.GlobalOption),
);

const TextOptionNode = makeTextOptionNode(
    "Text Option",
    createTargetHandle(NodeId.TextOption),
    createSourceHandle(NodeId.Passage),
);

const ReactionOptionNode = makeReactionOptionNode(
    "Reaction Option",
    createTargetHandle(NodeId.ReactionOption),
    createSourceHandle(NodeId.Passage),
);

const PassageNode = makePassageNode(
    "Passage",
    createTargetHandle(NodeId.Passage),
    createSourceHandle(NodeId.TextOption),
    createSourceHandle(NodeId.Passage),
);

export const nodeTypes = {
    [NodeId.Room]: RoomNode,
    // [NodeId.Room]: ItemNode,
    [NodeId.GlobalOption]: GlobalOptionNode,
    [NodeId.ReactionOption]: ReactionOptionNode,
    [NodeId.TextOption]: TextOptionNode,
    [NodeId.Passage]: PassageNode,
}
