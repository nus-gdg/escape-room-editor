import {ChangeEvent, memo, useEffect, useState} from "react";
import {TextField} from "@mui/material";
import {defaultTextFieldProps} from "./utils";

export interface EmojiFieldProps {
    value?: string,
    onChange?: (value: string) => void,
}

const EmojiField = ({value, onChange}: EmojiFieldProps) => {
    const [emoji, setEmoji] = useState("");

    useEffect(() => {
        setEmoji(value ?? "");
    }, [setEmoji, value]);

    const handleChangeEmoji = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setEmoji(newValue);
        onChange?.(newValue);
    }

    return (
        <TextField
            label={"Emoji"}
            value={emoji}
            onChange={handleChangeEmoji}
            {...defaultTextFieldProps}
        />
    )
}

export default memo(EmojiField);
