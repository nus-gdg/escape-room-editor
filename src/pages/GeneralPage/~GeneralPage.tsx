import React, {useMemo} from "react";
import {useRoot2} from "../../hooks/useRoot2";
import "./~GeneralPage.css"
import Menu from "./components/Menu";
import RoomEditor from "./components/RoomEditor";
import PassageEditor from "./components/PassageEditor";

export const GeneralPage = () => {
    const ctx = useRoot2();

    function renderTitlebar() {
        return (
            <div className={"titlebar"}>
                <div className={"titlebar-left"}>
                    Escape Room Editor
                </div>
                <button className={"titlebar-right"}>
                    LOAD / SAVE
                </button>
            </div>
        );
    }

    const memoEditor = useMemo(() => {
        switch (ctx.store.editor.type) {
            case `ROOM`:
                return <RoomEditor/>;
            case `PASSAGE`:
                return <PassageEditor/>;
            default:
                return;
        }}, [ctx.store.editor.type]);

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
                <Menu/>
                {memoEditor}
                {renderPreview()}
            </div>
            <div className={"footer"}>
                {renderVersion()}
            </div>
        </div>
    );
};
