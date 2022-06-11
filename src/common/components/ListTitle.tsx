import React from "react";
import Symbols from "../../constants/Symbols";
import "./ListTitle.css";

interface ListTitleProps {
    title: string,
    toggleIcon?: string,
    addListItemIcon?: string,
    onToggle?: () => void,
    onAddListItem?: () => void,
}

const ListTitle = (
    {
        title = "Title",
        toggleIcon = Symbols.rightArrow,
        onToggle,
        addListItemIcon = Symbols.plus,
        onAddListItem,
    }: ListTitleProps) => {
    console.log(`ListTitle: Rendered: ${title}`);
    return (
        <div className={`list-title ${(onAddListItem) ? "" : "no-options"}`}>
            <button className={"list-title-add"} onClick={onAddListItem}>
                {addListItemIcon}
            </button>
            <button className={"list-title-control"} onClick={onToggle}>
                <div className={"list-title-control-icon"}>
                    {toggleIcon}
                </div>
                <div className={"list-title-control-label"}>
                    {title}
                </div>
            </button>
        </div>
    );
}

export default React.memo(ListTitle);
