const express = require('express')
const cors = require('cors')
const config = require('config')
const PORT = config.get('port');
const authRouter = require('./DAL/Routs/user.routs')
const customerRouter = require('./DAL/Routs/customer.routs')
const calcRouter = require('./DAL/Routs/calculation.routs')
const orderRouter = require('./DAL/Routs/order.routs')
const supportRouter=require('./DAL/Routs/support.routs')

const db = require('./models');
const app = express();


app.use(cors());
app.use(express.json());
app.use('/auth',authRouter);
app.use('/customer',customerRouter);
app.use('/calc',calcRouter);
app.use('/order',orderRouter);
app.use('/support',supportRouter);




db.sequelize.sync().then((req)=>{
    app.listen(PORT,()=>{
        console.log('server run');
    });
});