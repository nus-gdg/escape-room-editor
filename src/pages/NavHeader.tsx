import React, {memo, useCallback} from "react";
import {addIcon, deleteIcon, SimpleCheckbox, SimpleIconButton, SimpleText} from "./utils";
import "./NavHeader.css";

interface NavHeaderProps {
    checked?: boolean,
    indeterminate?: boolean,
    selected?: Set<string>,
    onCheck?: (checked: boolean) => void,
    onAdd?: () => void,
    onDelete?: (names: Set<string>) => void,
}

const NavHeader = (
    {
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
        if (selected && selected.size > 0) {
            return (
                <>
                    <SimpleIconButton
                        className={"NavHeader-delete"}
                        icon={deleteIcon}
                        onClick={handleDelete}
                        tooltip={"Delete"}
                    />
                    <SimpleText className={"NavHeader-text"} value={`(${selected.size})`}/>
                </>
            );
        } else {
            return (
                <SimpleIconButton
                    className={"NavHeader-add"}
                    icon={addIcon}
                    onClick={onAdd}
                    tooltip={"Create new"}
                />
            )
        }
    }

    return (
        <div className={"NavHeader-root"}>
            <SimpleCheckbox
                className={"NavHeader-checkbox"}
                checked={checked}
                indeterminate={indeterminate}
                onChange={handleCheck}
                tooltip={"Select"}
            />
            {renderButtons()}
        </div>
    );
}

export default memo(NavHeader);
