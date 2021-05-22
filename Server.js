const path=require("path");
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.get('/', (req,res)=>{
res.sendFile(path.join(__dirname+"/Index.html"));
});
app.post('/',(req,res)=>{

    if(req.body.Weight>0&&req.body.Height>0){
    var weight=Number(req.body.Weight);
    var height=Number(req.body.Height);
    var result=weight/((height/100)*(height/100));
    var bmi = Math.floor(result* 10) / 10; 
    var bmiCategory="";
    var healthRisk=" ";
    if(bmi<=18.4){
        bmiCategory="Underweight";
        healthRisk="Malnutrition risk";
    }
    else if(bmi>18.5 && bmi<=24.9){
        bmiCategory="Normal Weight";
        healthRisk="Low Risk"
    }
    else if(bmi>=25 && bmi<=29.9){
        bmiCategory="Overweight";
        healthRisk="Enhanced risk";
    }
    else if(bmi>=30 && bmi<=34.9){
        bmiCategory="Moderately obese";
        healthRisk="Medium risk";
    }
    else if(bmi>=35 && bmi<=39.9){
        bmiCategory="Severely Obese";
        healthRisk="High risk";
    }
    else{
        bmiCategory="Very Severely Obese";
        healthRisk="Very High Risk";

    }
res.send('<div style="display:flex;justify-content:center;flex-direction:column;align-items:center;" ><h1 style="text-align:center;font-size:3em">Your BMI is: '+ bmi+'</h1><h1 style="text-align:center;font-size:3em">BMI Category: '+bmiCategory+'</h1><h1 style="text-align:center;font-size:3em">Health Risk: '+healthRisk+'</h1></div>');
    }
    else{
    res.send("<div style='display:flex;justify-content:center;flex-direction:column;align-items:center;'><h1 style='text-align:center;font-size:3em'>Please enter valid Height and Weight values</h1>")
    }
});
app.listen(process.env.PORT ||3000,()=>{
    console.log("Server is running at port 3000");
});