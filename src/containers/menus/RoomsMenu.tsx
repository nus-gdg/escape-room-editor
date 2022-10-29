import {memo} from "react";
import {useDispatch, useSelector} from "../../app";
import NavMenu from "../../components/navigation/NavMenu";
import {createRoom, deleteRooms, openFlow, selectRooms, updateRoom} from "../../slices";

function createDefaultName(names: string[], prefix = "") {
    const regex = new RegExp(prefix);
    const counts: number[] = [];
    for (const name of names) {
        const count = parseInt(name.replace(regex, ""));
        if (!isNaN(count)) {
            counts.push(count);
        }
    }
    const maxCount = Math.max(0, ...counts);
    return `${prefix}${maxCount + 1}`;
}

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

    const handleDeleteRooms = (names: Set<string>) => {
        dispatch(deleteRooms({names: Array.from(names)}));
    };

    return (
        <NavMenu
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
