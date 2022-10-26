import React, {ReactElement, ReactNode} from "react";
import {Handle, HandleProps, Position} from "reactflow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import "./CustomNode.css";

export interface CustomNodeProps {
    className?: string,
    title: string,
    handles?: HandleProps[],
    children?: ReactNode,
}

const nodeTransitionProps = { unmountOnExit: true };
const nodeHeaderExpandIcon = <ExpandMoreIcon className={"CustomNode-expand-icon"} />;

export function createSourceHandle(id: string): HandleProps {
    return { id: id, type: "source", position: Position.Right };
}

export function createTargetHandle(id: string): HandleProps {
    return { id: id, type: "target", position: Position.Left };
}

function renderHandles(handles: HandleProps[]) {
    return handles.map(handle => <Handle key={handle.id} {...handle}/>);
}

export const CustomNode = (
    {
        className,
        title,
        handles,
        children,
    }: CustomNodeProps) => {
    if (children) {
        return (
            <Accordion
                className={`CustomNode-root ${className}`}
                elevation={0}
                TransitionProps={nodeTransitionProps}
                defaultExpanded
                disableGutters
                square
            >
                <AccordionSummary className="CustomNode-header"  expandIcon={nodeHeaderExpandIcon}>
                    <strong className="CustomNode-title">{title}</strong>
                    {handles && renderHandles(handles)}
                </AccordionSummary>
                <AccordionDetails className="CustomNode-body">
                    {children}
                </AccordionDetails>
            </Accordion>
        );
    } else {
        return (
            <div className={`CustomNode-root ${className}`}>
                <strong className="CustomNode-title">{title}</strong>
                {handles && renderHandles(handles)}
            </div>
        )
    }
}
