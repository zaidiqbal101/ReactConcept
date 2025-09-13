import React,{useState} from "react";
function Topics2(){
    const[name,setName]=useState("");
   return (
    <>
    <div>
        <input 
        type="text"
        placeholder="Enter value"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <h2>that is:{name}</h2>
    </div>
    <div>
        
    </div>
    </>
   );
}
export default Topics2;
//useState event target 