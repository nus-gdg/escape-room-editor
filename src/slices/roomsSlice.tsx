import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {State} from "../app";
import {createRoomFlowData, RoomFlowData} from "../components/room";

export type RoomsState = Record<string, RoomFlowData>;

const initialState: RoomsState = {
    hall: createRoomFlowData("hall"),
    kitchen: createRoomFlowData("kitchen"),
    bedroom: createRoomFlowData("bedroom"),
}

export interface CreateRoomPayload {
    name: string,
}

export interface UpdateRoomPayload {
    name: string,
    data: RoomFlowData,
}

export interface DeleteRoomsPayload {
    names: string[],
}

export const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        createRoom: (state, action: PayloadAction<CreateRoomPayload>) => {
            state[action.payload.name] = createRoomFlowData(action.payload.name);
        },
        updateRoom: (state, action: PayloadAction<UpdateRoomPayload>) => {
            state[action.payload.name] = action.payload.data;
        },
        deleteRooms: (state, action: PayloadAction<DeleteRoomsPayload>) => {
            action.payload.names.forEach(name => {
                delete state[name];
            });
        }
    }
});

export const { createRoom, updateRoom, deleteRooms } = roomsSlice.actions;
export const selectRooms = (state: State) => state.rooms;
export const roomsReducer = roomsSlice.reducer;
