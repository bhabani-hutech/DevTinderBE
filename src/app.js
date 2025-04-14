const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello World");
});

app.use("/test", (req, res) => {
  res.send("Hello World i am in testing");
});

app.use("/", (req, res) => {
  res.send("Hello from dashboard");
});

// order of routing matters a lot
app.listen(7000, () => {
  console.log("server started successfully");
});
