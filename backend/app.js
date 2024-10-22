const express=require('express')
const cors=require('cors')
const morgan=require('morgan');
const app=new express;

app.use(morgan('dev'));
app.use(cors());

const eRoute=require('./routes/employeeRoute');
app.use('/employee', eRoute)


require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');

app.listen(PORT,()=>{console.log(`Server is initiated on PORT ${PORT}`);})