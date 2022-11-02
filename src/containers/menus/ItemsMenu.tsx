import {memo} from "react";
import {useDispatch, useSelector} from "../../app";
import NavMenu from "../../components/navigation/NavMenu";
import {createRoom, deleteRooms, openFlow, selectRooms, updateRoom} from "../../slices";
import {createDefaultName} from "./utils";

const ItemsMenu = () => {
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

    const handleDeleteRooms = (names: Set<string>) => {
        dispatch(deleteRooms({names: Array.from(names)}));
    };

    return (
        <NavMenu
            label={"Items"}
            names={Object.keys(rooms).sort()}
            onCreate={handleCreateRoom}
            onRead={handleReadRoom}
            onUpdate={handleUpdateRoom}
            onDelete={handleDeleteRooms}
        />
    )
}

export default memo(ItemsMenu);
