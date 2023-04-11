import {ChangeEvent, memo, useCallback, useEffect, useState} from "react";
import MuiTextField from "@mui/material/TextField"
import debounce from "@mui/utils/debounce";
import {debounceTime, withNoDrag} from "./utils";

export interface EmojiFieldProps {
    className?: string,
    label?: string,
    value?: string,
    onChange?: (value: string) => void,
}

const EmojiField = (
    {
        className,
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
        <MuiTextField
            className={withNoDrag(className)}
            label={label}
            value={emoji}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    )
}

export default memo(EmojiField);
