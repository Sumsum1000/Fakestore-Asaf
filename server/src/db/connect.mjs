import mongoose from 'mongoose';

//mongoose.connect('mongodb://localhost:27017/fakestore', {useNewUrlParser: true, useUnifiedTopology: true});

const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/fakestore'

//mongodb+srv://fakestoreuser:fakestoreuser@cluster0.aqk1t.mongodb.net/fakestore
//'mongodb+srv://fakestoreuser:fakestoreuser@cluster0.aqk1t.mongodb.net/fakestore'
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true});



//mongodb+srv://fakestoreuser:<password>@cluster0.aqk1t.mongodb.net/fakestore

