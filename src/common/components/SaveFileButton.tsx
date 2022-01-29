import React, {useRef} from 'react'
import {Button} from '@chakra-ui/react'

interface SaveFileButtonProps {
    label?: string
}

export const SaveFileButton = ({label = "Save"}: SaveFileButtonProps) => {
    const fileOutput = useRef<HTMLAnchorElement | null>(null);

    const handleClick = () => {
        if (!fileOutput.current) {
            return;
        }
        const file = new Blob(["{\"potato\": 100}"], {type: "text/plain"});
        fileOutput.current.href = URL.createObjectURL(file);
        fileOutput.current.download = "game.json";
        fileOutput.current?.click();
    }

    return (
        <>
            <a ref={fileOutput} />
            <Button onClick={handleClick}>
                {label}
            </Button>
        </>
    )
}
