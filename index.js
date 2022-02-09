const fs = require("fs");
const express = require("express");
const { request } = require("http");
const https = require("https");
const { callbackify } = require("util");
const app = express();

let posts = [];
const tags = ["tech", "science", "health", "history"];

// (async function () {
//   await Promise.all(
//     tags.map(async (tag) => {
//       const response = await fetch(
// `https://api.hatchways.io/assessment/blog/posts?${tag}`
//       );
//       const post = await response.json();
//       console.log(typeof response);
//     })
//   );
// });

function getPosts() {
  tags.map((tag) => {
    https.get(
      `https://api.hatchways.io/assessment/blog/posts?${tag}`,
      function (err, response, body) {
        if (err) {
          console.log(err);
          callbackify(err);
        } else {
          let posts = JSON.parse(body);
          console.log(posts);
        }
      }
    );
  });
}

getPosts();

// Promise.all(promises)
//   .then(function (posts) {
//     posts.forEach((post) => {
//       posts.push(post);
//       fs.writeFile("./data/data.json", JSON.stringify(posts), (err) => {
//         if (err) {
//           console.log(err);
//           return;
//         } else {
//           console.log("success!");
//           return;
//         }
//       });
//     });
//   })
//   .catch((err) => console.log(err));

// tags.map((tag) => {
//   console.log(tag);
//   app.get(
// `https://api.hatchways.io/assessment/blog/posts?${tag}`,
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

app.get(`https://api.hatchways.io/assessment/blog/posts?tech`, (req, res) => {
  posts = JSON.stringify(res);
  console.log(posts);
});

app.get("/api/ping", (_req, res) => {
  res.status(200).json({ success: true });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
