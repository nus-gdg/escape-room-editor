import {useCallback, useState} from "react";

export function useToggle(initialState = false) {
    const [open, setOpen] = useState(initialState);
    const toggle = useCallback(() => setOpen(open => !open), []);
    return {open, toggle};
}
