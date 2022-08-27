const express = require('express');
const app = express();
const PORT = process.env.process || 3000;
const itemRoute = require('./routes/items');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/defaults');

mongoose.connect(config.URI, { useNewUrlParser: true });
let conn = mongoose.connection;
conn.on('connected', function () {
    console.log('database is connected successfully');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.use('/item', itemRoute);
app.listen(PORT, () => console.log('listening on port ', PORT));