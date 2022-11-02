import {ChangeEvent, memo, useCallback, useEffect, useState} from "react";
import {debounce, TextField} from "@mui/material";
import {debounceTime} from "../common";
import {defaultTextFieldProps} from "./utils";

export interface SimpleTextFieldProps {
    label?: string,
    value?: string,
    onChange?: (value: string) => void,
}

const SimpleTextField = (
    {
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

    const handleChangeText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setText(newValue);
        onChangeDebounced(newValue);
    }, [setText, onChangeDebounced]);

    return (
        <TextField
            label={label}
            value={text}
            onChange={handleChangeText}
            {...defaultTextFieldProps}
        />
    )
}

export default memo(SimpleTextField);
