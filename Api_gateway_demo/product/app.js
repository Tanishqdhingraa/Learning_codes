const express = require("express");
const axios = require('axios')


const app = express();
const port = 8002;



app.get("/product", async(req, res) => {

    const userdata = await axios.get('http://localhost:8000/users');

    res.send("Product service is running successfully  =>  "+userdata.data);
});

app.listen(port, () => {
    console.log(`Product Server is running at http://localhost:${port}`);
});
