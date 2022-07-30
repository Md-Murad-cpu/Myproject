require("dotenv").config();

const dev = {
    app : {
        port: process.env.port || 10000,
     },
    
    db: {

        url: process.env.DB_URL || "mongodb:// localhost:60017/user1DemoDB",
    },




}

module.exports = dev;