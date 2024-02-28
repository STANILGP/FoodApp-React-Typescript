import React from "react";
import './Box.css';

type Props = {
    label: string;
    imgString: string;
    altString: string;
    description:string;
};

const Box:React.FC<Props> = ({label,imgString,altString,description})=>{
    return (
    <div className="Box">
                <img src={imgString} alt={altString}></img>
                <h1>{label}</h1>
                <p>{description}</p>
          </div>
    );
};

export default Box;