export function createDefaultName(names: string[], prefix = "") {
    const regex = new RegExp(prefix);
    const counts: number[] = [];
    for (const name of names) {
        const count = parseInt(name.replace(regex, ""));
        if (!isNaN(count)) {
            counts.push(count);
        }
    }
    const maxCount = Math.max(0, ...counts);
    return `${prefix}${maxCount + 1}`;
}
