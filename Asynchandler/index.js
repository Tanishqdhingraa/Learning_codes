import express from 'express';
import asyncHandler from 'express-async-handler';

const app = express();
const port = 3000;

app.use(express.json());

app.get(
  "/",
  asyncHandler(async (req, res) => {
    const name = req.query.name || "Guest";

    // Simulating async work (like DB call)
    await new Promise(resolve => setTimeout(resolve, 500));

    // console.log(`Hello ${name}, how are you`);
    res.status(200).json({ message: `Hello ${name}, how are you` });
  })
);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
