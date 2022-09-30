import { isNumber } from "lodash";

export default class FolderPath {
    folders: string[];

    constructor(path: string[] = []) {
        this.folders = path;
    }

    open(...folders: (string | number)[]): FolderPath {
        return new FolderPath(this.folders.concat(folders.map(String)));
    }

    close(): FolderPath {
        return new FolderPath(this.folders.slice(0, -1));
    }

    index(): number {
        if (this.folders.length <= 0) {
            return NaN;
        }
        return Number(this.folders[this.folders.length - 1]);
    }
}
