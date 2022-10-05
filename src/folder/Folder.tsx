import {ReactNode, useState} from "react";

interface FolderProps {
    renderContents: () => ReactNode,
    renderChildren?: () => ReactNode,
    onClick?: () => void,
    onExpand?: (expanded: boolean) => void,
}

export const Folder = (
    {
        renderContents,
        renderChildren,
        onClick = () => {},
        onExpand = () => {},
    }: FolderProps) => {

    const [expanded, setExpanded] = useState(false);

    function toggleExpand() {
        onExpand(!expanded);
        setExpanded(expanded => !expanded);
    }

    return (
        <div>
            <div style={{flexDirection: "row"}}>
                <button onClick={toggleExpand}>~</button>
                <button onClick={onClick}>
                    {renderContents()}
                </button>
            </div>
            {expanded && renderChildren && renderChildren()}
        </div>
    )
}
