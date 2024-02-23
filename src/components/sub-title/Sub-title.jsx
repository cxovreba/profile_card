import './subtitle.css';
import React from 'react';

const SubTitle = (props) => {
    return (
        <div className="sub-title">
            <h3 className="h2">{props.text}</h3>
        </div>
    )
}

export default SubTitle;