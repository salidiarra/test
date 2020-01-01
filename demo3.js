var http = require('http');

function fact(nbr){
  var i, nbr, f = 1;
  for(i = 1; i <= nbr; i++)  
  {
    f = f * i;   // ou f *= i;
  }  
  return f;
}


var server = http.createServer(function(req, res) {
  res.writeHead(200);
  var z= fact(35)
  console.log("Calcul fonction fact");
  res.end ("le resultat final" +" " + z);
});
server.listen(8080);
