var http = require("http");

http.createServer(function(istek,cevap){

console.log("Gelen istek adresi:" +istek.url)

cevap.writeHead(200,{"content-type": "text/html", "charset": "utf8"});

cevap.write("<h1> Hoþgeldiniz </h1>")


}).listen(1234);