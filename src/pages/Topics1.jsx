import React from "react";
import {useState} from "react";
function Topics1(){
    const[cnt,setcnt]=useState(1);
    return (
    <div>
        <h2>Count:{cnt}</h2>
        <button onClick={()=>setcnt(cnt+1)}>+</button>
        <button onClick={()=>setcnt(cnt-1)}>-</button>
        <button onClick={()=>setcnt(0)}>R</button>
    </div>
    );
}
export default Topics1;