import { useState } from "react";
function Greeting(){
  const [name , setName]= useState("");
  function handleInputChange(event){setName(event.target.value);
  }
  function clearName(){
    setName("");
  }
  return(
    <div>
    <h2>Hello, {name|| "friend"}!</h2>
    <input type="text" onChange={handleInputChange} placeholder="Enter your name" />
  </div>
  );
}
export default Greeting;