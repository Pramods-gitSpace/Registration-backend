var studentService=require('./studentService.js');
var registerFn = async(req, res) =>
{
 try{
     console.log(req.body);
     var status = await studentService.createStudentDBService(req.body);
     console.log(status);
     if(status){
         res.send({"status": true, "message": "student Registered successfully."});
         res.end();
     }
     else{
         res.send({"status":false, "message":"student registration failed...!"})
         res.end();
     }
     
 }
 catch(err){ console.log(err)}
}


var loginFn = async(req, res) => 
{
    var result=null;
    try{
        result = await studentService.loginStudentDBService(req.body);
        if(result){
            res.send({"status": result.status, "message": result.msg });
        }
        else{
            res.send({"status": false, "message": "no result" })
        } 
    }
    catch(err){ 
        console.log(err)
        res.send({"status": false, "message": "error while validating..!" })

    }
}


module.exports = {registerFn,loginFn};
