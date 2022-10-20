import React, {memo, useCallback, useState} from "react";
import NavMenuDivider from "./NavMenuDivider";
import NavMenuHeader from "./NavMenuHeader";
import NavMenuItem from "./NavMenuItem";
import NavMenuList from "./NavMenuList";

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
            setSelected(new Set(Object.keys(ids)));
        } else {
            setSelected(new Set());
        }
    }, [ids]);

    const handleAdd = useCallback(() => {
        onCreate?.();
    }, [onCreate]);

    const handleClick = useCallback((id: string) => {
        onRead?.(id);
    }, [onCreate]);

    const handleEdit = useCallback((id: string) => {
        onUpdate?.(id);
    }, [onUpdate]);

    const handleDelete = useCallback(() => {
        onDelete?.(Array.from(selected));
    }, [onDelete, selected]);

    const renderMenuItem = useCallback((id: string) => {
        return (
            <NavMenuItem
                key={id}
                id={id}
                onCheck={handleSelectId}
                onClick={handleClick}
                onEditAction={handleEdit}
            />
        )
    }, [handleSelectId, handleEdit]);

    return (
        <NavMenuList>
            <NavMenuHeader
                label={label}
                variant={selected.size === 0 ? "add" : "delete"}
                onCheck={handleSelectIds}
                onAddAction={handleAdd}
                onDeleteAction={handleDelete}
            />
            <NavMenuDivider />
            {ids.map(renderMenuItem)}
        </NavMenuList>
    );
}

export default memo(NavMenu);
