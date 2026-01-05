const express  = require(`express`)

const app = express()

const port = 8000

app.get("/users",(req ,res)=>{
    res.send(`User data is here ✅ `)
})

app.listen(port , ()=>{
    console.log(`user Server is running at http://localhost:${port}`);
    
})