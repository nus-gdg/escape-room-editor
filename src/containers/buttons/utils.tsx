import {store} from "../../app";

export const defaultSaveFileName = "save.json";
export const defaultGameFileName = "game.json";

export function createJson(obj: any) {
    const contents = JSON.stringify(obj, undefined, "  ");
    return new Blob([contents], {type: "application/json"});
}

export function createSaveFile() {
    return createJson(store.getState());
}
