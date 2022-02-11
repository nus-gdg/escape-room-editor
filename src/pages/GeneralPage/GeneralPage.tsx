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
import {
    deleteCommands,
    updateCommands,
    updateCurrRoom,
    updateRoomName,
} from "./GeneralHelperFuncs";

export const GeneralPage = () => {
    const ctx = useRoot();

    function handleUpdateRoomContent(
        updatedContent: ContentData,
        varName: keyof ContentData
    ) {
        let updatedRoom = {
            ...ctx.state.currRoom,
            content: updatedContent,
        };

        updateCurrRoom(updatedRoom, ctx);

        //if room name has been updated, update the unique value hashmap
        if (varName === "roomTitle") {
            updateRoomName(updatedRoom.id, updatedContent.roomTitle, ctx);
        }
    }

    return (
        <Flex direction={"row"}>
            <RoomsNavigationComponent />
            <Flex direction={"column"}>
                <ContentComponent
                    content={ctx.state.currRoom.content}
                    onUpdateContent={handleUpdateRoomContent}
                />
                <ButtonReactionComponent
                    roomData={ctx.state.currRoom}
                    selectOptions={ctx.state.roomNames}
                />
            </Flex>
            <Flex direction={"column"}>
                <ListHashMapComponent
                    hashmap={ctx.state.commands}
                    title="flags"
                    onUpdateHashMap={updateCommands}
                    onRemoveHashMap={deleteCommands}
                />
                {/* <ListHashMapComponent
                    hashmap={ctx.state.roomNames}
                    title="flags"
                /> */}
            </Flex>
        </Flex>
    );
};
