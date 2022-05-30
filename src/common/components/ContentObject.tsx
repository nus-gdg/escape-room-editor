import React from 'react'
import {toDiscordHTML} from "../../utils/toDiscordHTML";
import "./ContentObject.css"

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

    return (
        <div className={"content"}>
            <div className={"content-line"} />
            <div className={"content-body"}>
                <div className={"content-title"}
                     dangerouslySetInnerHTML={{__html: toDiscordHTML(title)}} />
                <div className={"content-description"}
                     dangerouslySetInnerHTML={{__html: toDiscordHTML(description)}} />
                <img className={"content-image"} src={imageUrl} alt={"Missing Image"}/>
            </div>
        </div>
    )
}
