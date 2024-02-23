import React from "react";
import './bio.css';

const Bio = (props) => {
    return (
        <div className="bio">
            <p className="text">{props.text}</p>
        </div>
    )
}

export default Bio;