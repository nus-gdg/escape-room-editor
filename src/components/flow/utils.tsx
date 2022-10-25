import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionActions, { AccordionActionsProps } from '@mui/material/AccordionActions';
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Handle, HandleProps, NodeProps, Position} from "reactflow";
import React, {ReactElement} from "react";

export interface CustomNodeProps<T> {
    nodeProps: NodeProps<T>,
    handles: ReactElement<HandleProps> | Array<ReactElement<HandleProps>>,
}

export function withHandles<T>(
    Component: React.ComponentType<CustomNodeProps<T>>,
    ...handles: ReactElement<HandleProps>[]
) {
    return (props: NodeProps<T>) => <Component nodeProps={props} handles={handles}/>;
}

export function createSourceHandle(id: string) {
    return <Handle id={id} type={"source"} position={Position.Right}/>
}

export function createTargetHandle(id: string) {
    return <Handle id={id} type={"target"} position={Position.Left}/>
}

export const CustomNode = (props: AccordionProps) => {
    return (
        <MuiAccordion
            disableGutters
            elevation={0}
            TransitionProps={{ unmountOnExit: true }}
            {...props}
        />
    )
}

export const CustomNodeHeader = (props: AccordionSummaryProps) => {
    return (
        <MuiAccordionSummary
            sx={{pointerEvents: "none"}}
            expandIcon={<ExpandMoreIcon sx={{pointerEvents: "auto"}} />}
            {...props}
        />
    )
}

export const CustomNodeDetails = (props: AccordionDetailsProps) => {
    return (
        <MuiAccordionDetails
            {...props}
        />
    )
}

export const CustomNodeActions = (props: AccordionActionsProps) => {
    return (
        <MuiAccordionActions
            {...props}
        />
    )
}
