import React, {memo, ReactElement, useCallback} from "react";
import {
    Button, ButtonBase,
    Checkbox,
    IconButton,
    TableCell,
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

function disableMouseClick(event: React.MouseEvent) {
    event.stopPropagation();
}

interface TableCellButtonProps {
    primary: string,
    secondary?: string,
    onClick?: () => void,
}

export const TableCellButton = memo((
    {
        primary,
        secondary,
        onClick,
    }: TableCellButtonProps) => {
    return (
        <TableCell padding={"none"}>
            <Button onClick={onClick} disableRipple>
                {primary && <Typography>{primary}</Typography>}
                {secondary && <Typography>{secondary}</Typography>}
            </Button>
        </TableCell>
    );
});

interface TableCellCheckboxProps {
    checked?: boolean,
    indeterminate?: boolean,
    onChange?: (checked: boolean) => void,
}

export const TableCellCheckbox = memo((
    {
        checked,
        indeterminate,
        onChange,
    }: TableCellCheckboxProps) => {
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.checked);
    }, [onChange]);
    return (
        <TableCell padding={"none"}>
            <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                onChange={handleChange}
                disableRipple
            />
        </TableCell>
    );
});

interface TableCellIconButtonProps {
    icon: ReactElement,
    onClick?: () => void,
}

export const TableCellIconButton = memo((
    {
        icon,
        onClick,
    }: TableCellIconButtonProps) => {
    return (
        <TableCell padding={"none"}>
            <IconButton onClick={onClick}>
                {icon}
            </IconButton>
        </TableCell>
    );
});

interface TableCellTextProps {
    primary: string,
    secondary?: string,
}

export const TableCellText = memo((
    {
        primary,
        secondary,
    }: TableCellTextProps) => {
    return (
        <TableCell padding={"none"}>
            <ButtonBase>
                <Typography style={{userSelect: "none"}}>{primary}</Typography>
            </ButtonBase>
        </TableCell>
    );
});

interface ListCheckboxProps {
    checked?: boolean,
    indeterminate?: boolean,
    onChange?: (checked: boolean) => void,
}

export const ListCheckbox = memo((
    {
        checked,
        indeterminate,
        onChange,
    }: ListCheckboxProps) => {
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.checked);
    }, [onChange]);
    return (
        <Checkbox
            checked={checked}
            indeterminate={indeterminate}
            onChange={handleChange}
        />
    );
});
