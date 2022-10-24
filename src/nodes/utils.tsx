import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionActions, { AccordionActionsProps } from '@mui/material/AccordionActions';
import MuiAccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export enum NodeType {
    Root = "root",
    Passage = "passage",
    TextOption = "text-option",
    ReactionOption = "reaction-option",
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
