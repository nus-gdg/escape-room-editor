import React, {memo, ReactElement} from "react";
import MuiIconButton from "@mui/material/IconButton";
import {withNoDrag} from "./utils";

export interface IconButtonProps {
    className?: string,
    title?: string,
    icon: ReactElement,
    onClick?: () => void,
}

const IconButton = (
    {
        className,
        title,
        icon,
        onClick,
    }: IconButtonProps) => {
    return (
        <MuiIconButton className={withNoDrag(className)} title={title} onClick={onClick}>
            {icon}
        </MuiIconButton>
    );
};

export default memo(IconButton);
