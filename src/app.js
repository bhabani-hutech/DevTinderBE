// const express = require("express");

// const app = express();

// // this will be used for all the routes which are matched with hello route
// app.use("/hello/2", (req, res) => {
//   res.send("Handling hello 2");
// });
// app.use("/hello", (req, res) => {
//   res.send("Hello World");
// });
// // this will be used for all the routes which are matched with test route
// app.use("/test/123", (req, res) => {
//   res.send("Hello World i am in testing and 123 route");
// });
// app.use("/test", (req, res) => {
//   res.send("Hello World i am in testing");
// });

// // this will be used for all the routes which are not defined above
// // this is a catch all route, so if you put this at the end of the file
// // it behaves like a wildcard
// app.use("/", (req, res) => {
//   res.send("Hello from dashboard");
// });

// //order of the routes matters a lot
// app.listen(7000, () => {
//   console.log("server started successfully");
// });

// Here we will see how the different methods with same same route name works differntly

const express = require("express");

const app = express();

// this will be used for all the routes which are matched with hello route
// if do a get apicall to user it should give the data of user from the database
// if do a post apicall to user it should create a new user in the database

// this will match only get HTTP method api calls to /user route

// app.use("/user", (req, res) => {
//   res.send("HAHAHAHAHAHAHHAHAH");
// }); should not present in the upper part of the code just attach it to the below code
app.get("/user", (req, res) => {
  res.send({ firstName: "Bhabani", lastName: "Sahu" });
});
app.post("/user", (req, res) => {
  console.log("User created successfully");
  // saved data to DB
  // here we will create a new user in the database
  res.send({ message: "User created successfully" });
});

app.delete("/user", (req, res) => {
  console.log("User deleted successfully");
  // delete user from DB
  res.send({ message: "User deleted successfully" });
});
app.patch("user",(req,res)=>{
    console.log("User updated successfully")
    // update user from DB
    res.send({ message: "User updated successfully" });
})
app.use("/user", (req, res) => {
  res.send("HAHAHAHAHAHAHHAHAH");
});

// this will match all the HTTP method api calls to /user route
app.use("/hello/2", (req, res) => {
  res.send("Handling hello 2");
});

//order of the routes matters a lot
app.listen(7000, () => {
  console.log("server started successfully");
});
