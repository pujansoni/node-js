var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic("./index.html")).listen(8081, function(){
    console.log('Server running on 8081...');
});
// By default the port will be 8080. To run http-server on a specific port type: http-server -p 8081