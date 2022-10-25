import React from "react";
import {Handle, Position} from "reactflow";

export function createSourceHandle(id: string) {
    return <Handle id={id} type={"source"} position={Position.Right}/>
}

export function createTargetHandle(id: string) {
    return <Handle id={id} type={"target"} position={Position.Left}/>
}
