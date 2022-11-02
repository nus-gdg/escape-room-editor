import React, {memo, ReactElement, ReactNode, useCallback, useState} from "react";
import {Button, Tab, Table, TableBody, TableHead, Tabs, Tooltip} from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import Banner from "../containers/Banner";
import Canvas from "../containers/Canvas";
import RoomsMenu from "../containers/menus/RoomsMenu";
import Navigation from "../containers/Navigation";
import "./MainPage.css"

// const data = createFlowData("toilet", "test", createRootNode("room", {}));

// const nodeTypes = {
    // [roomType]: RoomNode,
    // [NodeType.Passage]: PassageNode,
    // [NodeType.ReactionOption]: ReactionOptionNode,
    // [NodeType.TextOption]: TextOptionNode,
// }

interface TabProps {
    title: string,
    icon: ReactElement,
    renderPanel: () => ReactNode,
}

const tabs: TabProps[] = [
    {
        title: "Info",
        icon: <InfoIcon />,
        renderPanel: () => <strong>INFO</strong>
    },
    {
        title: "Rooms",
        icon: <HomeIcon />,
        renderPanel: () => <strong>ROOMS</strong>//() => <NavMenu label={"Rooms"} ids={["a", "b", "c",]} />
    },
    {
        title: "Items",
        icon: <SportsBaseballIcon />,
        renderPanel: () => <strong>ITEMS</strong>
    },
    {
        title: "Flags",
        icon: <FlagIcon />,
        renderPanel: () => <strong>FLAGS</strong>
    },
    {
        title: "Globals",
        icon: <PublicIcon />,
        renderPanel: () => <strong>GLOBALS</strong>
    },
]

function renderTabPanel(index: number) {
    if (index < 0 || index >= tabs.length) {
        return;
    }
    return tabs[index].renderPanel();
}

const MainPage = () => {
    return (
        <div className={"page"}>
            <Banner className={"page__header"}/>
            <div className={"page__body"}>
                <Navigation />
                <Canvas/>
            </div>
        </div>
    );
};

export default memo(MainPage);
