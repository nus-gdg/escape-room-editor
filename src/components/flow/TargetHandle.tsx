import {Handle, Position} from "reactflow";
import React from "react";

export interface TargetHandleProps {
    id: string,
}

export const TargetHandle = ({id}: TargetHandleProps) => {
    return <Handle id={id} type={"target"} position={Position.Left}/>
}
