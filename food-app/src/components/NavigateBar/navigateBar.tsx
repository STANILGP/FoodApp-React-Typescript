import React from "react";
import './navigateBar.css';


const NavigateBar:React.FC = () =>{
    return (
    <div className="NavigateBar">
        <ul>
                <li><h1 className="Title">My Food</h1> </li> 
                <li><input className="SearchInput"></input><button className="SearchButton">Search</button></li>
        </ul>
    </div>
    );
}

export default NavigateBar;