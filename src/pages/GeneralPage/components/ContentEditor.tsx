import React from "react";
import { ContentData } from "../Data/RoomData";
import { ContentObject } from "../../../common/components/ContentObject";
import { useRoot } from "../../../hooks/useRoot";
import "./ContentEditor.css"

interface ContentEditorProps {
    content: ContentData;
    onUpdateContent: (
        updatedContent: ContentData,
        varName: keyof ContentData
    ) => void;
}

export const ContentEditor = (props: ContentEditorProps) => {
    const ctx = useRoot();

    //update the content of the currRoom
    function onChangeContentData(newData: string, varName: keyof ContentData) {
        let updateContent = { ...props.content };
        updateContent[varName] = newData as never;

        props.onUpdateContent(updateContent, varName);
    }

    return (
        <div className={"content-editor"} >
            <div className={"content-editor-label"} ># Room Editor</div>
            <div className={"content-editor-body"}>
                <div className={"content-editor-form"}>
                    <div className={"content-editor-title"}>
                        <textarea className={"content-editor-title-input"}
                               value={props.content.title}
                               placeholder="Name"
                               onChange={(event) => onChangeContentData(event.currentTarget.value, "title")}
                        />
                    </div>
                    <textarea className={"content-editor-description"}
                              value={props.content.description}
                              placeholder="Description"
                              onChange={(event) => onChangeContentData(event.currentTarget.value, "description")}
                    />
                    <textarea className={"content-editor-image-url"}
                           value={props.content.imageLink}
                           placeholder="Image url"
                           onChange={(event) => onChangeContentData(event.currentTarget.value, "imageLink")}
                    />
                </div>
                <ContentObject title={props.content.title}
                               description={props.content.description}
                               imageUrl={props.content.imageLink} />
            </div>
        </div>
    )
};
