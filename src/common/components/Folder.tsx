import React, {useCallback, useState} from "react";
import Symbols from "../../constants/Symbols";
import "./Folder.css";

interface FolderProps {
    className?: string,
    children?: React.ReactNode,
    depth?: number,
    title?: string,
    icon?: string,
    showToggleIcon?: string,
    hideToggleIcon?: string,
    selected?: boolean,
    onSelect?: () => void,
}

const Folder = (
    {
        className = "",
        children,
        depth = 0,
        title = "Title",
        icon = Symbols.circle,
        showToggleIcon = Symbols.downArrow,
        hideToggleIcon = Symbols.rightArrow,
        selected = false,
        onSelect,
    }: FolderProps) => {
    // console.log(`Folder: Rendered: ${title}`);
    const [showContents, setShowContents] = useState(false);

    const toggleContents = useCallback(() => {
        setShowContents(showContents => !showContents);
    }, []);

    const addSpacing = useCallback((node: HTMLButtonElement) => {
        if (!node) {
            return;
        }
        node.style.width = ``;
        node.style.width = `${parseInt(getComputedStyle(node).width) * depth}px`;
    }, [depth]);

    const handleSelected = useCallback(() => {
        onSelect?.();
    }, [onSelect]);

    return (
        <div className={`folder ${className}`}>
            <div className={`folder-label ${(selected) ? "selected" : ""}`}>
                <button className={"folder-spacing icon"} ref={addSpacing} onClick={handleSelected} onDoubleClick={toggleContents}/>
                <button className={"folder-toggle icon"} onClick={toggleContents}>
                    {(showContents) ? showToggleIcon : hideToggleIcon}
                </button>
                <button className={"folder-icon icon"} onClick={handleSelected} onDoubleClick={toggleContents}>
                    {icon}
                </button>
                <button className={"folder-name"} onClick={handleSelected} onDoubleClick={toggleContents}>
                    {title}
                </button>
                <button className={"folder-scrollbar-padding"} onClick={handleSelected} onDoubleClick={toggleContents}/>
            </div>
            <div className={`folder-contents ${(showContents) ? "" : "hide"}`}>
                {showContents && children}
            </div>
        </div>
    );
}

export default React.memo(Folder);
