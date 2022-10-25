import {ReactElement} from "react";
import {HandleProps, NodeProps} from "reactflow";
import {CustomNode} from "../flow";

export function makeRoomNode(title: string, ...handles: ReactElement<HandleProps>[]) {
    return ({data}: NodeProps<{}>) => {
        return (
            <CustomNode title={title} handles={handles}/>
        );
    }
}
