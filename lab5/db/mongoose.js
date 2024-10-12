const mongoose = require('mongoose');
const connectionURL = process.env.MONGO_URL || 'mongodb://localhost:27017/task-manager-api';

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error);
});
