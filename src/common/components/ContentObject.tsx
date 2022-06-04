import React from 'react'
import {toDiscordHTML} from "../../utils/toDiscordHTML";
import "./ContentObject.css"

interface ContentProps {
    title: string
    description?: string
    imageUrl?: string
}

const ContentObject = ({title = "Title",
                                  description = "",
                                  imageUrl = "",
                              }: ContentProps) => {

    console.log("ContentObject: Rendered");

    return (
        <div className={"content"}>
            <div className={"content-line"} />
            <div className={"content-body"}>
                <div className={"content-title"}
                     dangerouslySetInnerHTML={{__html: toDiscordHTML(title)}} />
                {description && <div className={"content-description"}
                     dangerouslySetInnerHTML={{__html: toDiscordHTML(description)}} />}
                {imageUrl && <img className={"content-image"} src={imageUrl} alt={""}/>}
            </div>
        </div>
    )
}

export default React.memo(ContentObject);
