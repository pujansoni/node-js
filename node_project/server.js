var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// To serve the static files using express js we can use the static method of express to serve  the file
// Here we are serving index.html.file through the __dirname option
app.use(express.static(__dirname));
// The line below tells the bodyParser that we expect the json request to be coming in with our http requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Jane', message: 'Hello'}
]
app.get('/messages', (req, res) => {
    res.send(messages);
});
app.post('/messages', (req, res) => {
    messages.push(req.body);
    res.sendStatus(200);
});
var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
});