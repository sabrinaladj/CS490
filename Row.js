import React from 'react';
import {Avatar} from "@material-ui/core";
import "./Row.css"

function Row({src, Icon, title}) {
    return (
        <div className = "Row">
            {src && <Avatar src ={src}></Avatar>}
            {Icon && <Icon></Icon>}

            <h5>{title}</h5>
            
        </div>
    )
}

export default Row

