import React, {ReactElement, ReactNode} from "react";
import {Handle, HandleProps, Position} from "reactflow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

export interface CustomNodeProps {
    title: string,
    handles?: ReactElement<HandleProps> | Array<ReactElement<HandleProps>>,
    children?: ReactNode,
}

const nodeTransitionProps = { unmountOnExit: true };
const nodeHeaderExpandIcon = <ExpandMoreIcon sx={{pointerEvents: "auto"}} />;
const nodeHeaderSx = {pointerEvents: "none"};

export const CustomNode = (
    {
        title,
        handles,
        children,
    }: CustomNodeProps) => {
    if (children) {
        return (
            <Accordion className="node" elevation={0} TransitionProps={nodeTransitionProps} disableGutters>
                <AccordionSummary sx={nodeHeaderSx} expandIcon={nodeHeaderExpandIcon}>
                    <strong>{title}</strong>
                    {handles}
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        );
    } else {
        return (
            <div className="node">
                <strong>{title}</strong>
                {handles}
            </div>
        )
    }
}

export function createSourceHandle(id: string) {
    return <Handle id={id} type={"source"} position={Position.Right}/>
}

export function createTargetHandle(id: string) {
    return <Handle id={id} type={"target"} position={Position.Left}/>
}
