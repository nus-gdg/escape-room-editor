import React, {memo, useCallback} from "react";
import {addIcon, deleteIcon, SimpleCheckbox, SimpleIconButton, SimpleText} from "./utils";
import "./NavHeader.css";

const hasSelection = (selected?: Set<string>) => {
    return selected && selected.size > 0;
}

interface NavHeaderProps {
    label: string,
    checked?: boolean,
    indeterminate?: boolean,
    selected?: Set<string>,
    onCheck?: (checked: boolean) => void,
    onAdd?: () => void,
    onDelete?: (names: Set<string>) => void,
}

const NavHeader = (
    {
        label,
        checked,
        indeterminate,
        selected,
        onCheck,
        onAdd,
        onDelete,
    }: NavHeaderProps) => {
    const handleCheck = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onCheck?.(event.target.checked);
    }, [onCheck]);

    const handleDelete = useCallback(() => {
        if (selected) {
            onDelete?.(selected);
        }
    }, [onDelete, selected]);

    const renderButtons = () => {
        if (hasSelection(selected)) {
            return (
                <>
                    <SimpleText className={"NavHeader-text NavHeader-deleteText"} value={`(${selected?.size})`}/>
                    <SimpleIconButton
                        className={"NavHeader-delete"}
                        icon={deleteIcon}
                        onClick={handleDelete}
                        tooltip={"Delete"}
                    />
                </>
            );
        } else {
            return (
                <SimpleIconButton
                    className={"NavHeader-add"}
                    icon={addIcon}
                    onClick={onAdd}
                    tooltip={"Create"}
                />
            )
        }
    }

    return (
        <div className={"NavHeader-root" + (hasSelection(selected) ? " delete" : " add")}>
            <SimpleCheckbox
                className={"NavHeader-checkbox"}
                checked={checked}
                indeterminate={indeterminate}
                onChange={handleCheck}
                tooltip={"Select all"}
            />
            <SimpleText className={"NavHeader-label"} value={label}/>
            {renderButtons()}
        </div>
    );
}

export default memo(NavHeader);
