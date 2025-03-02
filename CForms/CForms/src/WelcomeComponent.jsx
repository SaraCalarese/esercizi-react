import { useState } from "react";

// Welcome Component
function Welcome({ name }) {
  return <p>Welcome, {name}!</p>;
}

// InteractiveWelcome Component
function InteractiveWelcome() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <Welcome name={name} />
    </div>
  );
}

export { Welcome, InteractiveWelcome };
