import react from "react";
import { useState, useEffect } from "react";
function UseEffect4() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("Hii its rendering ");
  },[count]);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)} className="px-2 py-2 rounded bg-red-400">Increase</button>
      <buttton onClick={()=>setCount(0)} className="px-2 py-2 rounded bg-red-400 ml-6">Reset</buttton>
    </div>
  )
}
export default UseEffect4;