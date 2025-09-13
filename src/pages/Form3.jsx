import React,{useState} from "react";
function Form3(){
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");
    const [contact,setContact]=useState("");
    const handleSubmit=(e)=>{
    console.log("FORM DATA:",{name,age,email,contact});
    }
    const handleReset=(e)=>{
    setName("");
    setAge("");
    setEmail("");
    setContact("");
    }
    return (
        <>
        <div>
            <label>Name:</label>
            <input type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)} 
            required/>
        </div>
        <div>
            <label>AGE:</label>
            <input type="number"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            required/>
        </div>
        <div>
            <label>Email:</label>
            <input type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required/>
        </div>    
        <div>
            <label>Contact:</label>
            <input type="tel"
            value={contact}
            onChange={(e)=>setContact(e.target.value)}
            required/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default Form3;