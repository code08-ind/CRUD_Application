import mongoose from 'mongoose'

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-gmnftjq-shard-00-00.qdegf1y.mongodb.net:27017,ac-gmnftjq-shard-00-01.qdegf1y.mongodb.net:27017,ac-gmnftjq-shard-00-02.qdegf1y.mongodb.net:27017/CRUD_APPLICATION?ssl=true&replicaSet=atlas-xxete9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connection established");
    } catch (error) {
        console.log("Error while connecting to mongodb", error);
    }
}

export default Connection;