require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();


// --------- connect with databse  ---------
require("./db/connect");
const User = require("./models/usersContacts");
const { count } = require("console");



const port = process.env.PORT || 3000;



// ------- set youe page path  -------------
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");


// ------------  permission to show data from databse  ---------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));    /* here to encode your data don't show undefine */


app.use(express.static(static_path));



// ------- here set path views index file  ---------
app.set("view engine", "hbs");
app.set("views", template_path);    



// --------- Get index file  -----------
app.get("/", (req, res) => {
    res.render("index");
});



// ----------  Get contact file  ----------
app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/project", (req, res) => {
    res.render("project");
})



// create a new user in our database
app.post("/contact", async (req, res) => {
    try {

        const user = new User({
            userName: req.body.user_name,
            userEmail : req.body.user_email, 
            userMessage : req.body.text_area
        })

         
        const username = await user.save();
        setTimeout(()=> res.status(201).render("index"), 3000)
        

    } catch (error) {

        res.status(400).send(error);
    }
});


app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
});
