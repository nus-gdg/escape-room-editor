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
import {RoomEditor} from "../editor/RoomEditor";
import {Entity, EntityType} from "../entity";
import {ItemEditor} from "../editor/ItemEditor";

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

    function selectPassages(entity: Entity) {
        return Object.values(store.passages).filter(passage => passage.parent === entity);
    }

    function renderEditor(): ReactNode {
        switch (store.navigation.type) {
            case EntityType.ROOM:
                return <RoomEditor data={store.rooms[store.navigation.id]}/>;
            case EntityType.ITEM:
                return <ItemEditor data={store.items[store.navigation.id]} passages={selectPassages(store.navigation)}/>;
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
                {/*{renderPreview()}*/}
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
