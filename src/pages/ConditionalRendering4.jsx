import React,{useState} from "react";
function conditionalRendering4(){
const [status,setStatus]=useState();

return( 
    <div className="flex items-center justify-center ">
        <button onClick={()=>setStatus(true)} className="px-2 py-2 bg-red-400 rounded-xl hover:scale-110">True</button>
        <button onClick={()=>setStatus(false)} className="px-2 py-2 bg-red-400 rounded-xl ml-12 hover:scale-110 ">False</button>


    <h2>
        {status ==true ? "Success":"False"}
    </h2>
        </div>
  );
}

export default conditionalRendering4;