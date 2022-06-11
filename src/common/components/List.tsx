import React from "react";
import Symbols from "../../constants/Symbols";
import ListItem from "./ListItem";
import ListTitle from "./ListTitle";
import "./List.css";

interface ListProps {
    title: string,
    items: string[],
    open?: boolean,
    className?: string,
    isSelected?: (item: string) => boolean,
    onToggle?: () => void,
    onAddListItem?: () => void,
    onRemoveListItem?: (option: string) => void,
    onSelectListItem?: (option: string) => void,
}

const List = (
    {
        title = "LIST",
        items = [],
        open = true,
        className = "",
        isSelected = () => false,
        onToggle,
        onAddListItem,
        onRemoveListItem,
        onSelectListItem,
    }: ListProps) => {
    console.log(`List: Rendered: ${title}`);
    return (
        <div className={`list ${className} ${(open) ? "" : "hide"}`}>
            <ListTitle
                title={title}
                toggleIcon={open ? Symbols.downArrow : Symbols.rightArrow}
                addListItemIcon={Symbols.plus}
                onToggle={onToggle}
                onAddListItem={onAddListItem} />
            {items.map(item => {
                return (
                    <ListItem
                        key={item}
                        item={item}
                        selected={isSelected(item)}
                        onRemoveListItem={onRemoveListItem}
                        onSelectListItem={onSelectListItem} />
                )})}
        </div>
    );
}

export default React.memo(List);
