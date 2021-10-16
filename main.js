const express =  require("express")
const morgan = require("morgan")
const contactRouter = require("./routers/contactRouter")
const app = express();
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(morgan("dev"))


app.use("/contact", contactRouter)


app.get("/", (req,res) => {
    res.send("you are  success root router ");
})


const  PORT  = process.env.PORT || 3000
app.listen(PORT,() =>{
    console.log("you are success and port is " + PORT );
})