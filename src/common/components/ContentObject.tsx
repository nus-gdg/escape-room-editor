import React, {CSSProperties, useRef} from 'react'
import {
    Box,
    Image,
    Text,
    Heading,
} from '@chakra-ui/react'
import {Emoji} from "emoji-mart";

interface ContentProps {
    title: string
    description?: string
    imageUrl?: string
}

export const ContentObject = ({title = "Title",
                                  description = "",
                                  imageUrl = "",
                              }: ContentProps) => {
    const separator = "\n";
    const htmlSeparator = "<br/>";

    function test(text: string) {
        const regex = /<b>(.*?)<\/b>/ig;
        let match;

        return text;
    }

    //Rich text

    function createParagraph(text: string, index: number) {
        return text ? <div key={index}>{text}</div> : <br/>;
    }

    const style: CSSProperties = {
        display: "flex",
        borderRadius: "5px",
        backgroundColor: "#aaaaaa",
    }

    const lineStyle: CSSProperties = {
        width: "5px",
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px",
        backgroundColor: "#bd7ef9",
    }

    const bodyStyle: CSSProperties = {
        height: "100%",
        maxWidth: "calc(70% - 10px)",
        paddingTop: "8px",
        paddingBottom: "10px",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderTopRightRadius: "5px",
        borderBottomRightRadius: "5px",
        backgroundColor: "#2F3136",
    }

    const titleStyle: CSSProperties = {
        fontSize: "medium",
        fontFamily: "sans-serif",
        color: "#FFFFFF",
    }

    const descriptionStyle: CSSProperties = {
        marginTop: "10px",
        fontSize: "small",
        fontFamily: "sans-serif",
        color: "#FFFFFF",
    }

    const imageStyle: CSSProperties = {
        maxHeight: "300px",
        marginTop: "15px",
        borderRadius: "5px",
        objectFit: "scale-down",
    }

    const ref = useRef(null);

    const emojiRegex = new RegExp(`(:[a-zA-Z0-9-_+]+:)`, 'g');
    const emojiSize = 24;

    function createEmoji(emoji: string) {
        return (
            <>
                {emoji && (
                    <Emoji size={emojiSize}
                       emoji={emoji}
                       fallback={() => emoji as any} />
                )}
            </>
        );
    }

    function emojifyString(value: string) {
        return (
            <>
                {value.split(emojiRegex).map(createEmoji)}
            </>
        );
    }

    const italicsRegex = new RegExp(`\\*(.+?)\\*`, 'g');
    const boldRegex = new RegExp(`\\*\\*(.+?)\\*\\*`, 'g');

    function createBoldText(text: string) {
        return (
            <>
                {text && (
                    <Text as='b'>
                        {text}
                    </Text>
                )}
            </>
        );
    }

    //8e2dd6c23ccf587435feaf7ff463c792

    return (
        <Box style={style}>
            <Box style={lineStyle} />
            <Box style={bodyStyle}>
                <Heading as='h1' style={titleStyle} >
                    {title}
                </Heading>
                <Text style={descriptionStyle} >
                    {emojifyString(description)}
                    <br/>
                    {createBoldText(description)}
                    <br/>
                    {"****potato****".split(boldRegex)}
                </Text>
                <Image style={imageStyle} src={imageUrl} />
            </Box>
        </Box>
    );
}