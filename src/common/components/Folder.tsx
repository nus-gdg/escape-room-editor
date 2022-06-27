import React, {useCallback} from "react";
import {Symbols} from "../../constants/";
import "./Folder.css";

interface FolderProps {
    className?: string,
    children?: React.ReactNode,
    title?: string,
    depth?: number,
    folderIcon?: string,
    toggleIcon?: string,
    selected?: boolean,
    onSelect?: () => void,
    onToggle?: () => void,
}

const nullFunction = () => {};

const Folder = (
    {
        className = "",
        children,
        depth = 0,
        title = "Title",
        folderIcon = Symbols.circle,
        toggleIcon = Symbols.space,
        selected = false,
        onToggle = nullFunction,
        onSelect = nullFunction,
    }: FolderProps) => {
    // console.log(`Folder: Rendered: ${title}`);
    // const [showContents, setShowContents] = useState(false);
    //
    // const toggleContents = useCallback(() => {
    //     setShowContents(showContents => !showContents);
    // }, []);
    // const {open, toggle} = useToggle();

    const addSpacing = useCallback((node: HTMLButtonElement) => {
        if (!node) {
            return;
        }
        node.style.width = ``;
        node.style.width = `${parseInt(getComputedStyle(node).width) * depth}px`;
    }, [depth]);

    return (
        <div className={`folder ${className}`}>
            <div className={`folder-label ${(selected) ? "selected" : ""}`}>
                <button className={"folder-spacing icon"} ref={addSpacing} onClick={onSelect} onDoubleClick={onToggle}/>
                <button className={"folder-toggle icon"} onClick={onToggle}>
                    {toggleIcon}
                </button>
                <button className={"folder-icon icon"} onClick={onSelect} onDoubleClick={onToggle}>
                    {folderIcon}
                </button>
                <button className={"folder-name"} onClick={onSelect} onDoubleClick={onToggle}>
                    {title}
                </button>
                <button className={"folder-scrollbar-padding"} onClick={onSelect} onDoubleClick={onToggle}/>
            </div>
            <div className={`folder-contents`}>
                {children}
            </div>
        </div>
    );
}

export default React.memo(Folder);
