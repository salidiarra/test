var express = require('express');
var app = express();


function fact(nbr){
    var i, nbr, f = 1;
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }
   fact(35)
app.get('/', function(req, res) {
    var tmp = req.params.fff
    var z= fact(35)
  //console.log("Calcul fonction fact");
  res.end ("le resultat final" +" " + z);
});
app.get('/:p1', function(request, res) {
    var p1 = request.params.p1;
    var z= fact(p1)
    console.log('la factorielle de 35 est' + z);
    res.end ("le resultat final" +" " + z);
   });

app.listen(8080, function () {
  console.log('Mon serveur écoute le port 8080')
})