import {getKeysOfType} from "../utils/getKeysOfType";

export interface State {
    title: string;
    description: string[];
    image: string;
    flags: string;
}

export const initialState: State = {
    title: "Escape Room",
    description: [
        "An NUSGDG initiative"
    ],
    image: "https://c.tenor.com/_4YgA77ExHEAAAAd/rick-roll.gif",
    flags: "water is dry"
};

export const keysOfState = getKeysOfType(initialState);
export const isKeyOfState = (key: keyof State) => keysOfState.includes(key);
