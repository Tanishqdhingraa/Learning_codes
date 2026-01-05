const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')


const app = express();
//defines routes and their ports
const routes = {
    '/users':'http://localhost:8000',
    '/Orders': 'http://localhost:8001',
    '/product': 'http://localhost:8002'
}

//create a proxy for each route
for(const route in routes){
    const target = routes[route];
    app.use(route,createProxyMiddleware({target}))
}

const PORT = 8005;
app.listen(PORT, () => console.log("🛜 API GATEWAY STARTED"))       