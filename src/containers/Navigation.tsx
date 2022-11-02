import {memo, ReactElement, useCallback, useState} from "react";
import {Tab, Tabs, Tooltip} from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PublicIcon from "@mui/icons-material/Public";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import RoomsMenu from "./menus/RoomsMenu";
import ItemsMenu from "./menus/ItemsMenu";
import "./Navigation.css";

function createTab(icon: ReactElement, description: string): ReactElement {
    return (
        <Tab
            className={"Navigation-tab"}
            key={description}
            label={
                <Tooltip placement={"right"} title={description}>
                    {icon}
                </Tooltip>
            }
        />
    );
}

const sections = [
    {
        tab: createTab(<InfoIcon/>, "Info"),
        panel: <RoomsMenu/>,
    },
    {
        tab: createTab(<HomeIcon/>, "Rooms"),
        panel: <RoomsMenu/>,
    },
    {
        tab: createTab(<SportsBaseballIcon/>, "Items"),
        panel: <ItemsMenu/>,
    },
    {
        tab: createTab(<FlagIcon/>, "Flags"),
        panel: <RoomsMenu/>,
    },
    {
        tab: createTab(<PublicIcon/>, "GlobalCommands"),
        panel: <RoomsMenu/>,
    },
];

const sectionTabs = sections.map(section => section.tab);

export interface NavigationProps {
    onChange?: (tabIndex: number) => void,
}

const Navigation = (
    {
        onChange
    }: NavigationProps) => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = useCallback((_: any, newValue: number) => {
        setTabIndex(newValue);
        onChange?.(newValue);
    }, [setTabIndex, onChange]);

    return (
        <section className={"Navigation-root"}>
            <Tabs
                className={"Navigation-tabs"}
                value={tabIndex}
                onChange={handleChange}
                orientation="vertical"
                variant="scrollable"
                scrollButtons={false}
            >
                {sectionTabs}
            </Tabs>
            <div className={"Navigation-menu"}>
                {sections[tabIndex].panel}
            </div>
        </section>
    )
}

export default memo(Navigation);
