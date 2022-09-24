var express=require('express')

app=express();

//post method
app.post("/sample",function (req,res){
    res.send("This is simple post request");
})


//post in header method

app.post("/nine",function (req,res){
   let userName= req.header("userName");
   let password= req.header("password");
   res.send("User name:"+userName,+ "Password"+password);
   res.status(201,).end("Data Send Successful")
});


// url quest in post method


app.post('/search',function (req,res){
    let firstName=req.query.firstName;
    let lastName=req.query.lastName;
    res.send(firstName+ " "+lastName);

});


//Get Request Header

app.get('/ten',function (req,res){
    let firstName=req.header('firstName');
    let lastName=req.header('lastName');
    res.end(firstName+ " "+ lastName);

})


//url query get request
app.get("/eleven",function (req,res){
 let firstName=   req.query.firstName;
 let lastName=   req.query.lastName;
 res.end(firstName+ " "+ lastName);

})


//route middleware

app.use('/about',function (req,res,next){
    console.log("Im about middleware");
    next()
})


//application level middleware joto bar req res hobe totobar e execute hobe

app.use(function (req,res,next){

    console.log("Hey Im Application level Middleware");

    next();
})




app.listen(8000,function (){
    console.log("Server Run Successfully!")
})