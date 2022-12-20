var express= require('express')
const upload= require('express-fileupload')

var app = express();
var router = express.Router()
var port =8000;
const reader=require('xlsx')

const mongoose=require('mongoose')



app.use(upload())


app.get('/',(req,res)=>{
    res.render(__dirname+'/views/home.ejs')
})
 let data=[]

app.post('/',(req,res)=>{
    if(req.files){
        console.log(req.files)
        var file=req.files.file
        var filename =file.name
        // console.log(filename)
        file.mv('./uploads/'+ filename,function(err){
            if(err)
            {
                res.send(err)
            }
            else{
                res.send("file moved")
            }
        })
        
        const exfile=reader.readFile('./uploads/'+filename)

        const sheets =exfile.SheetNames
        for(let i=0;i<sheets.length;i++)
        {
            const temp =reader.utils.sheet_to_json(
                exfile.Sheets[exfile.SheetNames[i]])
            temp.forEach((res)=>{
                data.push(res)
            })
        }
        console.log(data)
    }
})
app.listen(port,()=>{
    console.log("server running");
})