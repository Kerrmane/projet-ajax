function main(){
    fetch('https://catfact.ninja/breeds?limit=1')
    .then(resultat => resultat.json())
    .then(resultat => console.log(JSON.stringify(resultat)))
    .catch(error => alert("erreur  " + error))

}
main();
