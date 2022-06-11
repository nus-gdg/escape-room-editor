import React, {useMemo} from "react";
import {useRoot2} from "../../hooks/useRoot2";
import RoomEditor from "./components/RoomEditor";
import NavigationMenu from "./components/NavigationMenu";
import "./~GeneralPage.css"

export const GeneralPage = () => {
    const ctx = useRoot2();

    const memoShowEditor = useMemo(() => {
        switch (ctx.store.editor.type) {
            case "ROOM":
                return <RoomEditor/>;
            default:
                return;
        }}, [ctx.store.editor.type]);

    return (
        <div className={"page"}>
            <header className={"toolbar"}>
                <div className={"toolbar-label"}>
                    Escape Room Editor
                </div>
                <div className={"toolbar-right"}>
                    LOAD / SAVE
                </div>
            </header>
            <div className={"view"}>
                <NavigationMenu className={"sidemenu"}/>
                <div className={"editor"}>
                    {memoShowEditor}
                </div>
                <NavigationMenu className={"sidemenu"}/>
            </div>
        </div>
    );
};
