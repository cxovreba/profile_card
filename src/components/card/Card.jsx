import React from "react";
import './card.css';
import Title from "../Title/H1";
import Img from "../img/Img";
import Line from "../line/Line";
import Bio from "../bio/Bio";
import SocMedia from "../soc-media/Soc-media";
import SubTitle from "../sub-title/Sub-title";

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