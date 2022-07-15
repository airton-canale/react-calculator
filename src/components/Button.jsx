import React from "react";
import "./Button.css";


const Button = ({ operation, double, triple, click, label }) => {
    
    return (
        <button 
        onClick={e => click(label)}
        className={`button
        ${operation ? "operation" : ""}
        ${double ? "double" : ""}
        ${triple ? "triple" : ""}
        `}>
      {label}</button>  
    )
}
 

export default Button



