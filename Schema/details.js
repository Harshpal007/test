const mongoose= require('mongoose')
const { stringify } = require('querystring')
const detailschema= mongoose.Schema({
    Name_of_the_Candidate:{type:string,
    required:true},
    Email:{type:string,
        required:true},
    Mobile_No:{type:string,
        required:true},
    Date_of_Birth:{type:Date,
        required:true},
    Work_Experience:{type:string,
        required:true},
    Resume_Title:{type:string,
        required:true},
    Current_Location:{type:string,
        required:false},
    Postal_Address:{type:string,
        required:false},
    Current_Employer:{type:string,
        required:false},
    Current_Designation:{type:string,
        required:false},  
    
})

module.exports=mongoose.model('details',detailschema)