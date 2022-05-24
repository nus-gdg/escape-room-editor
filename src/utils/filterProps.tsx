export function filterProps<T>(props: Partial<T> | undefined,
                               filter: (key: keyof T) => boolean) {
    if (!props) {
        return props;
    }
    return (Object.keys(props) as Array<keyof T>)
        .filter(filter)
        .reduce((filteredProps: Partial<T>, key) => {
            filteredProps[key] = props[key];
            return filteredProps;
        }, {});
}
