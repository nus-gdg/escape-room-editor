import React, {memo, useCallback, useEffect, useState} from "react";
import {Checkbox, Divider, IconButton, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import NavMenuHeader from "./NavMenuHeader";
import NavMenuItem from "./NavMenuItem";
import RoomDialog from "./RoomDialog";
import NavMenuDivider from "./NavMenuDivider";
import {RoomData} from "../rooms";

interface RoomsMenuProps {
    // label: string,
    // items: string[],
    // onAddRequest?: () => void,
    // onEditRequest?: () => void,
    // onAdd?: () => void,
    // onEdit?: () => void,
    // onDelete?: () => void,
    // // onClickItem?: (id: string) => void,

    rooms: RoomData[],
}

const RoomsMenu = (
    {

    }: RoomsMenuProps) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selected, setSelected] = useState<Set<string>>(new Set());

    useEffect(() => {
        console.log("RENDERED");
        console.log(selected);
    });

    const handleClick = useCallback((id: string) => {
        setOpenDialog(true);
    }, []);

    const handleSelect = useCallback((id: string) => {
        setSelected(set => new Set(set).add(id));
    }, []);

    function handleSelectAll(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        console.log("select");
    }

    const closeEditDialog = useCallback((id?: string) => {
        setOpenDialog(false);
        if (id) {

        }
    }, []);

    const handleAddRequest = useCallback(() => {
        setOpenDialog(true);
    }, []);

    function handleEditRequest(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        onEditRequest?.();
    }

    function handleAdd(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        onAdd?.();
    }

    function handleEdit(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        onEdit?.();
    }

    function handleDelete(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        onDelete?.();
    }

    function renderItem(item: string) {
        return (
            <NavMenuItem
                key={item}
                id={item}
                onClick={handleClick}
                onSelect={handleSelect}
            />
        );
    }

    return (
        <List dense>
            {/*{renderHeader()}*/}
            <NavMenuHeader label={label} onAddRequest={handleAddRequest}/>
            <NavMenuDivider/>
            {items.map(renderItem)}
            <RoomDialog open={openDialog} onClose={closeEditDialog}/>
        </List>
    )
}

export default memo(RoomsMenu);
