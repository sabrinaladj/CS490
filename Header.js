import React from 'react';
import './Header.css'; 
import SearchIcon from '@material-ui/icons/Search'; 

import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

import {Avatar,IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import MessageIcon from "@material-ui/icons/Message";




function Header() {
    return <div className = "header">
       
        {/* Left Header */}
        <div className = "left_header">
        <h1>WAG </h1>
        
        <img src="https://img.icons8.com/pastel-glyph/64/000000/dog--v2.png" alt = ""/>
        </div>
        

        <div className = "search">
                <SearchIcon ></SearchIcon>
                <input  placeholder="Search WAG" type= "text"></input>
            </div>
            

        {/* Center Header */}
        <div className = "middle_header">
          
        </div>


        {/* Right Header */}
        <div className= "right_header">
            

            <div className = "bell">
                <NotificationsActiveIcon></NotificationsActiveIcon>
            </div>

            <div className= "info">
                <Avatar></Avatar>
                <h4> WAG Member</h4>
                
            </div>
            <IconButton>
                <AddIcon></AddIcon>
            </IconButton>

            <IconButton>
                <MessageIcon></MessageIcon>
            </IconButton>

           
            

        </div>

    </div>;
    
}


export default Header; 