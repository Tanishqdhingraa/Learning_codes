import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("MVC Server Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
