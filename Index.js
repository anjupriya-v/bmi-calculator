const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/Index.html"));
});
app.post("/", (req, res) => {
  if (req.body.Weight > 0 && req.body.Height > 0) {
    console.log(height, weight);
    var weight = Number(req.body.Weight);
    var height = Number(req.body.Height);
    var result = weight / ((height / 100) * (height / 100));
    var bmi = Math.floor(result * 10) / 10;
    var bmiCategory = "";
    var healthRisk = " ";
    if (bmi <= 18.4) {
      bmiCategory = "Underweight";
      healthRisk = "Malnutrition risk";
    } else if (bmi > 18.5 && bmi <= 24.9) {
      bmiCategory = "Normal Weight";
      healthRisk = "Low Risk";
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiCategory = "Overweight";
      healthRisk = "Enhanced risk";
    } else if (bmi >= 30 && bmi <= 34.9) {
      bmiCategory = "Moderately obese";
      healthRisk = "Medium risk";
    } else if (bmi >= 35 && bmi <= 39.9) {
      bmiCategory = "Severely Obese";
      healthRisk = "High risk";
    } else {
      bmiCategory = "Very Severely Obese";
      healthRisk = "Very High Risk";
    }
    res.send(
      '<body style="background-color:violet"><div style="display:flex;justify-content:center;flex-direction:column;align-items:center; height:100vh;" ><h1 style="text-align:center;font-size:3em;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">Your BMI is  : ' +
        bmi +
        '</h1><h1 style="text-align:center;font-size:3em;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">BMI Category  : ' +
        bmiCategory +
        '</h1><h1 style="text-align:center;font-size:3em;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">Health Risk  : ' +
        healthRisk +
        '</h1><a href="/">Calculate BMI</a></div></body>'
    );
  } else {
    res.send(
      "<body style='background-color:violet'><div style='display:flex;justify-content:center;flex-direction:column;align-items:center;height:100vh'><h1 style='text-align:center;font-size:3em;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'>Please enter valid Height and Weight values</h1><a href=" /
        ">Calculate BMI</a></div></body>"
    );
  }
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running at port 3000");
});
