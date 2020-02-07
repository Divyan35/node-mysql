//const { create } = require("./user.service");
const { create, getUsers,getUserByUserId,updateUser, deleteUser } = require("./user.service");

//const { genSaltSync,hashSync } = require("bcrypt")

module.exports = {
    createUser:(req,res)=>{
        const body = req.body;
        //const salt = genSaltSync(10);
        //body.password = hashSync(body.password,salt);
        create(body,(err,results)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                success:0,
                message:"database connection error"
            });
        }
        return res.status(200).json({
            success:1,
            data: results
        });
    });
    },

    getUserByUserId:(req,res)=>{
        const id = req.params.id;
        getUserByUserId(id,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!result){
                return res.json({
                    success:0,
                    message:"record not found"
                });
            }
            return res.json({
                success:1,
                data:results
            });
        });
    },

    getUsers :(req,res)=>{
        getUsers((err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data:results
            });
        });
    },

    updateUsers:(req,res)=>{
        const body = req.body;
        updateUser(body,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message:"updated successfully"
            });
        });
    },

    updateUsers:(req,res)=>{
        const body = req.body;
        updateUser(body,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message:"updated successfully"
            });
        });
    },

    deleteUser:(req,res)=>{
        const body = req.body;
        deleteUser(data,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"record not found"
                });
            }
            return res.json({
                success:1,
                message:"user deleted successfully"
            });
        });
    }

}