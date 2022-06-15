import React, {useCallback, useMemo, useRef} from "react";
import Symbols from "../../constants/Symbols";
import "./ListTitle.css";

interface ListTitleProps {
    title: string,
    depth?: number,
    icon?: string,
    toggleIcon?: string,
    addListItemIcon?: string,
    onToggle?: () => void,
    onAddListItem?: () => void,
}

const ListTitle = (
    {
        title = "Title",
        depth = 0,
        icon = Symbols.circle,
        toggleIcon = Symbols.rightArrow,
        onToggle,
        addListItemIcon = Symbols.plus,
        onAddListItem,
    }: ListTitleProps) => {
    console.log(`ListTitle: Rendered: ${title}`);

    const addSpacing = useCallback((node: HTMLDivElement) => {
        if (!node) {
            return;
        }
        node.style.width = ``;
        node.style.width = `${parseInt(getComputedStyle(node).width) * depth}px`;
    }, []);

    return (
        <div className={`list-title ${(onAddListItem) ? "" : "no-options"}`}>
            <button className={"list-title-add"} onClick={onAddListItem}>
                {addListItemIcon}
            </button>
            <button className={"list-title-control"} onClick={onToggle}>
                <div className={"list-title-control-icon spacing"} ref={addSpacing}/>
                <div className={"list-title-control-icon toggle"}>
                    {toggleIcon}
                </div>
                <div className={"list-title-control-icon type"}>
                    {icon}
                </div>
                <div className={"list-title-control-label"}>
                    {title}
                </div>
            </button>
        </div>
    );
}

export default React.memo(ListTitle);
