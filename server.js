const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

mongoose.promise = global.promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!!");
}).catch(err => {
    console.log("Could not coinnect to the database", err);
    process.exit();
})

app.get('/', (req,res) => {
    res.json({"message": "Hello Crud Node Express"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})