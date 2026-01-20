import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleClick = () => {
    alert(`Hello ${name || "Guest"}! Welcome to AIMaster.live 🚀`);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Hello AIMaster.live 🌍</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}
      />

      <br />

      <button onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default App;
