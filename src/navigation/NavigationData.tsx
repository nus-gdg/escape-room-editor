export enum NavigationFolderType {
    NONE = "NONE",
    ROOM = 'ROOM',
}

export interface NavigationData {
    type: NavigationFolderType,
    index: number,
}
