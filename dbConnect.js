/// DATABASE Connections
//database connection
const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb+srv://SIT725:hmxbzfq520@sit-725-2021-week4.t0y7c.mongodb.net/SIT725-t2-week4?retryWrites=true&w=majority";
const uri = "mongodb+srv://sit725-t2-week4:devil1126@sit725.0xbrc.mongodb.net/sit725-t2-week4?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

let codesCollection;

mongoClient.connect((err,db) => {
    // projectsCollection = mongoClient.db("deakinCrowds").collection("projects");
     if(!err){
       console.log('Database Connected')
     }else{
       console.log('[error]',err)
     }
 });
 

exports.mongoClient = mongoClient;
