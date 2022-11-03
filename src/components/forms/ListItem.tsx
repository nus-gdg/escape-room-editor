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
    onRead?: (name: string) => void,
    onUpdate?: (name: string) => void,
}

const ListItem = (
    {
        name = "",
        value,
        checked,
        onCheck,
        onRead,
        onUpdate,
    }: ListItemProps) => {
    const rippleRef = useRef<TouchRippleActions>(null);

    const handleCheck = useCallback((checked: boolean) => {
        onCheck?.(name, checked);
    }, [onCheck, name]);

    const handleUpdate = useCallback(() => {
        onUpdate?.(name);
    }, [onUpdate, name]);

    const label = useMemo(() => {
        const handleRead = () => {
            onRead?.(name);
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
                onClick={handleRead}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <Typography className={"ListItem-name"}>{name}</Typography>
                {value && <Typography className={"ListItem-value"}>{`: ${value}`}</Typography>}
            </button>
        )
    }, [name, value, onRead]);

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
                onClick={handleUpdate}
                tooltip={"Edit"}
            />
            <TouchRipple ref={rippleRef}/>
        </li>
    );
}

export default memo(ListItem);
