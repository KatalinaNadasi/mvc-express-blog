const express = require('express');
const homerouter = require('./routes/homerouteur');
const postsrouteur = require('./routes/postsrouteur');

const app = express();
const port = 8888;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'pug');


app.use('/', homerouter, postsrouteur);


app.listen(port, () => console.log(`ok on port ${port}`));
