import React, {memo, useCallback, useState} from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import "./List.css";

interface ListProps {
    label: string,
    names: string[],
    onCreate?: () => void,
    onRead?: (name: string) => void,
    onUpdate?: (name: string) => void,
    onDelete?: (names: Set<string>) => void,
}

const List = (
    {
        label,
        names = [],
        onCreate,
        onRead,
        onUpdate,
        onDelete,
    }: ListProps) => {
    const [selected, setSelected] = useState(new Set<string>());
    // console.log(selected);

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

    const handleDelete = useCallback(() => {
        onDelete?.(selected);
        setSelected(new Set());
    }, [onDelete, selected]);

    const renderItem = useCallback((name: string) => {
        return (
            <ListItem
                key={name}
                name={name}
                checked={selected.has(name)}
                onCheck={handleSelect}
                onClick={onRead}
                onEdit={onUpdate}
            />
        )
    }, [selected, onRead]);

    return (
        <section className={"ListMenu-root"}>
            <ListHeader
                label={label}
                checked={selected.size === names.length}
                indeterminate={selected.size > 0 && selected.size < names.length}
                selected={selected}
                onCheck={handleSelectAll}
                onAdd={onCreate}
                onDelete={handleDelete}
            />
            <ul className={"ListMenu-list"}>
                {names.map(renderItem)}
            </ul>
        </section>
    );
}

export default memo(List);
