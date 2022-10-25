const express = require('express');
const app = express();
const port = 8008;
const dbconnection = require('./db');
const imageRouter = require('./routes/router');
const cors = require('cors');

dbconnection();

app.use(express.json());
app.use(cors());

app.use('/api/imgapp/uploads/', express.static('./uploads'));
app.use('/api/imgapp/', imageRouter);

app.listen(port, ()=>{
    console.log(`Server running on port ${port} ...`);
})