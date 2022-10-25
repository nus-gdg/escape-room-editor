import React, {ReactElement, ReactNode} from "react";
import {HandleProps} from "reactflow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import "./CustomNode.css";

export interface CustomNodeProps {
    className?: string,
    title: string,
    handles?: ReactElement<HandleProps> | Array<ReactElement<HandleProps>>,
    children?: ReactNode,
}

const nodeTransitionProps = { unmountOnExit: true };
const nodeHeaderExpandIcon = <ExpandMoreIcon className={"CustomNode-expand-icon"} />;

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
                disableGutters
                square
            >
                <AccordionSummary className="CustomNode-header"  expandIcon={nodeHeaderExpandIcon}>
                    <strong className="CustomNode-title">{title}</strong>
                    {handles}
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
                {handles}
            </div>
        )
    }
}
