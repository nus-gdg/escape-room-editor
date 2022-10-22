import React, {CSSProperties, memo, ReactElement} from "react";
import {
    Checkbox,
    IconButton,
    Tooltip,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export interface DialogState<T> {
    type: "add" | "edit" | "delete",
    data?: T,
}

export const addIcon = <AddIcon/>
export const deleteIcon = <DeleteIcon/>
export const editIcon = <EditIcon/>

interface SimpleCheckboxProps {
    className?: string,
    checked?: boolean,
    indeterminate?: boolean,
    tooltip?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const SimpleCheckbox = memo((
    {
        className,
        checked,
        indeterminate,
        tooltip,
        onChange,
    }: SimpleCheckboxProps) => {
    return (
        <Tooltip className={className} title={tooltip} disableInteractive>
            <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                onChange={onChange}
            />
        </Tooltip>
    );
});

interface SimpleIconButtonProps {
    className?: string,
    icon: ReactElement,
    tooltip?: string,
    onClick?: () => void,
}

export const SimpleIconButton = memo((
    {
        className,
        icon,
        tooltip,
        onClick,
    }: SimpleIconButtonProps) => {
    return (
        <Tooltip className={className} title={tooltip} disableInteractive>
            <IconButton onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    );
});

interface SimpleTextProps {
    className?: string,
    style?: CSSProperties,
    value: string,
}

export const SimpleText = memo((
    {
        className,
        style,
        value,
    }: SimpleTextProps) => {
    return (
        <Typography className={className} style={style}>{value}</Typography>
    );
});
