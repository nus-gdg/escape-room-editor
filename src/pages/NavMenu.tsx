import React, {memo, useCallback, useMemo, useState} from "react";
import NavMenuHeader from "./NavMenuHeader";
import NavMenuItem from "./NavMenuItem";
import NavMenuToolbar from "./NavMenuToolbar";
import {Table, TableBody, TableHead} from "@mui/material";
import {TableCellText} from "./utils";
import NavItem from "./NavItem";

const columns = ["Id", "Edit"];

interface NavMenuProps {
    label: string,
    ids: string[],
    onCreate?: () => void,
    onRead?: (id: string) => void,
    onUpdate?: (id: string) => void,
    onDelete?: (ids: string[]) => void,
}

const NavMenu = (
    {
        label = "",
        ids = [],
        onCreate,
        onRead,
        onUpdate,
        onDelete,
    }: NavMenuProps) => {
    const [selected, setSelected] = useState(new Set<string>());
    console.log(selected);

    const handleSelectId = useCallback((id: string, checked: boolean) => {
        setSelected(set => {
            const nextSet = new Set(set);
            if (checked) {
                nextSet.add(id);
            } else {
                nextSet.delete(id);
            }
            return nextSet;
        });
    }, []);

    const handleSelectIds = useCallback((checked: boolean) => {
        if (checked) {
            setSelected(new Set(Object.values(ids)));
        } else {
            setSelected(new Set());
        }
    }, [ids]);

    // const handleClick = useCallback((id: string) => {
    //     onRead?.(id);
    // }, [onCreate]);
    //
    // const handleEdit = useCallback((id: string) => {
    //     onUpdate?.(id);
    // }, [onUpdate]);

    const renderItem = useCallback((id: string) => {
        return (
            <NavMenuItem
                key={id}
                id={id}
                // secondary={"DDASD"}
                checked={selected.has(id)}
                onCheck={handleSelectId}
            />
        )
    }, [selected]);

    return (
        <div>
            <NavItem id={"POP"}/>
            <NavItem id={"MOM"}/>
            <NavItem id={"LOL"}/>
            <NavMenuToolbar label={"NAVIGATION"} selected={selected}/>
            <Table>
                <TableHead>
                    <NavMenuHeader
                        columns={columns}
                        checked={selected.size === ids.length}
                        indeterminate={selected.size > 0 && selected.size < ids.length}
                        onCheck={handleSelectIds}
                    />
                </TableHead>
                <TableBody>
                    {ids.map(renderItem)}
                </TableBody>
                {/*<NavMenuHeader*/}
                {/*    primary={label}*/}
                {/*    options={selected.size === 0 ? addButton : deleteButton}*/}
                {/*    onCheck={handleSelectIds}*/}
                {/*/>*/}
                {/*{ids.map(renderMenuItem)}*/}
            </Table>
        </div>
    );
}

export default memo(NavMenu);
