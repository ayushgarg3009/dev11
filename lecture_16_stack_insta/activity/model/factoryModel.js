const util = require("userModel");

function.createFactory(userObj){
    userObj.uid = uuidv4();
    // create user 
    return new Promise(function (resolve, reject) {
        connection.query("INSERT INTO ${entity} SET ?", userObj, function (err, res) {
            if (err) {
                reject(err)
                return;
            } else {
                resolve(res);
            }
        })
    })
}
