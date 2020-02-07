const pool = require("../../config/database");

module.exports={
    create: (data,callback)=>{
        pool.query(
            `Insert into registration(id, firstName, lastName, gender, email,password, number)
                        values(?,?,?,?,?,?,?)`,
                [
                    data.id,
                    data.first_name,
                    data.last_name,
                    data.gender,
                    data.email,
                    data.password,
                    data.number
                ],
                (error, results, field)=>{
                    if(error){
                     return callback(error);
                    }
                    return callback(null,results)
                }
        );
    },

    getUsers: callback =>{
        pool.query(`select id,firstName,lastName,gender,email,number from registration`,
        [],
        (error, results,fields)=>{
            if(error){
            return callback(error);
            }
            return callback(null,results);
        });
    },

    getUserByUserId:(id,callback)=>{
        pool.query(`select id,firstName,lastName,gender,email,number from registration where id = ?`,
        [id],
        (error, results,fields)=>{
            if(error){
            return callback(error);
            }
            return callback(null,results[0]);
        });
    },

    updateUser: (data,callback)=>{
        pool.query(
            `update registration set firstName =? , lastName=?, gender=?, email=?,password=?, number=? where id = ?`,
                [
                    data.first_name,
                    data.last_name,
                    data.gender,
                    data.email,
                    data.password,
                    data.number,
                    data.id
                ],
                (error, results, field)=>{
                    if(error){
                     return callback(error);
                    }
                    return callback(null,results[0]);
                }
        );
    },

    deleteUser: (data,callback)=>{
        pool.query(
        `delete from registration where id = ?`,
        [data.id],
        (error, results,fields)=>{
            if(error){
            return callback(error);
            }
            return callback(null,results[0]);
        });
    }


}
