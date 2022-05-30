import React from 'react'
import {NimbleEmoji} from "emoji-mart";
import emojiDatas from 'emoji-mart/data/twitter.json';
import {MarkdownRules, rules, toHTML} from "discord-markdown";
import SimpleMarkdown from 'simple-markdown';
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

    const customRules: MarkdownRules = Object.assign(rules, {
            discordEmoji: {
                order: SimpleMarkdown.defaultRules.strong.order,
                match: (source: string) => /^(:\w+:)/.exec(source),
                parse: (capture: SimpleMarkdown.Capture) => {
                    return {
                        emoji: capture[1],
                    };
                },
                html: (node: SimpleMarkdown.SingleASTNode, output: SimpleMarkdown.Output<string>, state: SimpleMarkdown.State) => {
                    const emoji: string = node.emoji;
                    return String(
                        NimbleEmoji({
                            html: true,
                            set: `twitter`,
                            data: emojiDatas,
                            emoji: emoji,
                            size: 21,
                            children: emoji,
                        })
                    )
                }
            }
        });

    // @ts-ignore
    const parser = SimpleMarkdown.parserFor(customRules);
    const htmlOutput = SimpleMarkdown.outputFor(customRules, 'html')

    return (
        <div className={"content"}>
            <div className={"content-line"} />
            <div className={"content-body"}>
                <h1 className={"content-title"} >
                    <strong children={title} />
                </h1>
                <div className={"content-description"}
                     dangerouslySetInnerHTML={{__html: toHTML(description, {}, parser, htmlOutput)}} />
                <img className={"content-image"} src={imageUrl} alt={"Missing Image"}/>
            </div>
        </div>
    )
}
