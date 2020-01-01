function fact(nbr){
    var i, nbr, f = 1;
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }
  //console.log(fact(3));
  function affichage(t){
    console.log("le resultat final" +" "+ t);
  } 
var z= fact(35)
affichage(z)