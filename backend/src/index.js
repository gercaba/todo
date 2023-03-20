const express = require('express');
const app = express();
const cors = require('cors')
const todoRouter = require('./routers/todo');

app.use(cors())

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.body);
    req.user = 'Mi usuario';
    next();
});

app.use(todoRouter);


app.listen(8000, () => {
    console.log("Server is up and running in port 8000");
});