const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const { saveUser } = require('./controllers/user');
const path = require('path');

const app = express();

// bodyparser middleware
app.use(bodyParser.json());
app.use(cors());

// mongodb
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connected'))
    .catch(err => console.log('Error : ', err))

// db
const db = mongoose.connection;

// bring in routes
const routes = require('./routes/routes');

// middlewares
app.use('/api', routes)


// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(('client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));