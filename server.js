const port = 3000;
const host = '127.0.0.1';
const publicFolder = 'pub';

//server imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//root
app.use(express.static(__dirname+'/'+publicFolder+'/'));
app.use( bodyParser.json() ); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

//requests
const controller = require('./server/controller'); controller(app);

//start up tab
const server = app.listen(port, function () {
    console.log(`Server listening at: `);
    console.log(`http://${host}:${port}/`);
});

module.exports = {app, server};