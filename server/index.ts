import express from "express";
import exampleData from "./exampleData.json";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

const simulateDateFetching = async (delay: number) => {
  await new Promise(r => setTimeout(r, delay));
  return exampleData;
};

app.get("/api/posts", async (req, res) => res.send(await simulateDateFetching(200)));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
