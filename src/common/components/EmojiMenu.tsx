import React, {useState} from 'react'
import {Button} from '@chakra-ui/react'
import 'emoji-mart/css/emoji-mart.css';
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

    return (
        <>
            <Button onClick={toggleShowPicker}>
                {label}
            </Button>
            <NimblePicker set='twitter'
                          data={emojiDatas}
                          showSkinTones={false}
                          onSelect={handleEmojiSelected}
                          style={{
                              position: "absolute",
                              top: "50%",
                              zIndex: 1,
                              visibility: (showPicker) ? "visible" : "hidden",
                              opacity: (showPicker) ? 1 : 0,
                              transition: "opacity 0.2s, visibility 0.2s"}} />
        </>
    );
}
