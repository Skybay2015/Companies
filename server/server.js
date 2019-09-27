const express = require('express');
const mongoose = require('mongoose');
const companyRouter = require('./router/companyRouter');
const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
   res.append('Access-Control-Allow-Origin', ['*']);
   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.append('Access-Control-Allow-Headers', 'Content-Type');
   next();
});

app.use('/company', companyRouter);

const uri = 'mongodb+srv://Skybay:Doc200002@cluster0-ewovi.mongodb.net/Company';
mongoose.connect(uri, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
   console.log('Mongo DB connected');
   app.listen(PORT, () => console.log(`Server has started  on ${PORT}`));
});
