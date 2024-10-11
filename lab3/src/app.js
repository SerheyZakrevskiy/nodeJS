const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routers/user');
require('./db/mongoose');

dotenv.config();

const app = express();
app.use(express.json());

app.use(userRouter);

app.listen(3000, () => {
    console.log('Сервер запущено на порту 3000');
});
