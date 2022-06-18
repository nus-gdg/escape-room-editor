import React, {ChangeEvent, useCallback, useEffect, useRef, useState} from "react";
import {BaseEmoji, EmojiData, NimblePicker} from "emoji-mart";
import emojiDatas from 'emoji-mart/data/twitter.json';
import 'emoji-mart/css/emoji-mart.css';
import "./MarkdownTextarea.css";

interface MarkdownTextareaProps {
    value: string,
    placeholder?: string,
    showEmojiMenu?: boolean,
    showEmojiMenuIcon?: string,
    hideEmojiMenuIcon?: string,
    maxRows?: number,
    className?: string,
    onChange?: (updatedValue: string) => void,
}

const MarkdownTextarea = (
    {
        value,
        placeholder = "",
        showEmojiMenu = true,
        showEmojiMenuIcon = String.fromCodePoint(0x1F642),
        hideEmojiMenuIcon = String.fromCodePoint(0x274C),
        maxRows = 0,
        className = "",
        onChange = () => { }
    }: MarkdownTextareaProps) => {

    console.log("MarkdownTextarea: Rendered");

    const [showPicker, setShowPicker] = useState(false);
    const [lineHeight, setLineHeight] = useState(0);

    const textareaRef = useRef<HTMLTextAreaElement>();
    const setTextareaRef = useCallback((node: HTMLTextAreaElement) => {
        if (!node) {
            return;
        }
        textareaRef.current = node;
        const style = window.getComputedStyle(node);
        const paddingTop = parseInt(style.paddingTop, 10);
        const paddingBottom = parseInt(style.paddingBottom, 10);
        setLineHeight(node.clientHeight - paddingTop - paddingBottom);
    }, []);

    function autoResize(maxRows = 0) {
        const node = textareaRef.current;
        if (!node) {
            return;
        }
        // Reset textarea height
        node.style.height = "";

        // Limit rows
        let updatedHeight: number;
        if (maxRows <= 0) {
            updatedHeight = node.scrollHeight;
        } else {
            let numExtraRows = (node.scrollHeight - node.clientHeight) / lineHeight;
            if (numExtraRows > maxRows - 1) {
                numExtraRows = maxRows - 1;
            }
            updatedHeight = node.clientHeight + numExtraRows * lineHeight;
        }

        // Update Height
        node.style.height = `${updatedHeight}px`;
    }

    function insertText(insertedText: string) {
        if (!textareaRef.current) {
            return;
        }
        // Let browser insert text to enable undo/redo
        textareaRef.current.focus();
        document.execCommand('insertText', false, insertedText);
    }

    const handleValueChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(`MarkdownTextArea(${className}): Called handleValueChanged(${event.currentTarget.value})`);
        onChange(event.currentTarget.value);
    };

    const handleEmojiButtonClicked = () => {
        setShowPicker(!showPicker);
    }

    const handleEmojiSelected = (emoji: EmojiData) => {
        const baseEmoji = emoji as BaseEmoji;
        if (!baseEmoji) {
            return;
        }
        console.log(`MarkdownTextArea(${className}): Called handleEmojiSelected(${baseEmoji.native})`);
        insertText(baseEmoji.colons);
    };

    const renderEmojiButton = () => {
        if (!showEmojiMenu) {
            return;
        }
        return (
            <button onClick={handleEmojiButtonClicked}>
                {(showPicker) ? hideEmojiMenuIcon : showEmojiMenuIcon}
            </button>
        )
    }

    const renderEmojiMenu = () => {
        if (!showEmojiMenu || !showPicker) {
            return;
        }
        console.log(`MarkdownTextArea(${className}): Rendered emoji menu`);
        return (<NimblePicker set='twitter'
                              theme={"dark"}
                              data={emojiDatas}
                              showSkinTones={false}
                              onSelect={handleEmojiSelected}
        />);
    }

    useEffect(() => {
        console.log(`MarkdownTextArea(${className}): Called autoResize`);
        autoResize(maxRows);
    });

    return (
        <div className={`markdown-textarea ${className}`} >
            <textarea
                value={value}
                placeholder={placeholder}
                ref={setTextareaRef}
                rows={1}
                onChange={handleValueChanged}
            />
            {renderEmojiButton()}
            {renderEmojiMenu()}
        </div>
    );
}

export default React.memo(MarkdownTextarea);
