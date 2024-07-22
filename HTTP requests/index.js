import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello from my server</h1>");
});


app.get("/about", (req, res) => {
  res.send("<h2>About me</h2><p>My name is Inna</p> ");
});


app.get("/contact", (req, res) => {
  res.send("<h3>Contact me</h3><p>My email: turorainna@gmail.com</p>");
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});