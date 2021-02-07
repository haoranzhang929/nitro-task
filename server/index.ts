import express from "express";
import exampleData from "./exampleData.json";
import type { ListData } from "../client/src/common/models";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

const simulateDateFetching = async (delay: number): Promise<ListData[]> => {
  await new Promise(r => setTimeout(r, delay));
  // Convert 10-digit timestamp to 13-digit
  return exampleData.map(d => ({ ...d, time: Number(d.time) * 1000 }));
};

app.get("/api/posts", async (req, res) => res.send(await simulateDateFetching(200)));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
