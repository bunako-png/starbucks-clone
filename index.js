require('dotenv').config()

const express = require("express");
const path = require("path");
const menuData = require("./models/menuData"); //For menu data import

const app = express();

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render('pages/home', { pageTitle: 'Starbucks - Home'});
})

app.get("/about", (req, res) => {
    res.render("pages/about", { pageTitle: "Starbucks - About" });
})

//Add route that listens for request to /menu and Sends the menu categories to the template as menuData.
app.get("/menu", (req, res) => {
  res.render("pages/menu", {pageTitle: "Starbucks - Menu" });
})


app.listen(PORT, () => {
    console.log(`Server is now live on: http://127.0.0.1:${PORT}/`);
})
