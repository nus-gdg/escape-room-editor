import React, {memo} from "react";
import Tooltip from "@mui/material/Tooltip";
import MuiCheckbox from "@mui/material/Checkbox";

export interface CheckboxProps {
    className?: string,
    checked?: boolean,
    indeterminate?: boolean,
    tooltip?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Checkbox = (
    {
        className,
        checked,
        indeterminate,
        tooltip = "Select",
        onChange,
    }: CheckboxProps) => {
    return (
        <Tooltip className={className} title={tooltip}>
            <MuiCheckbox
                checked={checked}
                indeterminate={indeterminate}
                onChange={onChange}
            />
        </Tooltip>
    );
}

export default memo(Checkbox);
