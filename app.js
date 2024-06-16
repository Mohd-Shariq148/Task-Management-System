require('dotenv').config();
const express = require('express');
const connectDB = require('./models/connection');
const bodyParser = require('body-parser');
const routes = require('./routes/taskRoutes');
const errorhandeler = require('./middleware/errorHandler')
const app = express();
const PORT = process.env.PORT || 5000

//1.mongo db connection
connectDB();

//2.middlewares
app.use(express.json());

//3.routes
app.use('/api/tasks',routes);

//4.error handeler middleware
app.use(errorhandeler);

app.listen(PORT,(req,res)=>{
console.log(`The server is listening at ${PORT}`);
});