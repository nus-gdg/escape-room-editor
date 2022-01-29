import React, {ReactNode, useRef} from 'react'
import {Button} from '@chakra-ui/react'

interface SaveFileButtonProps {
    type: string,
    filename?: string,
    children?: ReactNode
}

export const SaveFileButton = ({type, filename = "game.json", children}: SaveFileButtonProps) => {
    const fileOutput = useRef<HTMLAnchorElement | null>(null);

    const handleClick = () => {
        if (!fileOutput.current) {
            return;
        }
        const file = new Blob(["{\"potato\": 100}"], {type: type});
        fileOutput.current.href = URL.createObjectURL(file);
        fileOutput.current.download = filename;
        fileOutput.current?.click();
    }

    return (
        <>
            <a ref={fileOutput} />
            <Button onClick={handleClick}>
                {children}
            </Button>
        </>
    )
}
