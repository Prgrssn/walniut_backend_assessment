const fs = require("fs");
const express = require("express");
const app = express();

let posts = [];
const tags = ["tech", "science", "health", "history"];

const promises = tags.map((tag) => {
  app.get(`https://api.hatchways.io/assessment/blog/posts?${tag}`);
});

Promise.all(promises)
  .then(function (posts) {
    posts.forEach((post) => {
      console.log(post);
      // posts.push(post);
      // fs.writeFile("./data/data.json", JSON.stringify(posts), (err) => {
      //   if (err) {
      //     console.log(err);
      //     return;
      //   } else {
      //     console.log("success!");
      //     return;
      //   }
      // });
    });
  })
  .catch((err) => console.log(err));

// tags.map((tag) => {
//   console.log(tag);
//   app.get(
//     `https://api.hatchways.io/assessment/blog/posts?${tag}`,
//     (req, res) => {
//       let fetchedPosts = res.posts;
//       console.log(fetchedPosts);
//         posts.push(fetchedPosts);
// fs.writeFile("./data/data.json", JSON.stringify(posts), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success!");
//   }
// });
//     }
//   );
// });

// console.log(posts);

app.get("/api/ping", (_req, res) => {
  res.status(200).json({ success: true });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
