// EMOJIS=$(curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/emojis)
// echo $(PWD)/assets/data/emoji-names.json

interface EmojiNames {
    [x: string]: string;
}

export async function getEmojiNames() {
    const response = await fetch("https://api.github.com/emojis");
    const data = await response.json() as EmojiNames;
    const regex = /(?<=\/)([^\/])*(?=\.png)/ig

    Object.keys(data)
        .forEach(k => {
            const found = data[k].match(regex);
            if (found && found.length === 1) {
                data[k] = found[0];
            } else {
                data[k] = "";
            }
        })

    return data;
}
