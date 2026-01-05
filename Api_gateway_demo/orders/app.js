const express  = require(`express`)
const helmet = require("helmet");
const app = express()


app.use(helmet())
const port = 8001

app.get("/Orders",(req ,res)=>{
    res.send(`Orders service is running successfuuly `)
})

app.listen(port , ()=>{
    console.log(`Orders Server is running at http://localhost:${port}`);
    
})