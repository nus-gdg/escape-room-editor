export const debounceTime = 250;

// Stops drag events on a focused component
export function withNoDrag(className?: string) {
    return className ? className + " nodrag" : "nodrag";
}
