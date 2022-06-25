import React, {useCallback} from "react";
import Folder from "../../../common/components/Folder";
import OptionsBar from "../../../common/components/OptionsBar";
import Symbols from "../../../constants/Symbols";
import FolderPath from "../../../constants/FolderPath";
import {useRoot2} from "../../../hooks/useRoot2";
import {Flag, Item, Passage, ReactionOption, Room, TextOption} from "../../../state/data/data";
import {EditorType} from "../../../state/editor/editor";
import {openEditor, openFolder} from "../../../state/editor/editorActions";
import "./Menu.css";
import {addPassage, addRoom} from "../../../state/data/dataActions";
import {createUuid} from "../../../constants/uuids";
import { get } from "lodash";
import CategoryFolder from "./CategoryFolder";
interface MenuProps {
    className?: string,
}

const Menu = (
    {
        className = "",
    }: MenuProps) => {
    console.log("Menu: Rendered");
    const ctx = useRoot2();

    const selectFolder = useCallback((path: FolderPath, type: EditorType) => {
        ctx.dispatch(openFolder(path).then(openEditor(type)));
    }, [ctx.dispatch])

    const handleAdd = () => {
        switch (ctx.store.editor.type) {
            case "CATEGORY":
                handleAddCategory();
                break;
            case "ROOM":
                ctx.dispatch(addPassage(getNewRoomPassagePath(), new Passage(createUuid())));
                break;
            default:
                break;
        }
    }

    const handleAddCategory = () => {
        switch (getCategory()) {
            case "rooms":
                ctx.dispatch(addRoom(getNewRoomPath(), new Room(createUuid())));
                break;
            default:
                break;
        }
    }

    function getNewRoomPath() {
        return new FolderPath(ctx.store.editor.path.folders.concat(String(ctx.store.data.rooms.length)));
    }

    function getNewRoomPassagePath() {
        const room: Room = get(ctx.store, ctx.store.editor.path.folders);
        return new FolderPath(ctx.store.editor.path.folders.concat(`passages`, `${room.passages.length}`));
    }

    function getCategory() {
        return ctx.store.editor.path.folders[ctx.store.editor.path.folders.length - 1];
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
                    {/*{CategoryFolder({*/}
                    {/*    id: `rooms`,*/}
                    {/*    title: "ROOMS",*/}
                    {/*    objects: ctx.store.data.rooms,*/}
                    {/*    path: new FolderPath([`data`, `rooms`]),*/}
                    {/*    dispatch: selectFolder,*/}
                    {/*    createSubfolder: RoomFolder,})}*/}
                    <CategoryFolder
                        type={`ITEM`}
                        title={`ITEMS`}
                        objects={ctx.store.data.inventory}
                        path={new FolderPath([`data`, `inventory`])}
                        selectFolder={selectFolder} />
                        {/*id={`rooms`}*/}
                        {/*title={"ROOMS"}*/}
                        {/*objects={ctx.store.data.rooms}*/}
                        {/*path={new FolderPath([`data`, `rooms`])}*/}
                        {/*dispatch={selectFolder}*/}
                        {/*createSubfolder={RoomFolder}/>*/}
                    {/*{CategoryFolder({*/}
                    {/*    id: `inventory`,*/}
                    {/*    title: "ITEMS",*/}
                    {/*    objects: ctx.store.data.inventory,*/}
                    {/*    path: new FolderPath([`data`, `inventory`]),*/}
                    {/*    dispatch: selectFolder,*/}
                    {/*    createSubfolder: ItemFolder,})}*/}
                    {/*{CategoryFolder({*/}
                    {/*    id: `flags`,*/}
                    {/*    title: "FLAG",*/}
                    {/*    objects: ctx.store.data.flags,*/}
                    {/*    path: new FolderPath([`data`, `flags`]),*/}
                    {/*    dispatch: selectFolder,*/}
                    {/*    createSubfolder: FlagFolder,})}*/}
                    {/*{CategoryFolder({*/}
                    {/*    id: `globalTextOptions`,*/}
                    {/*    title: "GLOBALS",*/}
                    {/*    objects: ctx.store.data.globalTextOptions,*/}
                    {/*    path: new FolderPath([`data`, `globalTextOptions`]),*/}
                    {/*    dispatch: selectFolder,*/}
                    {/*    createSubfolder: TextOptionFolder,})}*/}
                    <div className={"menu-contents-padding"}/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Menu);

interface CategoryFolderProps<T extends {id: string}> {
    id: string,
    title?: string,
    icon?: string,
    objects: T[],
    path?: FolderPath,
    dispatch?: (path: FolderPath, type: EditorType) => void,
    createSubfolder: (props: SubfolderProps<T>) => React.ReactNode,
}

// function CategoryFolder<T extends {id: string}>(
//     {
//         id,
//         title = "TITLE",
//         icon = Symbols.circle,
//         objects,
//         path = new FolderPath(),
//         dispatch,
//         createSubfolder,
//     }: CategoryFolderProps<T>) {
//     const hasItems = objects && objects.length > 0;
//     const selectFolder = useCallback(() => {
//         if (!dispatch) {
//             return;
//         }
//         dispatch(path, `CATEGORY`);
//     }, [dispatch, path]);
//     return (
//         <Folder
//             className={id}
//             key={id}
//             title={title}
//             icon={icon}
//             onSelect={selectFolder}>
//             {hasItems && objects.map((obj, index) => createSubfolder({obj: obj, depth: 1, path: path?.open(index), dispatch: dispatch}))}
//         </Folder>
//     );
// }

interface SubfolderProps<T extends {id: string}> {
    obj: T,
    depth?: number,
    path?: FolderPath,
    dispatch?: (path: FolderPath, type: EditorType) => void,
}

function ItemFolder({obj, depth = 0, path = new FolderPath(), dispatch,}: SubfolderProps<Item>) {
    const selectFolder = useCallback(() => {
        if (!dispatch) {
            return;
        }
        dispatch(path, `ITEM`);
    }, [dispatch, path]);
    return (
        <Folder className={`item`} key={obj.id} depth={depth} title={obj.id} onSelect={selectFolder}>
            {PassageFolder({obj: obj.passage, depth: depth + 1, path: path?.open(`passage`), dispatch: dispatch})}
        </Folder>
    );
}

function FlagFolder({obj, depth = 0, path = new FolderPath(), dispatch,}: SubfolderProps<Flag>) {
    const selectFolder = useCallback(() => {
        if (!dispatch) {
            return;
        }
        dispatch(path, `FLAG`);
    }, [dispatch, path]);
    return (
        <Folder className={`flag`} key={obj.id} depth={depth} title={obj.id} onSelect={selectFolder}/>
    );
}

function TextOptionFolder({obj, depth = 0, path = new FolderPath(), dispatch,}: SubfolderProps<TextOption>) {
    const hasPassages = obj.prepend.length > 0;
    const selectFolder = useCallback(() => {
        if (!dispatch) {
            return;
        }
        dispatch(path, `TEXT_OPTION`);
    }, [dispatch, path]);
    return (
        <Folder className={`text-option`} key={`t~${obj.id}`} depth={depth} title={obj.id} onSelect={selectFolder}>
            {hasPassages && obj.prepend.map((passage, index) =>
                PassageFolder({obj: passage, depth: depth + 1, path: path?.open(`prepend`, index), dispatch: dispatch}))}
        </Folder>
    );
}

function ReactionOptionFolder({obj, depth = 0, path = new FolderPath(), dispatch,}: SubfolderProps<ReactionOption>) {
    const hasPassages = obj.prepend.length > 0;
    const selectFolder = useCallback(() => {
        if (!dispatch) {
            return;
        }
        dispatch(path, `REACTION_OPTION`);
    }, [dispatch, path]);
    return (
        <Folder className={`reaction-option`} key={`r~${obj.id}`} depth={depth} title={obj.id} onSelect={selectFolder}>
            {hasPassages && obj.prepend.map((passage, index) =>
                PassageFolder({obj: passage, depth: depth + 1, path: path?.open(`prepend`, index), dispatch: dispatch}))}
        </Folder>
    );
}

function PassageFolder({obj, depth = 0, path = new FolderPath(), dispatch,}: SubfolderProps<Passage>) {
    const hasReactionOptions = obj.reactionOptions.length > 0;
    const hasTextOptions = obj.textOptions.length > 0;
    // const selectFolder = useCallback(() => {
    //     if (!dispatch) {
    //         return;
    //     }
    //     dispatch(path, `PASSAGE`);
    // }, [dispatch, path]);
    return (
        <Folder className={`passage`} key={obj.id} depth={depth} title={obj.id} onSelect={() => dispatch ? dispatch(path, `PASSAGE`) : undefined}>
            {hasReactionOptions && obj.reactionOptions.map((option, index) =>
                ReactionOptionFolder({obj: option, depth: depth + 1, path: path?.open(`reactionOptions`, index), dispatch: dispatch}))}
            {hasTextOptions && obj.textOptions.map((option, index) =>
                TextOptionFolder({obj: option, depth: depth + 1, path: path?.open(`textOptions`, index), dispatch: dispatch}))}
        </Folder>
    );
}

function RoomFolder({obj, depth = 0, path = new FolderPath(), dispatch,}: SubfolderProps<Room>) {
    const hasPassages = obj.passages.length > 0;
    // const selectFolder = useCallback(() => {
    //     if (!dispatch) {
    //         return;
    //     }
    //     dispatch(path, `ROOM`);
    // }, [dispatch, path]);
    return (
        <Folder className={`room`} key={obj.id} depth={depth} title={obj.id} onSelect={() => dispatch ? dispatch(path, `ROOM`) : undefined}>
            {hasPassages && obj.passages.map((passage, index) =>
                PassageFolder({obj: passage, depth: depth + 1, path: path?.open(`passages`, index), dispatch: dispatch}))}
        </Folder>
    );
}
