// EMOJIS=$(curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/emojis)
// echo $(PWD)/assets/data/emoji-names.json

// import {render} from "./test-utils";
// import {App} from "./pages/App";
// import {screen} from "@testing-library/react";
// import React from "react";
import {getEmojiNames} from "./getEmojiNames";

test("Get Emoji Names", () => {
    return getEmojiNames().then(data => console.log(data));
})
