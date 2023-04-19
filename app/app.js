const ip = require("ip");
const http = require("http");

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   const host_ip = 'host_ip => ' + ip.address();
   console.log('host_ip =>', host_ip);
   response.end(`This is ${host_ip} echo\n`);
}).listen(5000);
