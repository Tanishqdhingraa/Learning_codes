import express from "express";
import cors from "cors"
const app = express();

// Root route
app.get("/", (req, res) => {
  console.log("SERVER IS RUNNING");
  res.json({ message: "It's running completely fine brother!" });
});

app.use(cors())

// Jokes data
const jokes = [
  { id: 1, joke: "Why don't programmers like nature? It has too many bugs." },
  { id: 2, joke: "Why do Java developers wear glasses? Because they can't C#." },
  { id: 3, joke: "What is a programmer’s favorite hangout place? Foo Bar." },
  { id: 4, joke: "Why was the JavaScript developer sad? Because he didn’t Node how to Express himself." },
  { id: 5, joke: "How many programmers does it take to change a light bulb? None, it's a hardware problem." }
];

// /jokes route
app.get("/api/jokes", (req, res) => {
  res.json({
    success: true,
    count: jokes.length,
    data: jokes
  });
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
