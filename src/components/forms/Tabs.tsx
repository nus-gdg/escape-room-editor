import {ReactNode, useState} from "react";

export interface Tab {
    heading: string,
    renderContents?: () => ReactNode,
}

interface TabsProps {
    tabs?: Tab[],
    onChangeTab?: (tabIndex: number) => void,
}

export const Tabs = (
    {
        tabs = [],
        onChangeTab = () => {},
    }: TabsProps) => {

    const [tabIndex, setTabIndex] = useState(0);

    // const tabs = Object.entries(children).

    function createTab(tab: Tab, index: number) {
        return (
            <button onClick={() => changeTab(index)}>{tab.heading}</button>
        )
    }

    function changeTab(tabIndex: number) {
        onChangeTab(tabIndex);
        setTabIndex(tabIndex);
    }

    function renderTabContents() {
        let tab = tabs[tabIndex];
        if (!tab) {
            return;
        }
        if (!tab.renderContents) {
            return;
        }
        return tab.renderContents();
    }

    return (
        <div>
            <div style={{flexDirection: "row"}}>
                {tabs.map(createTab)}
            </div>
            <div>
                {renderTabContents()}
            </div>
            {/*<div>*/}
            {/*    <Tab/>*/}
            {/*    <button/>*/}
            {/*    /!*{expanded && children}*!/*/}
            {/*</div>*/}
        </div>
    )
}
