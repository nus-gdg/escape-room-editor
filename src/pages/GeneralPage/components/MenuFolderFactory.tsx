import React from "react";
import {EditorType} from "../../../state/editor/editor";
import FolderPath from "../../../constants/FolderPath";

const components: Record<string, React.FC> = {};
export function registerComponent(type: EditorType, Component: React.FC<any>) {
    if (!!components[type]) {
        console.warn(`MenuFolderFactory: registering new component ${Component.name} for type ${type}`);
    }
    components[type] = Component;
}

export interface MenuFolderProps<T> {
    obj: T,
    depth: number,
    path: FolderPath,
    selectFolder: (path: FolderPath, type: EditorType) => void,
}

interface MenuFolderFactoryProps {
    type: string,
}

const MenuFolderFactory: React.FC<MenuFolderFactoryProps> = ({type, ...props}) => {
    const C = components[type];
    return (
        <C {...props}/>
    );
};

export default React.memo(MenuFolderFactory);
