import React from "react";
function Greeting(props){
  return <h1>Hii {props.name},{props.age}</h1>;  
}
function Props(){
    return (
        <>
        <Greeting name="Zaid"  age="21"/>
        <Greeting name="12" age="22"/>
        
        </>
    )
}
export default Props;