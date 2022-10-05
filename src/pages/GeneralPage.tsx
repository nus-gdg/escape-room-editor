import React, {ReactNode} from "react";
// import Editor from "../../pages/GeneralPage/components/Editor/Editor";
// import Menu from "../../pages/GeneralPage/components/Menu/Menu";
import {useDispatch, useStore} from "../app";
import "./GeneralPage.css"
import {setRoom} from "../rooms/actions";
import {setNavigation} from "../navigation/actions";
import {Folder} from "../folder";
import {Room} from "../rooms";
import {Navigation} from "../navigation";
import {RoomEditor} from "../rooms/RoomEditor";
import {EntityType} from "../entity";

export const GeneralPage = () => {
    const store = useStore();
    const dispatch = useDispatch();

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

    function renderEditor(): ReactNode {
        switch (store.navigation.type) {
            case EntityType.ROOM:
                return <RoomEditor data={store.rooms[store.navigation.id]}/>;
            default:
                return;
        }
    }

    return (
        <div className={"page"}>
            <div className={"header"}>
                {renderTitlebar()}
            </div>
            <div className={"body"}>
                {/*<Menu/>*/}
                {/*<Editor/>*/}
                {renderPreview()}
                <Navigation/>
                {renderEditor()}
                {/*<RoomButton data={store.rooms[0]} onClick={cool(0)}/>*/}
            </div>
            <div className={"footer"}>
                {renderVersion()}
            </div>
        </div>
    );
};
