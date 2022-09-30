import React, {Dispatch, useCallback} from "react";
import {get, isEqual} from "lodash";
import {FolderPath, Symbols} from "../../../../../constants";
import {Entity, Passage, Room} from "../../../../../state/data/data";
import {useRootDispatch, useRootStore} from "../../../../../hooks";
import {add, moveDown, moveUp, remove} from "./MenuButtonUtils";
import {openEditor, openFolder} from "../../../../../state/editor/editorActions";

interface RoomButtonsProps {
    // onAddEntity: () => void,
}

function RoomButtons<T extends Entity>(
    {
    }) {
    console.log(`Rendered: RoomButtons` );
    const store = useRootStore();
    const dispatch = useRootDispatch();

    const room: Room = get(store, store.editor.path.folders);
    const rooms: Room[] = get(store, store.editor.path.close().folders, []);

    function handleMoveUp() {
        const result = moveUp(store.editor.path, store.data.rooms);
        dispatch(result.action
            .then(openFolder(result.path))
            .then(openEditor(`ROOM`)));
    }

    function handleMoveDown() {
        const result = moveDown(store.editor.path, store.data.rooms);
        dispatch(result.action
            .then(openFolder(result.path))
            .then(openEditor(`ROOM`)));
    }

    function handleAdd() {
        const result = add(store.editor.path.open(`passages`), room.passages, () => new Passage(`new`));
        dispatch(result.action
            .then(openFolder(result.path))
            .then(openEditor(`PASSAGE`)));
    }

    function handleRemove() {
        const result = remove(store.editor.path, rooms);
        dispatch(result.action
            .then(openFolder(result.path))
            .then(openEditor(`ROOM`)));
    }

    return (
        <>
            <button onClick={handleMoveUp}>{Symbols.upArrow2}</button>
            <button onClick={handleMoveDown}>{Symbols.downArrow2}</button>
            <button onClick={handleRemove}>{Symbols.minus}</button>
            <button onClick={handleAdd}>{Symbols.plus}</button>
        </>
    );
}

export default React.memo(RoomButtons);
