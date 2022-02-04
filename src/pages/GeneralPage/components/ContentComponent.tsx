import React, { Component } from "react";
import { Text, Textarea, Box, Container } from "@chakra-ui/react";
import TextInput from "./TextInputComponent";
import { ContentData, RoomData } from "../Data/RoomData";

interface Props {
    contentData: ContentData;
    id: number;
    onUpdateContent: (newContent: ContentData) => void;
}

interface State {
    content: ContentData;
    id: number;
}

class ContentComponent extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            content: { ...this.props.contentData },
            id: this.props.id,
        };
    }

    //when content gets updated change
    static getDerivedStateFromProps(props: Props, current_state: State) {
        if (current_state.id !== props.id) {
            return {
                content: { ...props.contentData },
                id: props.id,
            };
        }
        return null;
    }

    onSaveContentHandler = () => {
        // const updatedContent = {
        //     ...this.state.content,
        // };

        this.props.onUpdateContent(this.state.content);
        //call the place i need to save it at
    };

    onChangeText = (newText: string, varName: keyof ContentData) => {
        let tempContent = { ...this.state.content };
        tempContent[varName] = newText;

        this.setState({
            content: tempContent,
        });

        this.onSaveContentHandler();
    };

    render() {
        return (
            <div>
                <Text fontSize="20px">Contents</Text>
                <Container bg={"grey"} centerContent>
                    <Textarea
                        value={this.state.content.roomTitle}
                        placeholder="Room name"
                        onChange={(event) =>
                            this.onChangeText(
                                event.currentTarget.value,
                                "roomTitle"
                            )
                        }
                    />
                    <Textarea
                        value={this.state.content.imageLink}
                        placeholder="Image URL"
                        onChange={(event) =>
                            this.onChangeText(
                                event.currentTarget.value,
                                "imageLink"
                            )
                        }
                    />
                    <Textarea
                        value={this.state.content.roomDescription}
                        placeholder="Room description"
                        onChange={(event) =>
                            this.onChangeText(
                                event.currentTarget.value,
                                "roomDescription"
                            )
                        }
                    />
                </Container>
            </div>
        );
    }
}

export default ContentComponent;
