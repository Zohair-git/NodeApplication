
const express = require("express");

const app = express();

const dotenv = require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs");

const {ProductPage,CreateProduct} = require("./Controller/Product")


app.route("/createproduct").get(ProductPage).post(CreateProduct);





app.listen( process.env.PORT , function(){
    console.log(`Server is running on the port ${process.env.PORT}`)
}  );
