import {RoomData} from "../rooms";
import {
    AppBar,
    Checkbox,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Tab,
    Tabs,
    Toolbar,
    Tooltip,
} from "@mui/material";
import { RoomsState } from "../rooms/slice";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FlagIcon from '@mui/icons-material/Flag';
// import HandymanIcon from '@mui/icons-material/Handyman';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from "@mui/icons-material/Settings";
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';
// import TextFieldsIcon from '@mui/icons-material/TextFields';
// import ChatIcon from '@mui/icons-material/Chat';

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddCommentIcon from '@mui/icons-material/AddComment';

import React, {ReactElement, ReactNode, useCallback} from "react";
import {createUuid} from "../constants";
import { addRoom } from "../rooms/actions";
import {useDispatch} from "../app";
import ReactFlow, {
    Node,
    addEdge,
    Background,
    Edge,
    Connection,
    useNodesState,
    useEdgesState } from "reactflow";

import Flow, {FlowProps} from "../flow/Flow";
import {NodeType} from "../flow/utils";

const data2: FlowProps = {
    nodes: [{id: "0", type: NodeType.Root, data: {}, position: {x: 0, y: 0}, deletable: false, draggable: false}],
    edges: [],
}

export interface RoomsMenuProps {
    data: RoomsState,
}

export const RoomsMenu = ({data}: RoomsMenuProps) => {
    const dispatch = useDispatch();

    function handleClickRoom(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        console.log("clicked");
    }

    function handleSelectRoom(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        console.log("select");
    }

    function handleEditRoom(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        console.log("edit");
    }

    function handleAddRoom(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        const room: RoomData = {
            id: createUuid(),
            title: "New",
        }
        dispatch(addRoom({
            id: createUuid(),
            title: "New",
        }));
        console.log(room);
    }

    function renderTab(title: string, icon: ReactElement) {
        return (
            <Tab label={
                <Tooltip placement={"right"} title={title}>
                    {icon}
                </Tooltip>
            }/>
        )
    }

    function renderRoom(room: RoomData) {
        return (
            <ListItemButton key={room.id} onClick={handleClickRoom} disableRipple>
                <Checkbox onClick={handleSelectRoom} disableRipple/>
                <ListItemText primary={room.title}/>
                <IconButton onClick={handleEditRoom}>
                    <EditIcon/>
                </IconButton>
            </ListItemButton>
        );
    }

    const initialNodes: Node[] = [
        {
            id: "1",
            type: "input",
            data: {label: "Node 1"},
            position: {x: 250, y: 5}
        },
        {id: "2", data: {label: "Node 2"}, position: {x: 100, y: 100}},
        {id: "3", data: {label: "Node 3"}, position: {x: 400, y: 100}},
        {id: "4", data: {label: "Node 4"}, position: {x: 400, y: 200}}
    ];

    const initialEdges: Edge[] = [
        {id: "e1-2", source: "1", target: "2", animated: true},
        {id: "e1-3", source: "1", target: "3"}
    ];

    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
        [setEdges]
    );

    function renderFlow() {
        return (
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Background/>
            </ReactFlow>
        )
    }

    function renderTabs() {
        return (
            <Tabs value={0} orientation="vertical">
                {renderTab("Rooms", <OtherHousesIcon/>)}
                {renderTab("Items", <SportsBaseballIcon/>)}
                {renderTab("Flags", <FlagIcon/>)}
                {renderTab("Settings", <SettingsIcon/>)}
            </Tabs>
        )
    }

    function renderList() {
        return (
            <List dense sx={{width: "400px"}}>
                <ListItem>
                    <Checkbox onClick={handleSelectRoom} disableRipple/>
                    <ListItemText primary={"ROOMS"}/>
                    <IconButton onClick={handleAddRoom}>
                        <AddIcon/>
                    </IconButton>
                </ListItem>
                <Divider/>
                {Object.values(data).map(renderRoom)}
            </List>
        )
    }

    function renderNavigation() {
        return (
            <div style={{width: "30%", display: "flex", flexDirection: "row"}}>
                <Tabs value={0}  orientation="vertical">
                    {renderTab("Rooms", <OtherHousesIcon />)}
                    {renderTab("Items", <SportsBaseballIcon />)}
                    {renderTab("Flags", <FlagIcon />)}
                    {renderTab("Settings", <SettingsIcon />)}
                </Tabs>
                {/*<Typography variant={"h5"} sx={{flexGrow: 1}}>*/}
                {/*    Rooms*/}
                {/*</Typography>*/}
                <List dense sx={{flexGrow: 1}}>
                    <ListItem>
                        <Checkbox onClick={handleSelectRoom} disableRipple/>
                        <ListItemText primary={"ROOMS"}/>
                        <IconButton onClick={handleAddRoom}>
                            <AddIcon/>
                        </IconButton>
                    </ListItem>
                    <Divider/>
                    {Object.values(data).map(renderRoom)}
                </List>
            </div>
        )
    }

    function renderAppBar() {
        return (
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <PublicIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }

    return (
        <div style={{height: "100%", display: "flex", flexDirection: "column",}}>
            {renderAppBar()}
            <div style={{display: "flex", flexDirection: "row", flexGrow: 1}}>
                {renderTabs()}
                {renderList()}
                {/*{renderFlow()}*/}
                <Flow nodes={data2.nodes} edges={data2.edges} />
            </div>
        </div>
    )
}
