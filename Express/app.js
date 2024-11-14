const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use('./static',express.static('static'));

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))
// rendring html as response

app.get("/", (req, res) => {
  res.render('demo', { title: 'Hey', message: 'Hello there!' })
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../Example1/contact.html"));
  });
  app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../Example1/about.html"));
  });

// redring complete files as a response.

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../Example1/home.html"));
// });
// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "../Example1/contact.html"));
//   });
//   app.get("/about", (req, res) => {
//     res.sendFile(path.join(__dirname, "../Example1/about.html"));
//   });


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
