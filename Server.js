const express = require ("express"); 
const port = 5000; 

const app = express(); 


//notre première route
app.get("/user",  (req, res) => {
    res.json ({message : "voici les données"})
})

//Middleware
app.use (express.json()); 
app.use(express.urlencoded ({extended: false})); 

//Lancer notre Serveur
app.listen (port, ()=>  {
    console.log("server running at port " + port)
}); 