import {MarkdownRules, rules, toHTML} from "discord-markdown";
import {NimbleEmoji} from "emoji-mart";
import emojiDatas from 'emoji-mart/data/twitter.json';
import SimpleMarkdown from "simple-markdown";

const createDiscordEmoji = (shortcode: string = ":warning:", size: number = 21) => {
    return String(
        NimbleEmoji({
            html: true,
            set: `twitter`,
            data: emojiDatas,
            size: size,
            emoji: shortcode,
            children: shortcode,
        })
    )
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
            const shortcode: string = node.emoji as string;
            if (!shortcode) {
                return createDiscordEmoji();
            }
            return createDiscordEmoji(shortcode);
        }
    }
});

// @ts-ignore
const parser = SimpleMarkdown.parserFor(customRules);
const htmlOutput = SimpleMarkdown.outputFor(customRules, 'html')

export function toDiscordHTML(source: string) {
    return toHTML(source, {}, parser, htmlOutput);
}
