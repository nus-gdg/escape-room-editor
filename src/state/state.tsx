import { RoomData } from "../pages/GeneralPage/Data/RoomData";
import {getKeysOfType} from "../utils/getKeysOfType";


export interface State {
    title: string;
    description: string[];
    image: string;
    flags: string[];

    rooms: RoomData[]; //store all the curr rooms
    currRoom: RoomData; //the curr room data pressed
}

export const defaultRoom = new RoomData(0); //TEMP TODO:: REMOVE THIS

export const initialState: State = {
    title: "Escape Room",
    description: [
        "An NUSGDG initiative"
    ],
    image: "https://c.tenor.com/_4YgA77ExHEAAAAd/rick-roll.gif",
    flags: [
        "water is dry"
    ],

    rooms: [defaultRoom],
    currRoom: defaultRoom,
};

export const keysOfState = getKeysOfType(initialState);
export const isKeyOfState = (key: keyof State) => keysOfState.includes(key);
