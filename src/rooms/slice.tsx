import {RoomData} from "./RoomData";
import {RoomsAction} from "./actions";

export type RoomsState = RoomData[];

export const initialRooms: RoomsState = [
    {
        title: "POTATO",
    },
    {
        title: "MILO",
    },
    {
        title: "TOMATO",
    },
];

export const roomsReducer = (state = initialRooms, action: RoomsAction) : RoomsState => {
    // return state.concat({
    //     name: `${5}`,
    // })
    // return state.map(room => ({...room, name: room.name + '!'}));
    switch (action.type) {
    //     case RoomsActionId.SET:
    //         return { ...state, action };
    //     case RoomsActionId.CLEAR:
    //         return { ...state, action };
        default:
            return state;
    }
}
