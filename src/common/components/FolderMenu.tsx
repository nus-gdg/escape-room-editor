import React from "react";
// import Symbols from "../../constants/Symbols";
// import ListItem from "./ListItem";
// import ListTitle from "./ListTitle";
// import "./List.css";
// import FolderTitle from "./Folder";
//
// interface FolderProps {
//     title: string,
//     items: string[],
//     open?: boolean,
//     className?: string,
//     isSelected?: (item: string) => boolean,
//     onToggle?: () => void,
//     onAddSubfolder?: () => void,
//     onRemoveSubfolder?: (option: string) => void,
//     onSelectFolder?: (option: string) => void,
// }
//
// const FolderMenu = (
//     {
//         title = "LIST",
//         items = [],
//         open = true,
//         className = "",
//         isSelected = () => false,
//         onToggle,
//         onAddSubfolder,
//         onRemoveSubfolder,
//         onSelectFolder,
//     }: FolderProps) => {
//     console.log(`List: Rendered: ${title}`);
//     return (
//         <div className={`list ${className} ${(open) ? "" : "hide"}`}>
//             <FolderTitle
//                 title={title}
//                 toggleIcon={open ? Symbols.downArrow : Symbols.rightArrow}
//                 addListItemIcon={Symbols.plus}
//                 onToggle={onToggle}
//                 onAddListItem={onAddSubfolder} />
//             {items.map(item => {
//                 return (
//                     <ListItem
//                         key={item}
//                         item={item}
//                         selected={isSelected(item)}
//                         onRemoveListItem={onRemoveSubfolder}
//                         onSelectListItem={onSelectFolder} />
//                 )})}
//         </div>
//     );
// }
//
// export default React.memo(FolderMenu);
