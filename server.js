const express = require("express");
const mongoose = require("mongoose");

//CORS is a node.js package for providing a Connect/Express middleware 
//that can be used to enable CORS with various option
const cors = require("cors");

//information comes to the server in json format
//to convert it to java script >>
const bodyParser = require("body-parser");
const { json } = require("body-parser");

const app = express ();

//import routes
const postRoutes = require("./routes/posts");

//app middlewares
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);


//backend server
const PORT = 8000;

const DB_URL = 'mongodb+srv://Dim1:Mong198@mernapp.bvs87.mongodb.net/Mern-CRUD?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true ,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB Connected");
})

.catch((err) => console.log("DB Connection error", err));





//an express function
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})