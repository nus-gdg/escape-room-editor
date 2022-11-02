import React, {memo, useCallback, useMemo, useRef} from "react";
import EditIcon from "@mui/icons-material/Edit";
import TouchRipple, {TouchRippleActions} from "@mui/material/ButtonBase/TouchRipple";
import Typography from "@mui/material/Typography";
import Checkbox from "./Checkbox";
import IconButton from "./IconButton";
import "./ListItem.css";

const editIcon = <EditIcon/>

export interface ListItemProps {
    name: string,
    value?: string,
    checked?: boolean,
    onCheck?: (name: string, checked: boolean) => void,
    onClick?: (name: string) => void,
    onEdit?: (name: string) => void,
}

const ListItem = (
    {
        name = "",
        value,
        checked,
        onCheck,
        onClick,
        onEdit,
    }: ListItemProps) => {
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
                className={"ListItem-button"}
                onClick={handleClick}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <Typography className={"ListItem-name"}>{name}</Typography>
                {value && <Typography className={"ListItem-value"}>{`: ${value}`}</Typography>}
            </button>
        )
    }, [name, value, onClick]);

    return (
        <li className={checked ? "ListItem-root selected" : "ListItem-root"}>
            <Checkbox
                className={"ListItem-checkbox"}
                checked={checked}
                onChange={handleCheck}
            />
            {label}
            <IconButton
                className={"ListItem-edit"}
                icon={editIcon}
                onClick={handleEdit}
                tooltip={"Edit"}
            />
            <TouchRipple ref={rippleRef}/>
        </li>
    );
}

export default memo(ListItem);
