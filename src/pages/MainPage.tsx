import React, {memo, ReactElement, ReactNode, useCallback, useState} from "react";
import {Button, Tab, Table, TableBody, TableHead, Tabs, Tooltip} from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import Flow, {FlowProps} from "../flow/Flow";
import {NodeType} from "../flow/utils";
import "./MainPage.css"
import NavMenu from "../navigation/NavMenu";
import Banner from "./Banner";

const data: FlowProps = {
    nodes: [{id: "0", type: NodeType.Root, data: {}, position: {x: 0, y: 0}, deletable: false, draggable: false}],
    edges: [],
}

const testRooms = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

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

function renderTab(tab: TabProps) {
    return (
        <Tab
            key={tab.title}
            label={
                <Tooltip placement={"right"} title={tab.title}>
                    {tab.icon}
                </Tooltip>
            }
        />
    )
}

function renderTabPanel(index: number) {
    if (index < 0 || index >= tabs.length) {
        return;
    }
    return tabs[index].renderPanel();
}

const MainPage = () => {
    const [value, setValue] = useState("");
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const handleCheck = useCallback((id: string, checked: boolean) => {
        setChecked2(checked);
    }, []);

    return (
        <div className={"page"}>
            <Banner className={"page__header"}/>
            <div className={"page__body"}>
                <Tabs className={"page__navigation"} value={value} orientation="vertical">
                    {tabs.map(renderTab)}
                </Tabs>
                <div className={"page__drawer"}>
                    <NavMenu
                        label={"Rooms"}
                        names={testRooms}
                    />
                </div>
                {/*<RoomDialog open={openDialog} onClose={() => setOpenDialog(false)}/>*/}
                <Flow {...data}/>
            </div>
        </div>
    );
};

export default memo(MainPage);
