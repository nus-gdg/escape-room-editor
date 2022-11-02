import {ChangeEvent, memo, useCallback, useEffect, useState} from "react";
import MuiTextField from "@mui/material/TextField"
import debounce from "@mui/utils/debounce";
import {debounceTime, withNoDrag} from "./utils";

export interface SimpleTextFieldProps {
    className?: string,
    label?: string,
    value?: string,
    onChange?: (value: string) => void,
}

const TextField = (
    {
        className,
        label = "Text",
        value,
        onChange
    }: SimpleTextFieldProps) => {
    const [text, setText] = useState(value ?? "");

    useEffect(() => {
        if (value) {
            setText(value);
        }
    }, [setText, value]);

    const onChangeDebounced = useCallback(debounce((newValue: string) => {
        onChange?.(newValue);
    }, debounceTime), [onChange]);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setText(newValue);
        onChangeDebounced(newValue);
    }, [setText]);

    const handleBlur = useCallback(() => {
        onChange?.(text);
        onChangeDebounced.clear();
    }, [text, onChange, onChangeDebounced]);

    return (
        <MuiTextField
            className={withNoDrag(className)}
            label={label}
            value={text}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    )
}

export default memo(TextField);
