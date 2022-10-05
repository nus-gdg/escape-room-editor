import React from "react";
// import Editor from "../../pages/GeneralPage/components/Editor/Editor";
// import Menu from "../../pages/GeneralPage/components/Menu/Menu";
import {useDispatch, useStore} from "../app";
import "./GeneralPage.css"
import {setRoom} from "../rooms/actions";
import {setNavigation} from "../navigation/actions";
import {Folder} from "../folder";
import {Room} from "../rooms";
import {Navigation} from "../navigation";

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

    // function cool(index: number) {
    //     return () => {
    //         console.log(index);
    //         dispatch(setNavigation());
    //     }
    // }

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
                {/*<RoomButton data={store.rooms[0]} onClick={cool(0)}/>*/}
            </div>
            <div className={"footer"}>
                {renderVersion()}
            </div>
        </div>
    );
};
