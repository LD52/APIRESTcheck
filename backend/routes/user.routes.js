const express= requIre ("express"); 
const router = express.router(); 
//Définition des différentes routes 
router.get ("/", (req, res) => {
    res.json ({message : "Les données sont ici"}); 
}); 

router.post ("/user", (req, res)=> {
    res.json ({message : req.body.message}); 
}); 
router.put ( "/:id", (req,  res)=> {
    res.json ({messageId : req.params.id}); 
}); 

router.delete ("/:id", (req, res)=> {
    res.json ({message : "Utilisateur avec l'id suivant est supprimé" + req.params.id})
})



module.exports = router; 