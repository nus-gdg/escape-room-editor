import React from "react";
import "./OptionsBar.css";

interface OptionsBarProps {
    title: string,
    children: React.ReactNode,
}

const OptionsBar = (
    {
        title = "Menu",
        children,
    }: OptionsBarProps) => {
    return (
        <div className={`options`}>
            <div className={`options-label`}>{title}</div>
            {children}
            {/*<button className={`toolbar-up toolbar-option`} onClick={}>{Symbols.upArrow2}</button>*/}
            {/*<button className={`toolbar-down toolbar-option`} onClick={}>{Symbols.downArrow2}</button>*/}
            {/*<button className={`toolbar-remove toolbar-option`} onClick={}>{Symbols.minus}</button>*/}
            {/*<button className={`toolbar-add toolbar-option`} onClick={}>{Symbols.plus}</button>*/}
        </div>
    );
}

export default React.memo(OptionsBar);
