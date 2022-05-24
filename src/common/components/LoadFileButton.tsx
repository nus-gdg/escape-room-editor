import React, {ReactNode, useRef} from 'react'
import {Button} from '@chakra-ui/react'

interface LoadFileButtonProps {
    accept?: string,
    onFileRead?: ((content: string) => void),
    children?: ReactNode
}

export const LoadFileButton = ({accept = "", onFileRead = undefined, children}: LoadFileButtonProps) => {
    const fileInput = useRef<HTMLInputElement | null>(null);
    let fileReader : FileReader;

    const handleClick = () => {
        fileInput.current?.click();
    }

    const handleFileRead = (e: ProgressEvent<FileReader>) => {
        const content = fileReader.result as string;
        if (!onFileRead) {
            return;
        }
        onFileRead(content);
    }

    const handleFileChosen = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(e.target.files[0]);
    }

    return (
        <>
            <input ref={fileInput}
                   type={"file"}
                   accept={accept}
                   onChange={handleFileChosen}
                   hidden />
            <Button onClick={handleClick}>
                {children}
            </Button>
        </>
    )
}
