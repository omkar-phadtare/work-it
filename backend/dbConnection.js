
//var mongoUrl = "mongodb://localhost:27017/mern";
var mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mern?directConnection=true&tls=false&readPreference=primary';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const connectMongo = () => {
    mongoose.connect(uri, options, (err, db) => {
      if (err) console.error(err);
      else {
        console.log("database connection")}
    })
}

module.exports = connectMongo;