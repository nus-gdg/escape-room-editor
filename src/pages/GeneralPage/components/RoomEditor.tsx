import {get} from "lodash";
import React, {ChangeEvent} from "react";
import {addRoom, setId, setRoomTitle} from "../../../state/data/dataActions";
import "./RoomEditor.css";
import {Room} from "../../../state/data/data";
import {useRoot2} from "../../../hooks/useRoot2";
import FolderPath from "../../../constants/FolderPath";

// interface RoomEditorState {
//     showPassages: boolean,
// }

interface RoomEditorProps {
    className?: string,
}

const RoomEditor = (
    {
        className = "",
    }: RoomEditorProps) => {

    const ctx = useRoot2();
    //
    // const [state, setState] = useState<RoomEditorState>({
    //     showPassages: false,
    // });
    //
    // const defaultIds = {
    //     passage: "~passage" as PassageId,
    // };
    //
    // const handleToggledPassages = useCallback(() => {
    //     setState(state => ({
    //         ...state,
    //         ...{showPassages: !state.showPassages}
    //     }));
    // }, []);
    //
    const path = ctx.store.editor.path;
    const room: Room = get(ctx.store, path.folders);

    // const handleChangedId = (e: ChangeEvent<HTMLInputElement>) => {
    //     const newPath = path.folders.slice(0, -1).concat(e.currentTarget.value);
    //     console.log(newPath)
    //     console.log(path)
    //     ctx.dispatch(addRoom(path, room));
    //         // .then(openFolder(newId))
    //         // .then(removeRoom(roomId)));
    // }

    const handleChangedId = (e: ChangeEvent<HTMLInputElement>) => {
        ctx.dispatch(setId(path, e.currentTarget.value));
    }

    const handleChangedTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // ctx.dispatch(addRoom(getNewRoomPath()));
        ctx.dispatch(setRoomTitle(path, e.currentTarget.value));
    }
    // const handleAddedPassage = () => {
    //     ctx.dispatch(addPassage(defaultIds.passage)
    //         .then(setRoomPassages(roomId, room.passages.concat(defaultIds.passage))));
    // }
    //
    // const passages = useMemo(() => {
    //     return uniq(Object.keys(room.passages));
    // }, [room.passages]);

    return (
        <div className={`room-editor editor ${className}`} >
            <div className={"room-editor-id form"}>
                <div className={"label"}>ROOM ID</div>
                <input className={"textbox"} value={room.id} onChange={handleChangedId} placeholder={"ID"}/>
            </div>
            <div className={"room-editor-title form"}>
                <div className={"label"}>TITLE</div>
                <textarea className={"textbox"} value={room.title} onChange={handleChangedTitle} placeholder={"Title"} rows={1}/>
            </div>
        </div>
    )
};

export default React.memo(RoomEditor);
