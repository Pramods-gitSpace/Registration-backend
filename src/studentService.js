var studentModel = require('./studentModel.js');
var key = '123456789trytrytyr';
var encryptor = require('simple-encryptor')(key);

var createStudentDBService = (studentDetails) => {
    return new Promise(function myfun(resolve,reject){
        var studentModelData = new studentModel();
        studentModelData.firstName = studentDetails.firstName;
        studentModelData.lastName = studentDetails.lastName;
        studentModelData.email = studentDetails.email;
        studentModelData.password = studentDetails.password;
        var encrypted = encryptor.encrypt(studentDetails.password)
        studentModelData.password = encrypted;

        studentModelData.save(function result(err,result){
            if(err){
                reject(false);
            }
            else{
                resolve(true);
            }
        });
        
    });
}
var loginStudentDBService = (studentDetails) => {
    return new Promise(function myfun(resolve,reject){
        studentModel.findOne({email: studentDetails.email}, function getresult(errorvalue, result){
            if(errorvalue){
                reject({status: false, msg: "Invalid data"});
            }
            else{
                if(result != null || result != undefined){
                    var decrypted = encryptor.decrypt(result.password);
                    if(decrypted == studentDetails.password){
                        resolve({status: true, msg: "validation successful"});
                    }
                    else{
                        resolve({status: false, msg: "Invalid password"});
                    }
                }
                else{
                     resolve({status: false, msg: "Invalid student details err"});
                }
            }
        })
    });   
}

module.exports = {createStudentDBService,loginStudentDBService};