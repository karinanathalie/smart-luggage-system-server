const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/smart-luggage-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(`Error connecting to MongoDB: ${err}`))

const cabinRoutes = require('../routes/cabinRoutes');
app.use('/api/cabin', cabinRoutes);

const baggageRoutes = require('../routes/baggageRoutes');
app.use('/api/baggage', baggageRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});