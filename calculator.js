const express = require("express");
const bodyParser=require("body-parser");
const app = express()
//app.use(bodyParser);
//app.use(bodyParser.text);
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//port = 3000;
app.get("/Calculator",function(request,response)
{
      //console.log(request);
      response.sendFile(__dirname + "/index.html");

});



app.post("/index", function (request, response) {
  
  //console.log(request.body.num1);
  console.log(request.body);
  var num1=Number(request.body.num1);
  var num2=Number(request.body.num2);
  var result=num1+num2;
  response.send("The result of the calculation is : "+result);
});






// BMI Calculator
app.get("/bmiCalculator", function (request, response) {
  //console.log(request)
  response.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function (request, response) {
  //console.log(request.body.num1);
  //console.log(request.body)
  var Weight = Number(request.body.weight)
  var height = Number(request.body.height)
  var result = (Weight * 10000) / (height * height)
  result = result.toFixed(2)
  response.send("The BMI Of the person : " + result + " kg/m2")
})

app.listen(3000, function () {
  console.log("Server started on port 3000")
})



