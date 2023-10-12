const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());

// import router here
const users = require('./routes/DataRoutes');

app.use('/api/data',users);
app.get('/',(req,res)=>{
    res.send("Welcome");
})

// create server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})