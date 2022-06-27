import React, {useCallback} from "react";
import {get, isEqual} from "lodash";
import {CategoryFolder, FlagFolder, ItemFolder, OptionFolder, PassageFolder, RoomFolder} from "./Folders";
import OptionsBar from "../../../../common/components/OptionsBar";
import {FolderPath, Symbols, createUuid} from "../../../../constants";
import {useRootDispatch, useRootStore} from "../../../../hooks"
import {Passage, Room} from "../../../../state/data/data";
import {EditorType} from "../../../../state/editor/editor";
import {addPassage, addRoom} from "../../../../state/data/dataActions";
import {openEditor, openFolder} from "../../../../state/editor/editorActions";
import "./Menu.css";

const folders: Record<EditorType, React.FC<any> | undefined> = {
    NONE: undefined,
    SETTINGS: undefined,
    CATEGORY: undefined,
    ROOM: RoomFolder,
    ITEM: ItemFolder,
    FLAG: FlagFolder,
    OPTION: OptionFolder,
    PASSAGE: PassageFolder,
}

const categoryFolderPaths = {
    rooms: new FolderPath([`data`, `rooms`]),
    inventory: new FolderPath([`data`, `inventory`]),
    flags: new FolderPath([`data`, `flags`]),
    globalTextOptions: new FolderPath([`data`, `globalTextOptions`]),
}

interface MenuProps {
    className?: string,
}

const Menu = (
    {
        className = "",
    }: MenuProps) => {
    console.log("Menu: Rendered");
    const store = useRootStore();
    const dispatch = useRootDispatch();

    const selectFolder = useCallback((path: FolderPath, type: EditorType) => {
        dispatch(openFolder(path).then(openEditor(type)));
    }, [dispatch])

    // Create Dictionary for menu buttons
    const handleAdd = () => {
        switch (store.editor.type) {
            case "CATEGORY":
                handleAddCategory();
                break;
            case "ROOM":
                dispatch(addPassage(getNewRoomPassagePath(), new Passage(createUuid())));
                break;
            default:
                break;
        }
    }

    const handleAddCategory = () => {
        switch (getCategory()) {
            case "rooms":
                dispatch(addRoom(getNewRoomPath(), new Room(createUuid())));
                break;
            default:
                break;
        }
    }

    function getNewRoomPath() {
        return new FolderPath(store.editor.path.folders.concat(String(store.data.rooms.length)));
    }

    function getNewRoomPassagePath() {
        const room: Room = get(store, store.editor.path.folders);
        return new FolderPath(store.editor.path.folders.concat(`passages`, `${room.passages.length}`));
    }

    function getCategory() {
        return store.editor.path.folders[store.editor.path.folders.length - 1];
    }

    return (
        <div className={`menu ${className}`}>
            <OptionsBar title={"Menu"} >
                <button className={`menu-up`}>{Symbols.upArrow2}</button>
                <button className={`menu-down`}>{Symbols.downArrow2}</button>
                <button className={`menu-remove`}>{Symbols.minus}</button>
                <button className={`menu-add`} onClick={handleAdd}>{Symbols.plus}</button>
            </OptionsBar>
            <div className={`menu-contents`}>
                <div className={`menu-folders`}>
                    <CategoryFolder
                        type={`ROOM`}
                        title={`ROOMS`}
                        objects={store.data.rooms}
                        subfolders={folders}
                        path={categoryFolderPaths.rooms}
                        selectFolder={selectFolder}
                    />
                    <CategoryFolder
                        type={`ITEM`}
                        title={`ITEMS`}
                        objects={store.data.inventory}
                        subfolders={folders}
                        path={categoryFolderPaths.inventory}
                        selectFolder={selectFolder}
                    />
                    <CategoryFolder
                        type={`FLAG`}
                        title={`FLAGS`}
                        objects={store.data.flags}
                        subfolders={folders}
                        path={categoryFolderPaths.inventory}
                        selectFolder={selectFolder}
                    />
                    <CategoryFolder
                        type={`OPTION`}
                        title={`GLOBALS`}
                        objects={store.data.globalTextOptions}
                        subfolders={folders}
                        path={categoryFolderPaths.globalTextOptions}
                        selectFolder={selectFolder}
                    />
                    <div className={"menu-contents-padding"}/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Menu, isEqual);
