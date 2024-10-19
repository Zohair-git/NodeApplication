const bcrypt = require("bcryptjs");



// @METHOD  ----  GET
// API      ----  http://localhost:5000/createproduct

function ProductPage(req, res) {


    return res.status(200).render("CreateProduct");
};


async function CreateProduct(req , res){
    try{

        const { productName , productCategory } = req.body;
    
        const newProduct = {
            productName,
            productCategory,
            
        }
    
        console.log(newProduct)
    
        const Response = await fetch("https://669b443d276e45187d34fa30.mockapi.io/school/product",{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify(newProduct),
        })
    
        if(Response.ok) return res.status(201).send("Created Successfull")
            
        return res.send("koi error he ")
    
    }catch(error){
        console.log(error)
    }
    

}
// @METHOD  ----  POST
// API      ----  http://localhost:5000/createproduct




module.exports = { ProductPage , CreateProduct }


