import React from "react";
import { ContentData } from "../Data/RoomData";
import ContentObject from "../../../common/components/ContentObject";
import "./ContentEditor.css"
import MarkdownTextarea from "../../../common/components/MarkdownTextarea";

interface ContentEditorProps {
    content: ContentData,
    onContentChanged: (updatedContent: Partial<ContentData>) => void,
}

const ContentEditor = ({content, onContentChanged}: ContentEditorProps) => {
    function updateStringProps(key: keyof ContentData, value: string) {
        if (typeof content[key] != "string") {
            throw new TypeError(`Selected prop is not a "string".`);
        }
        onContentChanged({
            [key]: value,
        })
    }

    function updateProps(key: keyof ContentData) {
        return (updatedValue: string) => {
            updateStringProps(key, updatedValue);
        }
    }

    return (
        <div className={"content-editor"} >
            <div className={"content-editor-label"} ># Room Editor</div>
            <div className={"content-editor-body"}>
                <div className={"content-editor-form"}>
                    <MarkdownTextarea
                        className={"content-editor-title"}
                        value={content.title}
                        placeholder={"Name"}
                        maxRows={5}
                        onChange={updateProps("title")}
                    />
                    <MarkdownTextarea
                        className={"content-editor-description"}
                        value={content.description}
                        placeholder={"Description"}
                        maxRows={5}
                        onChange={updateProps("description")}
                    />
                    <MarkdownTextarea
                        className={"content-editor-imageLink"}
                        value={content.imageLink}
                        placeholder={"Image url"}
                        maxRows={5}
                        showEmojiMenu={false}
                        onChange={updateProps("imageLink")}
                    />
                </div>
                <ContentObject title={content.title}
                               description={content.description}
                               imageUrl={content.imageLink} />
            </div>
        </div>
    )
};

export default React.memo(ContentEditor);
