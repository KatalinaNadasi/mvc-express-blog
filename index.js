const express = require('express');
const homerouter = require('./routes/homerouteur');
const postsrouteur = require('./routes/postsrouteur');
const bodyParser = require('body-parser');

const app = express();
const port = 8888;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(bodyParser.json());
// // Support URL-encoded bodies
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.set('view engine', 'pug');


app.use('/', homerouter, postsrouteur);


app.listen(port, () => console.log(`ok on port ${port}`));
