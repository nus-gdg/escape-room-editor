import {memo, useCallback, useState} from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import "./List.css";

interface ListProps {
    label: string,
    names: string[],
    onCreate?: () => void,
    onRead?: (name: string) => void,
    onUpdate?: (name: string) => void,
    onDelete?: (names: string[]) => void,
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
    }, [setSelected]);

    const handleSelectAll = useCallback((checked: boolean) => {
        if (checked) {
            setSelected(new Set(Object.values(names)));
        } else {
            setSelected(new Set());
        }
    }, [setSelected, names]);

    const handleCreate = useCallback(() => {
        onCreate?.();
    }, [onCreate]);

    const handleRead = useCallback((name: string) => {
        onRead?.(name);
    }, [onRead]);

    const handleUpdate = useCallback((name: string) => {
        onUpdate?.(name);
    }, [onUpdate]);

    const handleDelete = useCallback(() => {
        onDelete?.(Array.from(selected));
        setSelected(new Set());
    }, [onDelete, selected]);

    const renderItem = useCallback((name: string) => {
        return (
            <ListItem
                key={name}
                name={name}
                checked={selected.has(name)}
                onCheck={handleSelect}
                onRead={handleRead}
                onUpdate={handleUpdate}
            />
        )
    }, [selected, onRead]);

    return (
        <section className={"List-root"}>
            <ListHeader
                label={label}
                checked={selected.size === names.length}
                indeterminate={selected.size > 0 && selected.size < names.length}
                selected={selected.size}
                onCheck={handleSelectAll}
                onCreate={handleCreate}
                onDelete={handleDelete}
            />
            <ul className={"List-items"}>
                {names.map(renderItem)}
            </ul>
        </section>
    );
}

export default memo(List);
