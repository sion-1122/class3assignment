import React from "react";
export const Card =(props:{name:string, rollno:number, day:string})=>{
    return(
        <>
        <h1>name: {props.name}</h1>
        <h1>rollno: {props.rollno}</h1>
        <h1>day: {props.day}</h1>
        </>
    )
}
