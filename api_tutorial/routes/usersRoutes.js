const express = require("express");
const router = express.Router();

// IMPORTANDO O CONTROLLER
const usersControlles = require("../controllers/usersControllers");


    //OBTER TODOS OS USUARIOS 
    router.get("/:id", usersControllers.getUserById);

 router.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    
     const user = users.find(user => user.id == userId);
    
     if (!user) {
    res.status(404).json({ message: "User not found!" });
    }
    
     res.json(user);
    });
 
    //

    router.post("/", (req, res) => {
        const {id, name, email} = req.body;
       
       const userAlreadyExists = users.find(user => user.email === email);
       
           if(userAlreadyExists){
             return res.status(409).json({ message: "user Already Exists"});
           }
       
           const user = {id, name, email};
       
           users.push(user);
       
           res.status(201).json(user);
       });

       //
       router.put("/:id", usersControlles.getUserById) 
    
        //
        router.delete("/:id", usersControlles.getUserById)
          

module.exports = router;