import React from 'react'
import {
  Menu,
  MenuList,
  MenuButton,
  Button
} from '@chakra-ui/react'

import 'emoji-mart/css/emoji-mart.css';
import {BaseEmoji, EmojiData, Picker,} from 'emoji-mart';

interface EmojiMenuProps {
  onEmojiSelected?: ((emoji: BaseEmoji) => void)
}

export const EmojiMenu = ({onEmojiSelected = undefined}: EmojiMenuProps) => {
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

  return (
      <Menu>
        <MenuButton as={Button}>
          Emojis
        </MenuButton>
        <MenuList>
          <Picker set='twitter'
                  showSkinTones={false}
                  onSelect={handleEmojiSelected}/>
        </MenuList>
      </Menu>
  );
}
