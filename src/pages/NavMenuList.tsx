import React, {memo, ReactNode} from "react";
import {List} from "@mui/material";

interface NavMenuListProps {
    children: ReactNode
}

const NavMenuList = ({children}: NavMenuListProps) => {
    return (
        <List dense>
            {children}
        </List>
    )
}

export default memo(NavMenuList);
