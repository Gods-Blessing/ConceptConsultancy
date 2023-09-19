import mongoose from 'mongoose';

mongoose.connect(process.env.BE_DB_URL);

const db = mongoose.connection;

db.once('error', ()=>{
    console.log("unble to connect to db");
    return;
})

db.on('open', ()=>{
    console.log('connected to db')
    return;
})

export default mongoose;
