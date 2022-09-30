import React, {Dispatch, useCallback, useMemo} from "react";
import {get, isEqual} from "lodash";
import {CategoryFolder, FlagFolder, ItemFolder, OptionFolder, PassageFolder, RoomFolder} from "./Folders";
import OptionsBar from "../OptionsBar";
import {FolderPath, Symbols, createUuid} from "../../../../constants";
import {useRootDispatch, useRootStore} from "../../../../hooks"
import {Entity, EntityId, Flag, Item, Passage, Room, TextOption} from "../../../../state/data/data";
import {EditorType} from "../../../../state/editor/editor";
import {addEntity, addPassage, addRoom} from "../../../../state/data/dataActions";
import {openEditor, openFolder} from "../../../../state/editor/editorActions";
import "./Menu.css";
import CategoryButtons from "./Buttons/CategoryButtons";
import Store from "../../../../state/store";
import Action from "../../../../state/~actions";
import RoomButtons from "./Buttons/RoomButtons";

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

const buttons: Record<EditorType, JSX.Element | undefined> = {
    NONE: undefined,
    SETTINGS: undefined,
    CATEGORY: undefined,
    ROOM: <RoomButtons/>,
    ITEM: undefined,
    FLAG: undefined,
    OPTION: undefined,
    PASSAGE: undefined,
}

const categories = {
    rooms: {
        path: new FolderPath([`data`, `rooms`]),
        // buttons: (dispatch: Dispatch<Action<Store>>) => <CategoryButtons onAddEntity={addRoom}/>
    },
    inventory: {
        path: new FolderPath([`data`, `inventory`])
    },
    flags: {
        path: new FolderPath([`data`, `flags`])
    },
    globalTextOptions: {
        path: new FolderPath([`data`, `globalTextOptions`])
    },
    default: {
        path: new FolderPath(),
    },
}
type CategoryName = keyof(typeof categories);

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

    const renderButtons = () => {
        if (store.editor.type === "CATEGORY") {
            return undefined;
            // return categories[store.editor.path.last() as CategoryName ?? "default"];
        } else {
            const index = store.editor.path.index();
            if (isNaN(index)) {

            } else {

            }
            return buttons[store.editor.type];
        }
    }

    // function addEntityAction<T extends Entity>(type: EditorType, path: FolderPath, objects: T[], createEntity: () => T) {
    //     dispatch(addEntity(path, objects, createEntity)
    //         .then(openFolder(path.open(objects.length + 1)))
    //         .then(openEditor(type)));
    // }
    //
    // const addRoom = useCallback(() =>
    //     addEntityAction(
    //         `ROOM`,
    //         categories.rooms.path,
    //         store.data.rooms,
    //         () => new Room(createUuid())),
    //     []);
    //
    // const addItem = addEntityAction(
    //     `ROOM`,
    //     categories.inventory.path,
    //     store.data.inventory,
    //     () => new Item(createUuid()));
    //
    // const addFlag = addEntityAction(
    //     `ROOM`,
    //     categories.flags.path,
    //     store.data.flags,
    //     () => new Flag(createUuid()));
    //
    // const addGlobalTextOption = addEntityAction(
    //     `ROOM`,
    //     categories.globalTextOptions.path,
    //     store.data.globalTextOptions,
    //     () => new TextOption(createUuid()));

    return (
        <div className={`menu ${className}`}>
            <OptionsBar title={"Menu"} >
                {/*{renderButtons()}*/}
                {/*<button className={`menu-up`}>{Symbols.upArrow2}</button>*/}
                {/*<button className={`menu-down`}>{Symbols.downArrow2}</button>*/}
                {/*<button className={`menu-remove`}>{Symbols.minus}</button>*/}
                {/*<button className={`menu-add`} onClick={handleAdd}>{Symbols.plus}</button>*/}
            </OptionsBar>
            <div className={`menu-contents`}>
                <div className={`menu-folders`}>
                    <CategoryFolder
                        type={`ROOM`}
                        title={`ROOMS`}
                        path={categories.rooms.path}
                        objects={store.data.rooms}
                        subfolders={folders}
                        selectFolder={selectFolder}
                    />
                    <CategoryFolder
                        type={`ITEM`}
                        title={`ITEMS`}
                        path={categories.inventory.path}
                        objects={store.data.inventory}
                        subfolders={folders}
                        selectFolder={selectFolder}
                    />
                    <CategoryFolder
                        type={`FLAG`}
                        title={`FLAGS`}
                        path={categories.flags.path}
                        objects={store.data.flags}
                        subfolders={folders}
                        selectFolder={selectFolder}
                    />
                    <CategoryFolder
                        type={`OPTION`}
                        title={`GLOBALS`}
                        path={categories.globalTextOptions.path}
                        objects={store.data.globalTextOptions}
                        subfolders={folders}
                        selectFolder={selectFolder}
                    />
                    <div className={"menu-contents-padding"}/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Menu, isEqual);
