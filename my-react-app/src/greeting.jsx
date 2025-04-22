import { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h2>Hello, {name || "friend"}!</h2>
      <p>Welcome to React.</p>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Greeting;
