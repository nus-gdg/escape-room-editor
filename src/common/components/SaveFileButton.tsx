import React, {ReactNode, useRef} from 'react'
import {Button} from '@chakra-ui/react'
import {useRoot} from "../../hooks/useRoot";

interface SaveFileButtonProps {
    type: string,
    filename?: string,
    children?: ReactNode
}

export const SaveFileButton = ({type, filename = "game.json", children}: SaveFileButtonProps) => {
    const ctx = useRoot();
    const fileOutput = useRef<HTMLAnchorElement | null>(null);

    const replacer = null;
    const spacer = "    "; // 4 spaces

    const handleClick = () => {
        if (!fileOutput.current) {
            return;
        }
        const contents = JSON.stringify(ctx.state, replacer, spacer);
        const file = new Blob([contents], {type: type});
        fileOutput.current.href = URL.createObjectURL(file);
        fileOutput.current.download = filename;
        fileOutput.current?.click();
    }

    return (
        <>
            <a ref={fileOutput} href={"#/"} style={{display: "none"}}>
                Anchor for downloading json file
            </a>
            <Button onClick={handleClick}>
                {children}
            </Button>
        </>
    )
}
