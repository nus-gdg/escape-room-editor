export function editArray<T>(array: Array<T>,
                             isItem: (item: T) => boolean,
                             edit: (item: T) => T) {
    return array.map(item => {
        if (!isItem(item)) {
            return item;
        }
        return edit(item);
    });
}
