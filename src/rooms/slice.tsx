import {RoomData} from "./RoomData";
import {RoomsAction, RoomsActionId} from "./actions";
import {uuid} from "../constants";

export type RoomsState = Record<uuid, RoomData>;

export const initialRooms: RoomsState = {
    "280e4a95-9f9d-4aa0-8339-08cb7a82d10e": {
        id: "280e4a95-9f9d-4aa0-8339-08cb7a82d10e",
        title: "HALL",
    },
    "78dac654-8bd1-4d51-8b69-2adfeec185e8": {
        id: "78dac654-8bd1-4d51-8b69-2adfeec185e8",
        title: "KITCHEN",
    },
    "ad65f642-325a-4b4e-9221-d276a1fca597": {
        id: "ad65f642-325a-4b4e-9221-d276a1fca597",
        title: "BEDROOM",
    },
};

export const roomsReducer = (state = initialRooms, action: RoomsAction) : RoomsState => {
    // return state.concat({
    //     name: `${5}`,
    // })
    // return state.map(room => ({...room, name: room.name + '!'}));
    switch (action.type) {
        case RoomsActionId.ADD:
            return { ...state, [action.payload.id]: action.payload };
    //     case RoomsActionId.CLEAR:
    //         return { ...state, action };
        default:
            return state;
    }
}
