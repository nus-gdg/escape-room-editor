import {memo} from "react";
import {useDispatch, useSelector} from "../app";
import {createSourceHandle, createTargetHandle, Flow, withHandles} from "../components/flow";
import {PassageNode as BasePassageNode} from "../components/passage";
import {ReactionOptionNode as BaseReactionOptionNode} from "../components/reaction-option";
import {TextOptionNode as BaseTextOptionNode} from "../components/text-option";
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

// const RoomNode = withHandles(
//     BaseRootNode,
//     createSourceHandle(NodeId.Passage),
// );
//
// const ItemNode = withHandles(
//     BaseRootNode,
//     createSourceHandle(NodeId.Passage),
// );

const GlobalOptionNode = withHandles(
    BaseTextOptionNode,
    createSourceHandle(NodeId.Passage),
);

const TextOptionNode = withHandles(
    BaseTextOptionNode,
    createTargetHandle(NodeId.TextOption),
    createSourceHandle(NodeId.Passage),
);

const ReactionOptionNode = withHandles(
    BaseReactionOptionNode,
    createTargetHandle(NodeId.ReactionOption),
    createSourceHandle(NodeId.Passage),
);

const PassageNode = withHandles(
    BasePassageNode,
    createTargetHandle(NodeId.Passage),
    createSourceHandle(NodeId.TextOption),
    createSourceHandle(NodeId.Passage),
);

export const nodeTypes = {
    // [NodeId.Room]: RoomNode,
    // [NodeId.Room]: ItemNode,
    [NodeId.GlobalOption]: GlobalOptionNode,
    [NodeId.ReactionOption]: ReactionOptionNode,
    [NodeId.TextOption]: TextOptionNode,
    [NodeId.Passage]: PassageNode,
}
