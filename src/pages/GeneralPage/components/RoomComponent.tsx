import React, { Component } from "react";
import { Text, Textarea, Box, Button, Input } from "@chakra-ui/react";
import TextInput from "./TextInputComponent";
import ContentInfo from "./ContentComponent";
import ContentComponent from "./ContentComponent";
import { RoomData } from "../Data/RoomData";

interface Props {
    roomData: RoomData;
    onSubmitHandler: (roomData: RoomData) => void;
}

interface State {
    roomName: string;
    roomTitle: string;
    roomDescription: string;
}

class RoomComponent extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            roomName: "",
            roomTitle: "",
            roomDescription: "",
        };
    }

    onSaveHandler = () => {
        const updatedRoom: RoomData = {
            ...this.props.roomData,
            roomName: this.state.roomName,
            content: {
                ...this.props.roomData.content,
                roomTitle: this.state.roomTitle,
                roomDescription: this.state.roomDescription,
            },
        };

        this.props.onSubmitHandler(updatedRoom);
    };

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "1%",
                }}
            >
                <Input
                    placeholder="Room Name"
                    defaultValue={this.props.roomData.roomName}
                    value={
                        this.state.roomName.length > 0
                            ? this.state.roomName
                            : this.props.roomData.roomName
                    }
                    onChange={(event) =>
                        this.setState({ roomName: event.currentTarget.value })
                    }
                />
                <Input
                    placeholder="Room Title"
                    defaultValue={this.props.roomData.content.roomTitle}
                    value={
                        this.state.roomTitle.length > 0
                            ? this.state.roomTitle
                            : this.props.roomData.content.roomTitle
                    }
                    onChange={(event) =>
                        this.setState({ roomTitle: event.currentTarget.value })
                    }
                />
                <Input
                    placeholder="Room Description"
                    defaultValue={this.props.roomData.content.roomDescription}
                    value={
                        this.state.roomDescription.length > 0
                            ? this.state.roomDescription
                            : this.props.roomData.content.roomDescription
                    }
                    onChange={(event) =>
                        this.setState({
                            roomDescription: event.currentTarget.value,
                        })
                    }
                />
                {/* <TextInput title="Room Name:"></TextInput> */}
                <Button onClick={this.onSaveHandler}>Save</Button>
                <ContentComponent />
            </div>
        );
    }
}

export default RoomComponent;
