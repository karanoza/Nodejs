var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    fs.readFile("test.html", function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><p>This is student Page.</p> </body> </html>");
        res.end();
      }
    });
  })
  .listen(5000);
console.log("Node.js web server at port 5000 is running..");
