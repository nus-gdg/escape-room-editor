import React, {memo, useCallback, useMemo} from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Checkbox from "../forms/Checkbox";
import IconButton from "../forms/IconButton";
import "./ListHeader.css";

const addIcon = <AddIcon/>
const deleteIcon = <DeleteIcon/>

export interface ListHeaderProps {
    label: string,
    checked?: boolean,
    indeterminate?: boolean,
    selected?: Set<string>,
    onCheck?: (checked: boolean) => void,
    onAdd?: () => void,
    onDelete?: (names: Set<string>) => void,
}

const ListHeader = (
    {
        label,
        checked,
        indeterminate,
        selected,
        onCheck,
        onAdd,
        onDelete,
    }: ListHeaderProps) => {
    const handleCheck = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onCheck?.(event.target.checked);
    }, [onCheck]);

    const handleDelete = useCallback(() => {
        if (selected) {
            onDelete?.(selected);
        }
    }, [onDelete, selected]);

    const hasSelection = selected && selected.size > 0;

    const addAction = (
        <IconButton
            className={"ListHeader-add"}
            icon={addIcon}
            onClick={onAdd}
            tooltip={"Create"}
        />
    );

    const deleteAction = (
        <>
            <Typography className={"ListHeader-deleteText"}>{`(${selected?.size})`}</Typography>
            <IconButton
                className={"ListHeader-delete"}
                icon={deleteIcon}
                onClick={handleDelete}
                tooltip={"Delete"}
            />
        </>
    );

    const heading = useMemo(() => {
        return <Typography className={"ListHeader-label"}>{label}</Typography>
    }, [label]);

    return (
        <div className={"ListHeader-root" + (hasSelection? " delete" : " add")}>
            <Checkbox
                className={"ListHeader-checkbox"}
                checked={checked}
                indeterminate={indeterminate}
                onChange={handleCheck}
                tooltip={"Select all"}
            />
            {heading}
            {(hasSelection) ? deleteAction : addAction}
        </div>
    );
}

export default memo(ListHeader);
