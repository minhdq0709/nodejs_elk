const express = require('express');
const routerStudent = require('./Router/Student');

const app = express();

app.use('/api/student', routerStudent);

app.listen(8084, function(){
    console.log("Your app running on port " + 8084);
})