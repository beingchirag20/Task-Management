require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

//Middleware
app.use(cors()); 
app.use(express.json());


//MongoDb connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDb is connected successfully'))
.catch((err) => console.log("Mongodb connection error: ", err));

//Routes
app.use('/api/tasks', taskRoutes) 

//Start Server
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})