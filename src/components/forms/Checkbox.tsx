import React, {ChangeEvent, memo, useCallback} from "react";
import Tooltip from "@mui/material/Tooltip";
import MuiCheckbox from "@mui/material/Checkbox";
import {withNoDrag} from "./utils";

export interface CheckboxProps {
    className?: string,
    checked?: boolean,
    indeterminate?: boolean,
    tooltip?: string,
    onChange?: (value: boolean) => void,
}

const Checkbox = (
    {
        className,
        checked,
        indeterminate,
        tooltip = "Select",
        onChange,
    }: CheckboxProps) => {
    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.checked);
    }, [onChange]);

    return (
        <Tooltip className={withNoDrag(className)} title={tooltip}>
            <MuiCheckbox
                checked={checked}
                indeterminate={indeterminate}
                onChange={handleChange}
            />
        </Tooltip>
    );
}

export default memo(Checkbox);
