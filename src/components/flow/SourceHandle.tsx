import {Handle, Position} from "reactflow";
import React from "react";

export interface SourceHandleProps {
    id: string,
}

export const SourceHandle = ({id}: SourceHandleProps) => {
    return <Handle id={id} type={"source"} position={Position.Right}/>
}
