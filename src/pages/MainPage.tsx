import React, {memo, ReactElement, ReactNode, useCallback, useState} from "react";
import {Tab, Tabs, Tooltip} from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import Banner from "./Banner";
import Flow, {FlowProps} from "../flow/Flow";
import {NodeType} from "../flow/utils";
import "./MainPage.css"

const data: FlowProps = {
    nodes: [{id: "0", type: NodeType.Root, data: {}, position: {x: 0, y: 0}, deletable: false, draggable: false}],
    edges: [],
}

function renderTab(title: string, icon: ReactElement) {
    return (
        <Tab label={
            <Tooltip placement={"right"} title={title}>
                {icon}
            </Tooltip>
        }/>
    )
}

function renderTabPanel(index: number, value: number, children: ReactNode) {
    return (<>{value === index && children}</>)
}

export const MainPage = () => {
    const [value, setValue] = useState(0);

    const handleChangeTab = useCallback((_: any, newValue: number) => {
        setValue(newValue);
    }, [setValue]);

    return (
        <div className={"page"}>
            <Banner className={"page__header"}/>
            <div className={"page__body"}>
                <Tabs className={"page__navigation"} value={value} onChange={handleChangeTab} orientation="vertical">
                    {renderTab("Rooms", <OtherHousesIcon/>)}
                    {renderTab("Items", <SportsBaseballIcon/>)}
                    {renderTab("Flags", <FlagIcon/>)}
                    {renderTab("Settings", <SettingsIcon/>)}
                </Tabs>
                <div className={"page__drawer"}>
                    {renderTabPanel(0, value, <strong>ROOMS</strong>)}
                    {renderTabPanel(1, value, <strong>ITEMS</strong>)}
                    {renderTabPanel(2, value, <strong>FLAGS</strong>)}
                    {renderTabPanel(3, value, <strong>SETTINGS</strong>)}
                </div>
                <Flow {...data}/>
            </div>
        </div>
    );
};

export default memo(MainPage);
