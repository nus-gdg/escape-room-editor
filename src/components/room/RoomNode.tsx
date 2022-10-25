import {ReactElement} from "react";
import {HandleProps, NodeProps} from "reactflow";
import {createSourceHandle, CustomNode} from "../flow";
import {NodeId} from "../../containers/Canvas";

export function makeRoomNode(title: string, ...handles: ReactElement<HandleProps>[]) {
    return ({data}: NodeProps<{}>) => {
        return (
            <CustomNode title={title} handles={handles}/>
        );
    }
}

export const RoomNode = ({data}: NodeProps<{}>) => {
    return (
        <CustomNode
            title={"Room"}
            handles={createSourceHandle(NodeId.Passage)}
        />
    );
}
