const users = require("../models/user");

function getAllUsers(req, res, next){
    res.json(users);
}

function getUserById(req, res, next) {
    const userId = req.params.id;
    
     const user = users.find(user => user.id == userId);
    
     if (!user) {
    res.status(404).json({ message: "User not found!" });
    }
    
     res.json(user);
    }

function updateUser(req, res, next){
    const { name } = req.body;
    const userId = req.params.id;
    
    const user = users.find(user => user.id == userId);
    
    if (!user){
        return res.status(404).json({message : "user not found"});
    }
    
    user.name = name;
    
    res.json(user);
    });
}

function deleteUser(req, res, next){
    const userId = req.params.id;
    const userIdInDB = users.findIndex(user => user.id == userId);

    if(userIdInDB < 0){
        return res.status(404).json({ message : "user not found"});
    }

    users.splice(userIdInDB, 1);

    res.status(204).end();
});
}

module.exports = {
 getAllUsers,
 getUserById,
 createUser,
 updateUSer,
 deleteUser
};
