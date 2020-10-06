import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Announcements.css"; 

function Announcements() {

const handleSubmit = (e) => {
    e.preventDefault(); 
}
    return (
        <div className = "announcements">
            {/*Announcements/feed */}

            {/*Header top /chat box with avatar*/}
            <div className = "announcements_header">
                <Avatar></Avatar>
                <form>
                    <input type= "textarea"className = "announcement_input"placeholder = "Woof Woof"></input>
                    <button onClick = {handleSubmit} type = "submit"> Hidden submit</button>
                    
                </form>
            </div>
            
            
            {/*Header bottom /img url/gif/emoji bank??*
            <div className = "announcements_bottom">
                <form>
                    <input placeholder = "Image/Emoji"></input>
            </form>

            </div>*/} 
            
        </div>
    )
}

export default Announcements
