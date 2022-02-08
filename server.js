const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
PORT = 8080;

app.use(cors());
app.use(express.json());

API_URL = `http://localhost:${PORT}`;

app.get(
  "https://api.hatchways.io/assessment/blog/posts?tag=tech",
  (req, res) => {
    res.json(res.body);
  }
);

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});
