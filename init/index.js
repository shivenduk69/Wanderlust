const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongoURL = 'mongodb://127.0.0.1:27017/wanderLust';

main()
    .then(()=>{
        console.log("connected to database");
    })
    .catch((err)=>{
        console.log(err);
    })


async function main(){
    await mongoose.connect(mongoURL);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj,
        owner: '691f09a0e3215852680525e3',
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialised");
}
initDB();