export enum EntityType {
    NONE = "NONE",
    ROOM = 'ROOM',
    PASSAGE = 'PASSAGE',
}

export interface Entity {
    type: EntityType,
    index: number,
}
