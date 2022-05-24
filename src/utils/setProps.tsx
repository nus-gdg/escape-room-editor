export function setProps<T>(obj: T, props: Partial<T> | undefined) {
    return { ...obj, ...props };
}
