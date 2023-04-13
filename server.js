const express=require("express")
const app=express()

const path=require("path")
const http=require("http")
const fs=require("fs")


app.use(express.json())
app.use(express.urlencoded({extended:true}))

fs.readFile(path.join(__dirname,"data.json"),"utf8",(err,data)=>{
    const info=JSON.parse(data)

   const user=info.users.find(x=>x.username=="ew")
    console.log(user)
})


app.use("/",express.static(path.join(__dirname,"public")))
app.use("/",require("./routes/root"))
app.use("/",require("./routes/about"))
app.use("/",require("./routes/signup"))
 app.use("/",require("./routes/cart"))
 app.use("/",require("./routes/checkout"))
 app.use("/",require("./routes/contact"))
 app.use("/",require("./routes/jewelleries"))
 app.use("/",require("./routes/login"))




app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})








// http.createServer((req,res)=>{
    
// }).listen(4000)


app.listen(4000,()=>{
    console.log("app is running")
})