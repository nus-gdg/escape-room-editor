export function getKeysOfType<T>(defaultObj: T) {
    return Object.keys(defaultObj) as Array<keyof T>;
}
