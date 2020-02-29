var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic("./index.html")).listen(3000, function(){
    console.log('Server running on 3000...');
});
// By default the port will be 8080. To run http-server on a specific port type: http-server -p 3000