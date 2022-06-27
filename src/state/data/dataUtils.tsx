import {Entity, EntityId, Flag, Item, Passage, ReactionOption, Room, TextOption} from "./data";

function createEntity<T extends Entity>(type: { new(id: EntityId): T }, n: number, prefix: string) {
    const entities: T[] = [];
    for (let i = 0; i < n; i++) {
        entities.push(new type(`${prefix}${i}`));
    }
    return entities;
}

export const createRooms = (n: number, prefix = `r`) => createEntity(Room, n, prefix);
export const createItems = (n: number, prefix = `i`) => createEntity(Item, n, prefix);
export const createFlags = (n: number, prefix = `f`) => createEntity(Flag, n, prefix);
export const createPassages = (n: number, prefix = `p`) => createEntity(Passage, n, prefix);
export const createTextOptions = (n: number, prefix = `to`) => createEntity(TextOption, n, prefix);
export const createReactionOptions = (n: number, prefix = `ro`) => createEntity(ReactionOption, n, prefix);
