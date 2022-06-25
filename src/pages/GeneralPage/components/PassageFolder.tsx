import {uniq} from "lodash";
import List from "../../../common/components/List";
import Folder from "../../../common/components/Folder";
import React, {useContext} from "react";
import Root2 from "../../../common/containers/Root2";

interface PassageFolderState {
    showRooms: boolean,
    showItems: boolean,
}

interface PassageFolderProps {
    className?: string,
    // path?: EditorPath,
}

const PassageFolder = (
    {
        className = "",
        // path = new EditorPath(),
    }: PassageFolderProps) => {
    console.log("PassageFolder: Rendered");

    // const ctx = useContext(Root2);
    //
    // const [state, setState] = useState<CategoryMenuState>({
    //     showRooms: false,
    //     showItems: false,
    // });
    //
    // const defaultIds = {
    //     room: "room",
    //     item: "item",
    // };
    //
    // const handleToggledRooms = useCallback(() => {
    //     setState(state => ({
    //         ...state,
    //         ...{showRooms: !state.showRooms}
    //     }));
    // }, []);
    //
    // const handleToggledItems = useCallback(() => {
    //     setState(state => ({
    //         ...state,
    //         ...{showItems: !state.showItems}
    //     }));
    // }, []);
    //
    // const handleAddedRoom = () => {
    //     ctx.dispatch(addRoom(defaultIds.room).then(openRoom()));
    // }
    //
    // const handleAddedItem = () => {
    //     ctx.dispatch(addItem(desfaultIds.item).then(selectItem(defaultIds.item)));
    // }
    //
    // const handleRemovedRoom = (e: string) => {
    //     ctx.dispatch(removeRoom(e));
    // }
    //
    // const handleRemovedItem = (e: string) => {
    //     ctx.dispatch(removeItem(e));
    // }
    //
    // const handleSelectedRoom = (e: string) => {
    //     ctx.dispatch(selectRoom(e));
    // }
    //
    // const handleSelectedItem = (e: string) => {
    //     ctx.dispatch(selectItem(e));
    // }
    //
    // const selected = ctx.store.editor.path.current();
    //
    // const isSelected = (index: number, type: string) => {
    //     return !!selected
    //         && selected.index === index
    //         && selected.type === type;
    // }
    //
    // const isSelectedRoom = (index: number) => {
    //     return isSelected(index, "ROOM");
    // }
    //
    // const isSelectedItem = (index: number) => {
    //     return isSelected(index, "ITEM");
    // }
    //
    // const rooms = useMemo(() => {
    //     return uniq(Object.keys(ctx.store.data.rooms));
    // }, [ctx.store.data.rooms]);
    //
    // const items = useMemo(() => {
    //     return uniq(Object.keys(ctx.store.data.inventory));
    // }, [ctx.store.data.inventory]);

    const ctx = useContext(Root2);

    return (
        <Folder key={"id"} title={"Rooms"} />
    );
};

export default React.memo(PassageFolder);
