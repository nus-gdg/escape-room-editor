import React, {useMemo} from "react";
import {useRoot2} from "../../hooks/useRoot2";
import "./~GeneralPage.css"
import {EditorPath, EditorType} from "../../state/editor/editor";
import Menu from "./components/Menu";

export const GeneralPage = () => {
    const ctx = useRoot2();

    // const memoShowEditor = useMemo(() => {
    //     switch (ctx.store.editor.type) {
    //         case "ROOM":
    //             return <RoomEditor/>;
    //         default:
    //             return;
    //     }}, [ctx.store.editor.path.current()]);

    // const createMenus = () => {
    //     const folders = ctx.store.editor.path.folders;
    //     if (folders.length === 0) {
    //         return <CategoryMenu/>;
    //     }
    //     let path = new EditorPath();
    //     let menus: JSX.Element[] = [];
    //     for (const folder of folders) {
    //         path = path.open(folder);
    //         menus
    //         switch (folder.type) {
    //             case "ROOM":
    //             case "ITEM":
    //                 menus.push(<CategoryMenu path={path}/>);
    //                 break;
    //             case "PASSAGE":
    //                 // menus.push(<PassagesMenu path={path}/>);
    //                 break;
    //             case "TEXT_OPTION":
    //             case "REACTION_OPTION":
    //                 // menus.push(<OptionsMenu path={path}/>);
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }
    //     return menus;
    // }

    function renderTitlebar() {
        return (
            <div className={"titlebar"}>
                <div className={"titlebar-left"}>
                    Escape Room Editor
                </div>
                <div className={"titlebar-right"}>
                    LOAD / SAVE
                </div>
            </div>
        );
    }

    function renderMenu() {
        return (
            <div className={"menu"}/>
        );
    }

    function renderEditor() {
        return (
            <div className={"editor"}/>
        );
    }

    function renderPreview() {
        return (
            <div className={"preview"}/>
        );
    }

    function renderVersion() {
        return (
            <div className={"version"}/>
        );
    }

    return (
        <div className={"page"}>
            <div className={"header"}>
                {renderTitlebar()}
            </div>
            <div className={"body"}>
                <Menu data={ctx.store.data}/>
                {renderEditor()}
                {renderPreview()}
            </div>
            <div className={"footer"}>
                {renderVersion()}
            </div>
        </div>
    );
};
