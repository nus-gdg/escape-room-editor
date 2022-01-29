export interface State {
    username: string | null;
    text: string | null;
}

export const initialState: State = {
    username: null,
    text: "escape"
};
