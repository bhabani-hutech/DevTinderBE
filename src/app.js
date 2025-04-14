const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Bhabani", lastName: "Sahu" });
});
app.listen(7000, () => {
  console.log("server started successfully");
});
