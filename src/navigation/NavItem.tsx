import React, {memo, useCallback, useRef} from "react";
import TouchRipple, {TouchRippleActions} from "@mui/material/ButtonBase/TouchRipple";
import {
    editIcon,
    SimpleCheckbox,
    SimpleIconButton,
    SimpleText,
} from "./utils";
import "./NavItem.css";

interface NavItemProps {
    name: string,
    value?: string,
    checked?: boolean,
    onCheck?: (name: string, checked: boolean) => void,
    onClick?: (name: string) => void,
    onEdit?: (name: string) => void,
}

const NavItem = (
    {
        name = "",
        value,
        checked,
        onCheck,
        onClick,
        onEdit,
    }: NavItemProps) => {
    const rippleRef = useRef<TouchRippleActions>(null);

    const handleCheck = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onCheck?.(name, event.target.checked);
    }, [onCheck]);

    const handleClick = useCallback(() => {
        onClick?.(name);
    }, [onClick]);

    const handleEdit = useCallback(() => {
        onEdit?.(name);
    }, [onEdit]);

    const handleMouseDown = useCallback((event: React.MouseEvent) => {
        rippleRef.current?.start(event)
    }, []);

    const handleMouseUp = useCallback((event: React.MouseEvent) => {
        rippleRef.current?.stop(event)
    }, []);

    return (
        <li className={checked ? "NavItem-root selected" : "NavItem-root"}>
            <SimpleCheckbox
                checked={checked}
                onChange={handleCheck}
                tooltip={"Select"}
            />
            <button
                className={"NavItem-button"}
                onClick={handleClick}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <SimpleText className={"NavItem-text NavItem-name"} value={name}/>
                {value && <SimpleText className={"NavItem-text NavItem-value"} value={value}/>}
            </button>
            <SimpleIconButton
                className={"NavItem-edit"}
                icon={editIcon}
                onClick={handleEdit}
                tooltip={"Edit"}
            />
            <TouchRipple ref={rippleRef}/>
        </li>
    );
}

export default memo(NavItem);
