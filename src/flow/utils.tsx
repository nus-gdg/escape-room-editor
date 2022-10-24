import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionActions, { AccordionActionsProps } from '@mui/material/AccordionActions';
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Handle, HandleProps, Position} from "reactflow";
import {Connection, OnConnect} from "@reactflow/core/dist/esm/types/general";
import {HandleType} from "@reactflow/core/dist/esm/types/handles";
import React, {ReactElement} from "react";

export enum NodeType {
    Root = "root",
    Passage = "passage",
    TextOption = "text-option",
    ReactionOption = "reaction-option",
}

export interface NodeProps {
    handles?: ReactElement<HandleProps> | Array<ReactElement<HandleProps>>
}

export function withHandles<T extends NodeProps>(...handles: ReactElement<HandleProps>[]) {
    return (Component: React.ComponentType<T>) => {
        return (props: Omit<T, keyof NodeProps>) => {
            return (
                <Component {...props as T} handles={handles}/>
            )
        };
    }
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
