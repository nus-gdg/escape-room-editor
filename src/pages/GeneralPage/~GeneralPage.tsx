import React from "react";
import Editor from "./components/Editor/Editor";
import Menu from "./components/Menu/Menu";
import "./~GeneralPage.css"

export const GeneralPage = () => {
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
                <Editor/>
                {renderPreview()}
            </div>
            <div className={"footer"}>
                {renderVersion()}
            </div>
        </div>
    );
};
