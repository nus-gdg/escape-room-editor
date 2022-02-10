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

interface Props {}

interface State {
    // rooms: RoomData[]; //store all the curr rooms
    // currRoom: RoomData; //the curr room data pressed

    flags: {}; //key-value, id-flagName
    commandNames: {}; //key-value, id-commandName
    roomNames: {}; //key-value pair, id-roomName
}

//props: Props
export const GeneralPage = () => {
    const ctx = useRoot();

    return (
        <Flex direction={"row"}>
            <RoomsNavigationComponent />
            <Flex direction={"column"}>
                <ContentComponent />
                <ButtonReactionComponent roomData={ctx.state.currRoom} />
            </Flex>
        </Flex>
    );
};
