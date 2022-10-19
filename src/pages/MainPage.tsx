import React, {memo, ReactElement, ReactNode, useCallback, useState} from "react";
import {Button, Tab, Tabs, Tooltip} from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import Banner from "./Banner";
import Flow, {FlowProps} from "../flow/Flow";
import {NodeType} from "../flow/utils";
import "./MainPage.css"
import RoomDialog from "./RoomDialog";
import NavigationMenu from "./NavigationMenu";

const data: FlowProps = {
    nodes: [{id: "0", type: NodeType.Root, data: {}, position: {x: 0, y: 0}, deletable: false, draggable: false}],
    edges: [],
}

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
        renderPanel: () => <NavigationMenu label={"Rooms"} items={["a", "b", "c",]} />
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

export const MainPage = () => {
    const [value, setValue] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);

    const handleChangeTab = useCallback((_: any, newValue: number) => {
        setValue(newValue);
    }, [setValue]);

    return (
        <div className={"page"}>
            <Banner className={"page__header"}/>
            <div className={"page__body"}>
                <Tabs className={"page__navigation"} value={value} onChange={handleChangeTab} orientation="vertical">
                    {tabs.map(renderTab)}
                </Tabs>
                <div className={"page__drawer"}>
                    {renderTabPanel(value)}
                </div>
                {/*<Button onClick={() => setOpenDialog(true)}>PP</Button>*/}
                {/*<RoomDialog open={openDialog} onClose={() => setOpenDialog(false)}/>*/}
                <Flow {...data}/>
            </div>
        </div>
    );
};

export default memo(MainPage);
