export default class FolderPath {
    folders: string[];

    constructor(path: string[] = []) {
        this.folders = path;
    }

    open(...folders: (string | number)[]): FolderPath {
        return new FolderPath(this.folders.concat(folders.map(String)));
    }

    close(): FolderPath {
        return new FolderPath(this.folders.slice(0, -2));
    }
}
