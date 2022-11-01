import {TextField} from "@mui/material";
import React, {memo} from "react";

interface TextBoxProps {
    id?: string,
    label?: string,
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const TextBox = (
    {
        id = "",
        label = "",
        value,
        onChange,
    }: TextBoxProps) => {
    // const [value, setValue] = useState("");
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
