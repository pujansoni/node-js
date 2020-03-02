var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
const MongoClient = require('mongodb').MongoClient;
// var mongoose = require('mongoose')
// To serve the static files using express js we can use the static method of express to serve  the file
// Here we are serving index.html.file through the __dirname option
app.use(express.static(__dirname))
// The line below tells the bodyParser that we expect the json request to be coming in with our http requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const dbURL = "mongodb+srv://pujansoni:mlab%401997@cluster0-lfcq3.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(dbURL, { useNewUrlParser: true });


var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Jane', message: 'Hello'}
]
app.get('/messages', (req, res) => {
    res.send(messages)
})
app.post('/messages', (req, res) => {
    messages.push(req.body)
    io.emit('message', req.body)
    res.sendStatus(200);
})
io.on('connection', (socket) => {
    console.log('a user connected')
})
// mongoose.connect(dbURL, (err) => {
//     console.log('mongo db connection', err)
// })
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close()
});
var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})