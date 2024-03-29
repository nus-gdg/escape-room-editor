import {memo} from "react";
import {useDispatch, useSelector} from "../../app";
import List from "../../components/forms/List";
import {createRoom, deleteRooms, openFlow, selectRooms, updateRoom} from "../../slices";
import {createDefaultName} from "./utils";

const RoomsMenu = () => {
    const dispatch = useDispatch();
    const rooms = useSelector(selectRooms);

    const handleCreateRoom = () => {
        const defaultName = createDefaultName(Object.keys(rooms), "room");
        const newName = prompt("Room Name", defaultName);
        if (!newName) {
            return;
        }
        dispatch(createRoom({name: newName.toLocaleLowerCase()}));
    };

    const handleReadRoom = (name: string) => {
        dispatch(openFlow(rooms[name]));
    };

    const handleUpdateRoom = (name: string) => {
        const newName = prompt("Room Name");
        if (!newName) {
            return;
        }
        const data = {...rooms[name], name: newName};
        dispatch(updateRoom({name: name, data: data}));
    };

    const handleDeleteRooms = (names: string[]) => {
        dispatch(deleteRooms({names: names}));
    };

    return (
        <List
            label={"Rooms"}
            names={Object.keys(rooms).sort()}
            onCreate={handleCreateRoom}
            onRead={handleReadRoom}
            onUpdate={handleUpdateRoom}
            onDelete={handleDeleteRooms}
        />
    )
}

export default memo(RoomsMenu);
