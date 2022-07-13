import React from "react";
import "./Button.css";


const Button = ({ operation, double, triple, click, label }) => {
    
    return (
        <button 
        onClick={e => click({label})}
        className={`button
        ${operation ? "operation" : ""}
        ${double ? "double" : ""}
        ${triple ? "triple" : ""}
        `}>
      {label}</button>
    )
}
// const Button = ({ operation, double, triple, click, label }) => {
//     let classes ='button'
//     classes =+ {operation} ? "operation" : ""
//     classes =+ {double} ? "double" : ""
//     classes =+ {triple} ? "triple" : ""

//     return (
//         <button 
//         onClick={e => click({label})}
//             className={classes}>
//             {label}
//         </button>
//     )
// }        

export default Button



