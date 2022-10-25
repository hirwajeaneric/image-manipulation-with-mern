const mongoose = require('mongoose');

const DB='mongodb://127.0.0.1:27017/image-manipulation';

module.exports = ()=> {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(DB, connectionParams);
        console.log('Connected to database successfully');
    }catch(error){
        console.log("Could not connect to database...");
    }
}