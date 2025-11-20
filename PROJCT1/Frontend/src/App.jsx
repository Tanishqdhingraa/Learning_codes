import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const res = await axios.get("/api/jokes");
        setJokes(res.data.data); // jokes array
      } catch (err) {
        console.error("Error fetching jokes:", err);
      }
    };

    fetchJokes();
  }, []);

  return (
    <>
      <h1>CHAI OR CODE</h1>
      <p>Total Jokes: {jokes.length}</p>

      {jokes.map((item, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <strong>Joke {index + 1}:</strong> {item.joke}
        </div>
      ))}
    </>
  );
}

export default App;
