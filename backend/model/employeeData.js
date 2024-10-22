const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    employeeId:String,
    employeeName:String,
    designation:String,
    department:String,
    location:String,
    salary:String
})

const employeeData=mongoose.model('employee',employeeSchema)
module.exports=employeeData;