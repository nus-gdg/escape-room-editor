import React, {useMemo} from "react";
import {useRootStore} from "../../hooks"
import Menu from "./components/Menu/Menu";
import RoomEditor from "./components/RoomEditor";
import PassageEditor from "./components/PassageEditor";
import "./~GeneralPage.css"

export const GeneralPage = () => {
    const store = useRootStore();

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
        switch (store.editor.type) {
            case `ROOM`:
                return <RoomEditor/>;
            case `PASSAGE`:
                return <PassageEditor/>;
            default:
                return;
        }}, [store.editor.type]);

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
