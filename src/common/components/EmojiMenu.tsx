import React, {useEffect, useState} from 'react'
import 'emoji-mart/css/emoji-mart.css';
import './EmojiMenu.css';
import {BaseEmoji, EmojiData, NimblePicker,} from 'emoji-mart';
import emojiDatas from 'emoji-mart/data/twitter.json';

interface EmojiMenuProps {
    label?: string
    onEmojiSelected?: ((emoji: BaseEmoji) => void)
}

export const EmojiMenu = ({
                              label = String.fromCodePoint(0x1F642),
                              onEmojiSelected = undefined,
                          }: EmojiMenuProps) => {

    const [showPicker, setShowPicker] = useState(false);

    function handleEmojiSelected(emoji: EmojiData) {
        if (!onEmojiSelected) {
            return;
        }
        const baseEmoji = emoji as BaseEmoji;
        if (!baseEmoji) {
            return;
        }
        onEmojiSelected(baseEmoji);
    }

    function toggleShowPicker() {
        setShowPicker(!showPicker);
    }

    // useEffect(() => {
    //     document.addEventListener("keyup", handleEscapeKeyUp, false);
    // });
    //
    // const handleEscapeKeyUp = (event: KeyboardEvent) => {
    //     setShowPicker(false);
    // }

    // const handleDocumentClick = (event: MouseEvent) => {
    //     let isEmojiClassFound = false;
    //
    //     event &&
    //     event.path &&
    //     event.path.forEach(elem => {
    //         if (elem && elem.classList) {
    //             const data = elem.classList.value;
    //             if (data.includes("emoji")) {
    //                 isEmojiClassFound = true;
    //             }
    //         }
    //     }); // end
    //     if (!isEmojiClassFound && event.target.id !== "emojis-btn"){
    //         setShowPicker(false);
    //     }
    // };

    return (
        <div className={"emoji-menu"} >
            <button className={"emoji-menu-button"} onClick={toggleShowPicker}>{label}</button>
            <div className={(showPicker) ? "emoji-menu-picker visible" : "emoji-menu-picker hidden"} >
                <NimblePicker set='twitter'
                              data={emojiDatas}
                              showSkinTones={false}
                              // showPreview={false}
                              onSelect={handleEmojiSelected}
                              theme={"dark"}
                />
            </div>
        </div>
    );
}
