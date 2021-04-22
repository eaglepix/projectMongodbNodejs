import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';  //.MongoClient
import routes from './src/routes/routes';
const debug = require('debug')('app:index');

const app = express();
const PORT = 4000;

// function MongoDB connect() 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

/* If you're using Mongoose 5, please remove mongoose.Promise = global.Promise;. 
That line was used to address the below deprecation warning with promises in Mongoose 4:
"WARNING: Mongoose: mpromise (mongoose's default promise library) is deprecated, 
plug in your own promise library instead."
*/

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// routes
routes(app);

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);


