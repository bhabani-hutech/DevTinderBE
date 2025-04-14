const express = require("express");

const app = express();

// this will be used for all the routes which are matched with hello route
app.use("/hello/2", (req, res) => {
  res.send("Handling hello 2");
});
app.use("/hello", (req, res) => {
  res.send("Hello World");
});
// this will be used for all the routes which are matched with test route
app.use("/test/123", (req, res) => {
  res.send("Hello World i am in testing and 123 route");
});
app.use("/test", (req, res) => {
  res.send("Hello World i am in testing");
});

// this will be used for all the routes which are not defined above
// this is a catch all route, so if you put this at the end of the file
// it behaves like a wildcard
app.use("/", (req, res) => {
  res.send("Hello from dashboard");
});

//order of the routes matters a lot
app.listen(7000, () => {
  console.log("server started successfully");
});
