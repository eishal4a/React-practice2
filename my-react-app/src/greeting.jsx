import { useState } from "react";
import {motion} from "framer-motion";

function Greeting() {
  const [name, setName] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function clearName() {
    setName("");
  }

  return (
    <div style={styles.Container}> 
    <motion.h2 
    style={styles.heading}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    key={name} >
    Hello, {name || "friend"}</motion.h2>
      <p style={styles.subtext}>Welcome to React!</p> 
      <input
        type="text"
        placeholder="Enter text here..."
        onChange={handleInputChange}
        value={name}
        style={styles.input} 
      />
      <button style={styles.button} onClick={clearName}>Clear</button> 
    </div>
  );
}

const styles = {
  Container: {
    padding: "2rem",
    maxWidth: "400px",
    margin: "2rem auto",
    textAlign: "center",
    borderRadius: "10px",
    backgroundColor: "#f0f4ff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    color: "#333",
  },
  subtext: {
    color: "#666",
    marginBottom: "1rem",
  },
  input: {
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    width: "80%",
    marginBottom: "1rem",
  },
  button: {
    padding: "0.5rem 1.2rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Greeting;
