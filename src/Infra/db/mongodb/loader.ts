import mongoose from 'mongoose';
import { mongo } from '@/App/Configs/mongo';
import { MongoMemoryServer } from 'mongodb-memory-server';

export default async () => {
    console.log('Init mongo connection...', mongo.url);
    const mongod = await MongoMemoryServer.create();
    const uri = await mongod.getUri();
    const instance = await mongoose.connect(uri, {
        dbName: `${mongo.dbName}_test`,
    });

    console.log('Mongo connected!');
    return instance;
}
