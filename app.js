
function main(){
 const cat =   fetch('https://catfact.ninja/breeds?limit=1')
.then(resultat => resultat.json())
.then(json => json)
console.log(cat);

}
main();
