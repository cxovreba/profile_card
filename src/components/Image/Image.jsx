import './Image.css';
import React from 'react';
import logo from './images.png';

const Img = () => {
    return (
        <div className="img-container">
            <img className='profile-img' src={logo} alt="" />
        </div>
    )
}

export default Img;