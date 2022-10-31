import React, {memo, ReactElement, useCallback} from "react";
import {Tab, Tabs, Tooltip, TooltipProps} from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PublicIcon from "@mui/icons-material/Public";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";

export interface MenuBarProps {
    tabIndex: number,
    onChange?: (tabIndex: number) => void,
}

const Navigation = (
    {
        tabIndex,
        onChange
    }: MenuBarProps) => {

    const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
        onChange?.(newValue);
    }, []);

    return (
        <Tabs
            className={"page__navigation"}
            value={tabIndex}
            onChange={handleChange}
            orientation="vertical"
        >
            {tabLabels.map(renderTab)}
        </Tabs>
    )
}

export default memo(Navigation);

const tooltipProps: Partial<Omit<TooltipProps, "title">> = {
    disableInteractive: true,
    enterDelay: 1000,
    enterNextDelay: 1000,
}

function createTabLabel(icon: ReactElement, description: string) {
    return (
        <Tooltip placement={"right"} title={description} {...tooltipProps}>
            {icon}
        </Tooltip>
    )
}

const tabLabels = [
    createTabLabel(<InfoIcon/>, "Info"),
    createTabLabel(<HomeIcon/>, "Rooms"),
    createTabLabel(<SportsBaseballIcon/>, "Items"),
    createTabLabel(<FlagIcon/>, "Flags"),
    createTabLabel(<PublicIcon/>, "Globals"),
];

function renderTab(label: ReactElement, index: number) {
    return <Tab key={index} label={label}/>
}
