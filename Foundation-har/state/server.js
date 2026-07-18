const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/todos", (req, res) => {
  res.json({
    todos: [
      {
        id: 1,
        title: "Learn JavaScript",
        description: "Practice DOM"
      },
      {
        id: 2,
        title: "Learn React",
        description: "Understand State"
      },
      {
        id: 3,
        title: "Build Campus Connect",
        description: "Full Stack Project"
      }
    ]
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});