import React, {memo, ReactElement} from "react";
import MuiIconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export interface IconButtonProps {
    className?: string,
    icon: ReactElement,
    tooltip?: string,
    onClick?: () => void,
}

const IconButton = (
    {
        className,
        icon,
        tooltip,
        onClick,
    }: IconButtonProps) => {
    return (
        <Tooltip className={className} title={tooltip}>
            <MuiIconButton onClick={onClick}>
                {icon}
            </MuiIconButton>
        </Tooltip>
    );
};

export default memo(IconButton);
