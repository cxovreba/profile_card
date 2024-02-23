import React from "react";
import './card.css';
import Title from "../Title/title";
import Img from "../Image/Image";
import Line from "../line/Line";
import Bio from "../status/status";
import SocMedia from "../socialMedia/socialMedia";
import SubTitle from "../subtitle/subTitle";

const Card = () => { 
    return (
        <div className="card">
            <div className="color"></div>
            <Img />
            <Title text="Giorgi Tskhovrebashvili" />
            <SubTitle text='future Web Developer'/>
            <Line />
            <Bio text='I like web-development, because i like creating something new and working on the tasks'/>
            <SocMedia />
        </div>
    )
}

export default Card;