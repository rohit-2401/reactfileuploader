const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('mongodb+srv://uploaduser1:iQgbQWCN9pK8kiHD@cluster0.hfmbc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        const conn = await mongoose.connect('mongodb+srv://uploaduser1:iQgbQWCN9pK8kiHD@cluster0.hfmbc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log(`MONGO DB CONNECTED: ${conn.connection.host}`);
    }
    catch (error) {
        console.log(`${error}`);
        process.exit(1);
    }
}


module.exports = connectDB;