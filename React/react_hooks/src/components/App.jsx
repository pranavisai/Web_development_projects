import React, {useState} from "react";

function App() {

  const now = new Date(). toLocaleTimeString();
  const [Time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
