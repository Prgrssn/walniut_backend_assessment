var express = require("express");
var app = express();

app.get("/post", (_req, res) => {
  app.get(
    "https://api.hatchways.io/assessment/blog/posts?tag=tech",
    (_req, res) => {
      res.json(res);
    }
  );
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
