import {memo, useCallback} from "react";
import {useDispatch, useSelector} from "../../app";
import NavMenu from "../../components/navigation/NavMenu";
import {createRoom, deleteRooms, selectRooms} from "../../slices";

export const RoomsMenu = memo(() => {
    const dispatch = useDispatch();
    const rooms = useSelector(selectRooms);

    const handleCreateRoom = useCallback(() => {
        dispatch(createRoom({name: "new"}));
    }, []);

    // const editRoom = useCallback(() => {
    //     dispatch(editRoom({name: "New Room"}));
    // }, []);

    const handleDeleteRooms = useCallback((names: Set<string>) => {
        console.log(names);
        dispatch(deleteRooms({names: Array.from(names)}));
    }, []);

    return (
        <NavMenu
            label={"Rooms"}
            names={Object.keys(rooms)}
            onCreate={handleCreateRoom}
            onDelete={handleDeleteRooms}
// onRead?: (name: string) => void,
// onUpdate?: (name: string) => void,
        />
    )
})
