import Data from "./data/data";
import Editor from "./editor/editor";
import dataEx1 from "./data/data-ex-1";

export default class Store {
    data: Data = dataEx1;
    editor: Editor = new Editor();
}
