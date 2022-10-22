import React, {memo, useCallback} from "react";
import {
    Checkbox as MuiCheckbox, CheckboxProps,
    IconButton as MuiIconButton, IconButtonProps,
    ListItem as MuiListItem,
    ListItemText as MuiListItemText,
} from "@mui/material";

export const Checkbox = memo(MuiCheckbox);

export const IconButton = memo((props: IconButtonProps) => <MuiIconButton {...props}/>);

export const ListItem = MuiListItem;
export const ListItemText = memo(MuiListItemText);

function cancelMouseEvent(event: React.MouseEvent) {
    event.stopPropagation();
}

export interface SimpleCheckboxProps extends Omit<CheckboxProps, "onClick" | "onChange"> {
    onChange?: (value: boolean) => void,
}

export const SimpleCheckbox = memo((props: SimpleCheckboxProps) => {
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        props.onChange?.(event.target.checked);
        event.stopPropagation();
    }, [props.onChange]);
    return (
        <Checkbox
            onClick={cancelMouseEvent}
            onChange={handleChange}
            disableRipple
            {...(props as Omit<CheckboxProps, "onClick" | "onChange">)} />
    );
});

