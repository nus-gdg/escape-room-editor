import React, {ReactElement, ReactNode, useCallback} from "react";
import {Connection, Handle, HandleProps, Position} from "reactflow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import "./NodeLayout.css";

const nodeTransitionProps = { unmountOnExit: true };
const nodeHeaderExpandIcon = <ExpandMoreIcon className={"NodeLayout-expand-icon"} />;

export function isValidConnection(connection: Connection) {
    return connection.sourceHandle === connection.targetHandle;
}

export function createSourceHandle(id: string): HandleProps {
    return { id: id, type: "source", position: Position.Right, isValidConnection: isValidConnection };
}

export function createTargetHandle(id: string): HandleProps {
    return { id: id, type: "target", position: Position.Left, isValidConnection: isValidConnection };
}

function renderHandles(handles: HandleProps[]) {
    return handles.map(handle => <Handle key={handle.id} {...handle}/>);
}

export interface NodeLayoutProps {
    className?: string,
    title: string,
    handles?: HandleProps[],
    expanded?: boolean,
    onExpand?: (isExpanded: boolean) => void,
    children?: ReactNode,
}

export const NodeLayout = (
    {
        className,
        title,
        handles,
        expanded,
        onExpand,
        children,
    }: NodeLayoutProps) => {
    const handleExpand = useCallback((_: any, isExpanded: boolean) => {
        onExpand?.(isExpanded);
    }, [onExpand]);

    if (children) {
        return (
            <Accordion
                className={`NodeLayout-root ${className}`}
                elevation={0}
                expanded={expanded}
                onChange={handleExpand}
                TransitionProps={nodeTransitionProps}
                disableGutters
                square
            >
                <AccordionSummary className="NodeLayout-header"  expandIcon={nodeHeaderExpandIcon}>
                    <strong className="NodeLayout-title">{title}</strong>
                    {handles && renderHandles(handles)}
                </AccordionSummary>
                <AccordionDetails className="NodeLayout-body">
                    {children}
                </AccordionDetails>
            </Accordion>
        );
    } else {
        return (
            <div className={`NodeLayout-root ${className}`}>
                <strong className="NodeLayout-title">{title}</strong>
                {handles && renderHandles(handles)}
            </div>
        )
    }
}
