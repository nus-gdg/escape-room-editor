import {memo, useCallback} from "react";
import {useDispatch, useSelector} from "../../app";
import NavMenu from "../../components/navigation/NavMenu";
import {createRoom, deleteRooms, openFlow, selectRooms} from "../../slices";

export const RoomsMenu = memo(() => {
    const dispatch = useDispatch();
    const rooms = useSelector(selectRooms);

    const handleCreateRoom = useCallback(() => {
        dispatch(createRoom({name: "new"}));
    }, [dispatch]);

    const handleReadRoom = useCallback((name: string) => {
        console.log(rooms[name]);
        dispatch(openFlow(rooms[name]));
    }, [dispatch, rooms]);

    // const editRoom = useCallback(() => {
    //     dispatch(editRoom({name: "New Room"}));
    // }, []);

    const handleDeleteRooms = useCallback((names: Set<string>) => {
        console.log(names);
        dispatch(deleteRooms({names: Array.from(names)}));
    }, [dispatch]);

    return (
        <NavMenu
            label={"Rooms"}
            names={Object.keys(rooms)}
            onCreate={handleCreateRoom}
            onRead={handleReadRoom}
            onDelete={handleDeleteRooms}
// onUpdate?: (name: string) => void,
        />
    )
})
