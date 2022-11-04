import {memo} from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AppBar from "@mui/material/AppBar";
import {SxProps} from "@mui/system";
import {IconButton} from "../components/forms";
import OpenButton from "./buttons/OpenButton";
import SaveButton from "./buttons/SaveButton";
import Logo from "./Logo";
import "./Banner.css";

const bannerStyle: SxProps = {
    zIndex: 1,
    display: "grid",
    gridTemplateColumns: "50% 50%",
}

const playIcon = <PlayCircleIcon/>;

export interface BannerProps {
    className?: string,
}

const Banner = (
    {
        className
    }: BannerProps) => {
    return (
        <AppBar className={"Banner-root " + className} position={"static"} sx={bannerStyle} >
            <div className={"Banner-left"}>
                <Logo/>
                <h1>Escape Room Editor</h1>
            </div>
            <div className={"Banner-right"}>
                <IconButton icon={playIcon} title={"Play"}/>
                <SaveButton/>
                <OpenButton/>
            </div>
        </AppBar>
    )
}

export default memo(Banner);
