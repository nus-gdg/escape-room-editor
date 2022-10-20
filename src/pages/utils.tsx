import React, {memo, ReactElement, useCallback, useState} from "react";
import {Checkbox, IconButton} from "@mui/material";

export interface DialogState<T> {
    type: "add" | "edit" | "delete",
    data?: T,
}

interface NavMenuButtonProps {
    icon: ReactElement,
    onClick?: () => void,
}

const NavMenuButton = memo(({icon, onClick}: NavMenuButtonProps) => {
    function handleClick(event: React.MouseEvent) {
        event.stopPropagation();
        onClick?.();
    }
    return (
        <IconButton onClick={handleClick}>
            {icon}
        </IconButton>
    );
});

interface NavMenuCheckboxProps {
    onChange?: (value: boolean) => void,
}

const NavMenuCheckbox = memo(({onChange}: NavMenuCheckboxProps) => {
    function handleClick(event: React.MouseEvent) {
        event.stopPropagation();
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.stopPropagation();
        onChange?.(event.target.checked);
    }
    return (
        <Checkbox onClick={handleClick} onChange={handleChange} disableRipple/>
    );
});

export { NavMenuButton, NavMenuCheckbox, };
