import {TooltipProps} from "@mui/material";

export * from "./FlowId";
export * from "./NodeId";

export const debounceTime = 250;

export const tooltipProps: Pick<TooltipProps, "disableInteractive" | "enterDelay" | "enterNextDelay"> = {
    disableInteractive: true,
    enterDelay: 1000,
    enterNextDelay: 1000,
}
