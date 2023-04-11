import {ChangeEvent, memo, useCallback} from "react";
import MuiCheckbox from "@mui/material/Checkbox";
import {withNoDrag} from "./utils";

export interface CheckboxProps {
    className?: string,
    title?: string,
    checked?: boolean,
    indeterminate?: boolean,
    onChange?: (value: boolean) => void,
}

const Checkbox = (
    {
        className,
        title = "Select",
        checked,
        indeterminate,
        onChange,
    }: CheckboxProps) => {
    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.checked);
    }, [onChange]);

    return (
        <MuiCheckbox
            className={withNoDrag(className)}
            title={title}
            checked={checked}
            indeterminate={indeterminate}
            onChange={handleChange}
        />
    );
}

export default memo(Checkbox);
