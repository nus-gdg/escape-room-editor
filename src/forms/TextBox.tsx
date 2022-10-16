import {TextField} from "@mui/material";
import {memo} from "react";

interface TextBoxProps {
    id?: string,
    label?: string,
    value?: string,
    onChange?: (event: object) => void,
}

const TextBox = (
    {
        id = "",
        label = undefined,
        value = undefined,
        onChange = undefined,
    }: TextBoxProps) => {
    return (
        <TextField
            id={id}
            label={label}
            value={value}
            onChange={onChange}
            className="nodrag"
            multiline
            variant="filled"
            InputLabelProps={{shrink: true}}
            sx={{width: "100%"}}
        />
    )
}

export default memo(TextBox);
