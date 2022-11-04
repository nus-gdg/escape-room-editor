import React, {memo, ReactElement, useRef} from "react";
import IconButton from "@mui/material/IconButton";
import {withNoDrag} from "./utils";

const inlineStyle = {display: "none"};

export interface DownloadButtonProps {
    className?: string,
    title?: string,
    icon: ReactElement,
    fileName: string,
    createBlob: () => Blob,
}

const DownloadButton = (
    {
        className,
        title,
        icon,
        fileName,
        createBlob
    }: DownloadButtonProps) => {
    const fileOutputRef = useRef<HTMLAnchorElement | null>(null);

    const handleClick = () => {
        const fileOutput = fileOutputRef.current;
        if (!fileOutput) {
            return;
        }
        fileOutput.href = URL.createObjectURL(createBlob());
        fileOutput.download = fileName;
        fileOutput.click();
    }

    return (
        <>
            <a ref={fileOutputRef} href={"#/"} style={inlineStyle}>
                Anchor for downloading json file
            </a>
            <IconButton className={withNoDrag(className)} title={title} onClick={handleClick}>
                {icon}
            </IconButton>
        </>
    )
}

export default memo(DownloadButton);
