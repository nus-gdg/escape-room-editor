import React from "react";
import {TextFieldProps} from "@mui/material";

export const defaultTextFieldProps: TextFieldProps = {
    className: "nodrag",
    multiline: true,
    variant: "filled",
    InputLabelProps: {shrink: true},
    sx: {width: "100%"},
}
