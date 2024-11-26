var http = require("http");
var dt = require("./dateTime");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currenlty: " + dt.myDateTime());
    res.end();
  })
  .listen(8080);
