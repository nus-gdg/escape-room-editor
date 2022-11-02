import {ChangeEvent, memo, useCallback, useEffect, useState} from "react";
import {debounce, TextField} from "@mui/material";
import {debounceTime} from "../common";
import {defaultTextFieldProps} from "./utils";

export interface EmojiFieldProps {
    label?: string,
    value?: string,
    onChange?: (value: string) => void,
}

const EmojiField = (
    {
        label = "Emoji",
        value,
        onChange
    }: EmojiFieldProps) => {
    const [emoji, setEmoji] = useState(value ?? "");

    useEffect(() => {
        if (value) {
            setEmoji(value);
        }
    }, [setEmoji, value]);

    const onChangeDebounced = useCallback(debounce((newValue: string) => {
        onChange?.(newValue);
    }, debounceTime), [onChange]);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setEmoji(newValue);
        onChangeDebounced(newValue);
    }, [setEmoji, onChangeDebounced]);

    const handleBlur = useCallback(() => {
        onChange?.(emoji);
        onChangeDebounced.clear();
    }, [emoji, onChange, onChangeDebounced]);

    return (
        <TextField
            label={label}
            value={emoji}
            onChange={handleChange}
            onBlur={handleBlur}
            {...defaultTextFieldProps}
        />
    )
}

export default memo(EmojiField);
