import React, {memo, useCallback, useState} from "react";
import NavHeader from "./NavHeader";
import NavItem from "./NavItem";
import "./NavMenu.css";

interface NavData {
    name: string,
    value: string,
}

interface NavMenuProps {
    names: string[],
    onCreate?: () => void,
    onRead?: (name: string) => void,
    onUpdate?: (name: string) => void,
    onDelete?: (names: Set<string>) => void,
}

const NavMenu = (
    {
        names = [],
        onCreate,
        onRead,
        onUpdate,
        onDelete,
    }: NavMenuProps) => {
    const [selected, setSelected] = useState(new Set<string>());
    console.log(selected);

    const handleSelect = useCallback((name: string, checked: boolean) => {
        setSelected(set => {
            const nextSet = new Set(set);
            if (checked) {
                nextSet.add(name);
            } else {
                nextSet.delete(name);
            }
            return nextSet;
        });
    }, []);

    const handleSelectAll = useCallback((checked: boolean) => {
        if (checked) {
            setSelected(new Set(Object.values(names)));
        } else {
            setSelected(new Set());
        }
    }, [names]);

    const renderItem = useCallback((name: string) => {
        return (
            <NavItem
                key={name}
                name={name}
                checked={selected.has(name)}
                onCheck={handleSelect}
                onClick={onRead}
                onEdit={onUpdate}
            />
        )
    }, [selected]);

    return (
        <section className={"NavMenu-root"}>
            <NavHeader
                checked={selected.size === names.length}
                indeterminate={selected.size > 0 && selected.size < names.length}
                selected={selected}
                onCheck={handleSelectAll}
                onAdd={onCreate}
                onDelete={onDelete}
            />
            <ul className={"NavMenu-list"}>
                {names.map(renderItem)}
            </ul>
        </section>
    );
}

export default memo(NavMenu);
