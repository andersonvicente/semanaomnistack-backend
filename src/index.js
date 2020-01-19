const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

require('dotenv').config();

setupWebSocket(server);

mongoose.connect( process.env.REACT_APP_MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//app.use(cors({ origin: `${process.env.REACT_APP_API_URL}` }));
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen( process.env.PORT || 3333);