import React, {memo, useCallback, useMemo, useRef} from "react";
import EditIcon from "@mui/icons-material/Edit";
import TouchRipple, {TouchRippleActions} from "@mui/material/ButtonBase/TouchRipple";
import Typography from "@mui/material/Typography";
import Checkbox from "../forms/Checkbox";
import IconButton from "../forms/IconButton";
import "./NavItem.css";

const editIcon = <EditIcon/>

export interface NavItemProps {
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
    }, [onCheck, name]);

    const handleEdit = useCallback(() => {
        onEdit?.(name);
    }, [onEdit, name]);

    const label = useMemo(() => {
        const handleClick = () => {
            onClick?.(name);
        };

        const handleMouseDown = (event: React.MouseEvent) => {
            rippleRef.current?.start(event)
        };

        const handleMouseUp = (event: React.MouseEvent) => {
            rippleRef.current?.stop(event)
        };

        return (
            <button
                className={"NavItem-button"}
                onClick={handleClick}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <Typography className={"NavItem-name"}>{name}</Typography>
                {value && <Typography className={"NavItem-value"}>{`: ${value}`}</Typography>}
            </button>
        )
    }, [name, value, onClick]);

    return (
        <li className={checked ? "NavItem-root selected" : "NavItem-root"}>
            <Checkbox
                className={"NavItem-checkbox"}
                checked={checked}
                onChange={handleCheck}
            />
            {label}
            <IconButton
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
