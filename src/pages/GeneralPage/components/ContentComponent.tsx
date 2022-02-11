import React, { Component } from "react";
import { Text, Textarea, Box, Container, Input } from "@chakra-ui/react";
import { ContentData, RoomData } from "../Data/RoomData";
import { useRoot } from "../../../hooks/useRoot";
import { ContentAction } from "../../../state/content/contentActions";
import { updateCurrRoom } from "../GeneralHelperFuncs";

interface Props {
    content: ContentData;
    onUpdateContent: (
        updatedContent: ContentData,
        varName: keyof ContentData
    ) => void;
}

export const ContentComponent = (props: Props) => {
    const ctx = useRoot();

    //update the content of the currRoom
    function onChangeContentData(newData: string, varName: keyof ContentData) {
        let updateContent = { ...props.content };
        updateContent[varName] = newData;

        props.onUpdateContent(updateContent, varName);
    }

    return (
        <div>
            <Text fontSize="20px">Contents</Text>
            <Container bg={"grey"} centerContent>
                <Input
                    value={ctx.state.currRoom.content.roomTitle}
                    placeholder="Room name"
                    onChange={(event) =>
                        onChangeContentData(
                            event.currentTarget.value,
                            "roomTitle"
                        )
                    }
                />
                <Input
                    value={ctx.state.currRoom.content.imageLink}
                    placeholder="Image URL"
                    onChange={(event) =>
                        onChangeContentData(
                            event.currentTarget.value,
                            "imageLink"
                        )
                    }
                />
                <Textarea
                    value={ctx.state.currRoom.content.roomDescription}
                    placeholder="Room description"
                    onChange={(event) =>
                        onChangeContentData(
                            event.currentTarget.value,
                            "roomDescription"
                        )
                    }
                />
            </Container>
        </div>
    );
};
