import {ChangeEvent, memo, useEffect, useState} from "react";
import {TextField} from "@mui/material";
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
    const [text, setText] = useState("");

    useEffect(() => {
        setText(value ?? "");
    }, [setText, value]);

    const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setText(newValue);
        onChange?.(newValue);
    }

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
