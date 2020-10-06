import React from 'react';
import "./Sidebar.css";
import Row from "./Row";
import ChatIcon from '@material-ui/icons/Chat'; 
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


function Sidebar() {
    return (
        <div className = "sidebar">
            <Row src="https://img.icons8.com/bubbles/50/000000/dog.png" title = "Sabrina"> </Row>
            <Row Icon = {ChatIcon} title = "Chat"></Row>
            <Row Icon = {EmojiPeopleIcon} title = "Friends"></Row>
            
        </div>
    )
}

export default Sidebar
 