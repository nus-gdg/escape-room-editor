import React, { Component } from "react";
import { TextCommandData } from "../Data/RoomData";

interface Props {
    txtCmds: TextCommandData[];
    onAddTxtCmd: Function;
}

interface State {}

class TextCommands extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
    }

    render() {
        return (
            <div>
                <div></div>
            </div>
        );
    }
}

export default TextCommands;
