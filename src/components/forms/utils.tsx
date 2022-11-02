import {TextFieldProps} from "@mui/material";
import React from "react";

export const defaultTextFieldProps: TextFieldProps = {
    className: "nodrag",
    multiline: true,
    variant: "filled",
    InputLabelProps: {shrink: true},
    sx: {width: "100%"},
}
