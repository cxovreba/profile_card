import './title.css';
import React from 'react';

const Title = (props) => {
    return (
        <div className='title'>
            <h1 className='h1'>{props.text}</h1>
        </div>
    )
}

export default Title;