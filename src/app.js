const express = require("express");

const app = express();
// Now we will see more advance concepts of routing
// if we will put ? after b then here b is optional for this route
// if we will put * in the path then it will accept any value after the path

// This below syntax is not working for newer version of express
// app.get("/ab?c", (req, res) => {
//   res.send({ firstName: "Bhabani", lastName: "Sahu" });
// });
// so use this it will work for  (/ac /abc)
app.get(/^\/ab?c$/, (req, res) => {
  res.send({ firstName: "Bhabani", lastName: "Sahu" });
});

// simillarly we can use + in the path  it will work for  (/abc /abbc /abbbc) will not work for (/ac /abbd)
app.get(/^\/ab+c$/, (req, res) => {
  res.send({ firstName: "Bhabani", lastName: "Sahu" });
});

// simillarly we can use * in the path  it will work for (/acd /abcd /abbcd /abbbcd /abbbbbbbbbcd) will not work for (/abce /abc /aabcd)
app.get(/^\/ab*cd$/, (req, res) => {
  res.send({ firstName: "Bhabani", lastName: "Sahu" });
});

// by grouping this it will work for (/ad) here bc is optional
app.get(/^\/a(bc)+d$/, (req, res) => {
  res.send({ firstName: "Bhabani", lastName: "Sahu" });
});

//   regex use
// it will work for those strings which contains a in it
app.get(/a/, (req, res) => {
  res.send({ firstName: "Bhabani", lastName: "Sahu" });
});
//    it will work for those strings which contains fly at the end of the string
app.get(/.*fly$/, (req, res) => {
  res.send({ firstName: "Bhabani", lastName: "Sahu" });
});

app.get("/user", (req, res) => {
    console.log(req.query); // it will give the query params in the url this way we can read the query params
    res.send({ firstName: "Bhabani", lastName: "Sahu" });
  });
// if we want to make the route dynamic then we can use this way
app.get("/user/:id", (req, res) => {
  console.log(req.params); // it will give the params in the url this way we can read the params
  res.send({ firstName: "Bhabani", lastName: "Sahu" });
});
app.listen(7000, () => {
  console.log("server started successfully");
});
