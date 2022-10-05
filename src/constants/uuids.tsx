const { v4: uuidv4, validate } = require('uuid');

export type uuid = string;
export const defaultUuid: uuid = `00000000-0000-0000-0000-000000000000`;

export function createUuid(): uuid {
    return `${uuidv4()}`;
}

export function isValidUuid(uuid: any): boolean {
    return validate(uuid);
}

export function isDefaultUuid(uuid: any) {
    return defaultUuid === uuid;
}
