const express = require('express');
const postsroutes = require('./router/postrouter');
const app = express();
// app.use(cors());
app.use(express.json());
app.use('/api/posts', postsroutes);

module.exports = app;