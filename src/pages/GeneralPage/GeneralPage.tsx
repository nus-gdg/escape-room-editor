import { Toolbar } from "../Toolbar/Toolbar";
import TextInput from "./components/TextInputComponent";
import React, { Component } from "react";
import { RoomData, ContentData, ButtonData } from "./Data/RoomData";
import RoomsNavigationComponent from "./components/RoomsNavigationComponent";
import { Flex } from "@chakra-ui/react";
import { ContentComponent } from "./components/ContentComponent";
import { ButtonReactionComponent } from "./components/ButtonReactionComponent";
import { useRoot } from "../../hooks/useRoot";
import { ContentAction } from "../../state/content/contentActions";
import { ListHashMapComponent } from "./components/ListHashMapComponent";
import { updateCurrRoom } from "./GeneralHelperFuncs";

export const GeneralPage = () => {
    const ctx = useRoot();

    function handleUpdateRoomContent(updatedContent: ContentData) {
        let updatedRoom = {
            ...ctx.state.currRoom,
            content: updatedContent,
        };

        updateCurrRoom(updatedRoom, ctx);
    }

    return (
        <Flex direction={"row"}>
            <RoomsNavigationComponent />
            <Flex direction={"column"}>
                <ContentComponent
                    content={ctx.state.currRoom.content}
                    onUpdateContent={handleUpdateRoomContent}
                />
                <ButtonReactionComponent roomData={ctx.state.currRoom} />
            </Flex>
            <ListHashMapComponent hashmap={ctx.state.roomNames} title="flags" />
        </Flex>
    );
};
