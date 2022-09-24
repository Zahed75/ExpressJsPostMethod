var express=require('express');

//multer setup

var multer=require('multer');



//File Upload Setup

var storage=multer.diskStorage({
    function(req,file,callback){
        callback(null,'./uploads');
    },

    functions(req,file,callback){
        callback(null,file.originalname)
    }
});

var upload=multer({storage:storage}).single('myfile')

app=express();




//File Upload route

app.post("/File",function (req,res){
    upload(req,res,function (error){
        if(error){
            res.send("File Upload Failed!");
        }
        else{
            res.send("File Upload Success!");
        }
    })
})




app.listen(8000,function (){
    console.log("Server Run Successfully!")
})