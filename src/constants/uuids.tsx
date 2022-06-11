const { v4: uuidv4 } = require('uuid');

export type uuid = `~${string}`;
export const defaultUuid: uuid = `~`;

export function createUuid(): uuid {
    return `~${uuidv4()}`;
}

export function isUuid(source: string | undefined | null) {
    return !!source && source[0] === `~`;
}

export function isDefaultUuid(source: string | undefined | null) {
    return defaultUuid === source;
}
