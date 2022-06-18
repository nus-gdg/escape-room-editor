import React from "react";
import Symbols from "../../constants/Symbols";
import "./ListItem.css";

interface ListItemProps {
    item: string;
    selected?: boolean;
    indicatorIcon?: string,
    removeListItemIcon?: string,
    onSelectListItem?: (option: string) => void;
    onRemoveListItem?: (option: string) => void;
}

const ListItem = (
    {
        item,
        selected = false,
        indicatorIcon = Symbols.rightHalfCircle,
        removeListItemIcon = Symbols.minus,
        onRemoveListItem = () => {},
        onSelectListItem = () => {},
    }: ListItemProps) => {
    console.log(`ListItem: Rendered: ${item}`);
    return (
        <div className={`list-item ${(onRemoveListItem) ? "" : "no-options"} ${(selected) ? "selected" : ""}`}>
            <button className={"list-item-remove"} onClick={() => onRemoveListItem(item)}>
                {removeListItemIcon}
            </button>
            <button className={"list-item-control"} onClick={() => onSelectListItem(item)}>
                <div className={"list-item-indicator"}>
                    {indicatorIcon}
                </div>
                <div className={"list-item-label"} >
                    {`# ${item}`}
                </div>
            </button>
            <div className={"list-item-bg"}/>
        </div>
    )
};

export default React.memo(ListItem);
