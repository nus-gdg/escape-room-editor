import {memo, useMemo} from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Checkbox from "./Checkbox";
import IconButton from "./IconButton";
import "./ListHeader.css";

const addIcon = <AddIcon/>
const deleteIcon = <DeleteIcon/>

export interface ListHeaderProps {
    label: string,
    checked?: boolean,
    indeterminate?: boolean,
    selected?: number,
    onCheck?: (checked: boolean) => void,
    onCreate?: () => void,
    onDelete?: () => void,
}

const ListHeader = (
    {
        label,
        checked,
        indeterminate,
        selected,
        onCheck,
        onCreate,
        onDelete,
    }: ListHeaderProps) => {

    const hasSelection = selected && selected > 0;

    const addAction = (
        <IconButton
            className={"ListHeader-add"}
            icon={addIcon}
            onClick={onCreate}
            tooltip={"Create"}
        />
    );

    const deleteAction = (
        <>
            <Typography className={"ListHeader-deleteText"}>{`(${selected})`}</Typography>
            <IconButton
                className={"ListHeader-delete"}
                icon={deleteIcon}
                onClick={onDelete}
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
                onChange={onCheck}
                tooltip={"Select all"}
            />
            {heading}
            {(hasSelection) ? deleteAction : addAction}
        </div>
    );
}

export default memo(ListHeader);
