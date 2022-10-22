import React, {memo, useCallback, useState} from "react";
import NavHeader from "./NavHeader";
import NavItem from "./NavItem";
import NavMenuToolbar from "./NavMenuToolbar";

const columns = ["Name", "Edit"];

interface NavData {
    name: string,
    value: string,
}

interface NavMenuProps {
    label: string,
    names: string[],
    onCreate?: () => void,
    onRead?: (name: string) => void,
    onUpdate?: (name: string) => void,
    onDelete?: (names: Set<string>) => void,
}

const NavMenu = (
    {
        label = "",
        names = [],
        onCreate,
        onRead,
        onUpdate,
        onDelete,
    }: NavMenuProps) => {
    const [selected, setSelected] = useState(new Set<string>());
    console.log(selected);

    const handleSelectId = useCallback((name: string, checked: boolean) => {
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

    const handleSelectIds = useCallback((checked: boolean) => {
        if (checked) {
            setSelected(new Set(Object.values(names)));
        } else {
            setSelected(new Set());
        }
    }, [names]);

    // const handleClick = useCallback((id: string) => {
    //     onRead?.(id);
    // }, [onCreate]);
    //
    // const handleEdit = useCallback((id: string) => {
    //     onUpdate?.(id);
    // }, [onUpdate]);

    const renderItem = useCallback((name: string) => {
        return (
            <NavItem
                key={name}
                name={name}
                checked={selected.has(name)}
                onCheck={handleSelectId}
            />
        )
    }, [selected]);

    return (
        <section style={{width: "30%", height: "100%"}}>
            {/*<NavMenuToolbar label={"NAVIGATION"} selected={selected}/>*/}
            <NavHeader
                checked={selected.size === names.length}
                indeterminate={selected.size > 0 && selected.size < names.length}
                selected={selected}
                onCheck={handleSelectIds}
            />
            <ul style={{overflowY: "auto", height: "calc(100% - 41px)"}}>
                {names.map(renderItem)}
            </ul>
        </section>
    );
}

export default memo(NavMenu);
