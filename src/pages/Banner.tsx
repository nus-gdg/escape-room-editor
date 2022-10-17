import React, {memo} from "react";
import {IconButton, Toolbar, AppBar} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

interface BannerProps {
    className? : string
}

const Banner = ({className}: BannerProps) => {
    return (
        <AppBar position={"static"} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}} className={className}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <PublicIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default memo(Banner);
