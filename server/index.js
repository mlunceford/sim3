require('dotenv').config();
const express = require('express')
const massive = require('massive')
const cc = require('./controller')

const {SERVER_PORT, CONNECTION_STRING}=process.env;
const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db working')
})

//endpoints
// app.post('/auth/login', cc.login)
// app.post('/auth/register', cc.register)
// app.post('/auth/logout', cc.logout)
// app.post('/auth/user', cc.getUser)

app.listen(SERVER_PORT, () => console.log('server up and running on', SERVER_PORT))